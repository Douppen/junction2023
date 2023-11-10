import { useUserDocument } from '@/lib/store';
import { Timestamp, arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { httpsCallable } from 'firebase/functions';
import { StringFormat } from 'firebase/storage';
import { useEffect, useState } from 'react';
import { useFirestore, useFunctions, useUser } from 'reactfire';

function Input() {
  const { data, status, set } = useUserDocument('SpgDdCaYeUSU6Nt9MzlW');
  const [value, setValue] = useState('');
  const [painLevel, setPainLevel] = useState(1);

  const [response, setResponse] = useState('');

  const OpenAIAssistantPainInputFunction = httpsCallable(useFunctions(), 'OpenAIAssistantPainInput');

  const user = useUser();
  const db = useFirestore();

  useEffect(() => {
    status === 'success' && setValue(data?.test);
  }, [data, status]);

  const loading = status === 'loading';
  const updateSliderValue = (newValue: React.ChangeEvent<HTMLInputElement>) => {
    setPainLevel(parseInt(newValue.target.value));
  };

  const onSubmit = async () => {
    console.log('running');
    const res = await OpenAIAssistantPainInputFunction({
      description: value,
    });
    // @ts-ignore
    const jsonContent = res.data[0].text.value.match(/```json\n([\s\S]*?)\n```/)[1];
    const parsedObject = JSON.parse(jsonContent);

    const docRef = doc(db, 'users', user.data!.uid);
    await updateDoc(docRef, {
      logs: arrayUnion({
        timestampCreated: Timestamp.now(),
        activity: parsedObject.activity_of_the_user,
        bodyPart: parsedObject.body_part,
        trigger: parsedObject.trigger,
        vitalInfo: parsedObject.vital_information,
      }),
    });

    console.log(parsedObject);
    setResponse(res.data as any);
  };

  return (
    <div className="flex flex-col items-center pb-32">
      <header>
        <h1 style={{ fontSize: '40px', fontWeight: 'bold', marginBottom: '20px' }}>
          How have you been feeling recently?
        </h1>
        <p style={{ fontSize: '24px', marginBottom: '2px' }}>Describe your recent pain level to track your progress.</p>
        <p style={{ fontSize: '24px', marginBottom: '80px' }}>
          Rate your pain level on a scale from 1-5, describe the area of pain and feel free to add more context in the
          text box.
        </p>
      </header>

      <form
        action=""
        className="w-[1000px]"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <div style={{ width: '68%' }}>
          <input
            type="range"
            min={1}
            max="5"
            value={painLevel}
            onChange={updateSliderValue}
            className="range range-error"
            step="1"
          />
          <div className="w-full flex justify-between text-s px-2">
            {[1, 2, 3, 4, 5].map((label) => (
              <span key={label}>{label}</span>
            ))}
          </div>
        </div>

        {loading ? (
          <span className="loading loading-spinner loading-lg" />
        ) : (
          <textarea
            className="textarea textarea-bordered w-full max-w-[900px] h-[200px] my-10"
            placeholder="Test"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => {
              // if (e.key === 'Enter') {
              //   e.preventDefault();
              //   set({ test: value, painLevel });
              // }
            }}
          />
        )}
        <button className="py-2 px-6 bg-blue-200 rounded-md font-bold" type="submit">
          Submit
        </button>
        <div>
          {/* {JSON.stringify(value)}
          {JSON.stringify(data)} */}
          <div>
            Response:
            {JSON.stringify(response)}
          </div>
        </div>
      </form>
    </div>
  );
}

export default Input;
