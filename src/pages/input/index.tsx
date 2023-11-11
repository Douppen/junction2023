import { useUserDocument } from '@/lib/store';
import { Timestamp, arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { httpsCallable } from 'firebase/functions';
import { useEffect, useState } from 'react';
import { useAuth, useFunctions, useUser } from 'reactfire';

const fields = ['activity', 'trigger', 'body-part', 'vital-information'];
const requiredFields = ['activity', 'body-part'];

interface InputSchema {
  description: string;
  painLevel: number;
  date: string;
  fields: Record<(typeof fields)[number], string>;
}

function Input() {
  const auth = useAuth();
  const { data, status, update } = useUserDocument(auth.currentUser?.uid);
  const [value, setValue] = useState('');
  const [prevInputs, setPrevInputs] = useState<InputSchema[]>([]);
  const [painLevel, setPainLevel] = useState(0);
  const [response, setResponse] = useState<object>({});
  const [submitLoading, setSubmitLoading] = useState(false);

  const userDocumentLoading = status === 'loading';

  const painInputToJSON = httpsCallable(useFunctions(), 'AssistantPainInputToJSON');

  useEffect(() => {
    if (status === 'success') {
      const inputs = data?.inputs;
      if (inputs?.length > 0) {
        setPrevInputs(inputs.slice(0, inputs.length - 1));
        const lastInput: InputSchema = inputs[inputs.length - 1];
        const inputDate = new Date(lastInput.date);
        const today = new Date();
        if (inputDate.getDate() === today.getDate()) {
          setValue(lastInput.description);
          setPainLevel(lastInput.painLevel);
        }
      }
    }
  }, [data, status]);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmitLoading(true);

    const res: any = await painInputToJSON({
      description: value,
    });

    if (res.error) {
    }

    update({
      inputs: [...prevInputs, { description: value, painLevel, date: new Date().toISOString(), fields: {} }],
    });

    setResponse(res);
    setSubmitLoading(false);

    /*
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
    */
  };

  if (userDocumentLoading)
    return (
      <div className="flex flex-col items-center justify-center w-full h-[calc(100vh-80px)] max-h-[calc(100vh-80px)] p-5">
        <span className="loading loading-spinner loading-lg" />
      </div>
    );

  return (
    <div className="flex flex-col items-center p-5 w-full">
      <div className="w-full max-w-[800px]">
        <h1 style={{ fontSize: '40px', fontWeight: 'bold', marginBottom: '20px' }}>
          How have you been feeling recently?
        </h1>
        <p style={{ fontSize: '24px', marginBottom: '2px' }}>Describe your recent pain level to track your progress.</p>
        <p style={{ fontSize: '24px', marginBottom: '80px' }}>
          Rate your pain level on a scale from 1 to 5, describe the area of pain and feel free to add more context in
          the text box.
        </p>
        <form className="flex flex-col items-center gap-5" onSubmit={onSubmit}>
          <div className="w-full">
            <label className="label" htmlFor="pain-level">
              Pain level
            </label>
            <input
              type="range"
              id="pain-level"
              min={1}
              max="5"
              value={painLevel}
              onChange={(e) => setPainLevel(parseInt(e.target.value))}
              className="range range-error"
              step="1"
            />
            <div className="w-full flex justify-between text-s px-2">
              {[1, 2, 3, 4, 5].map((label) => (
                <span key={label}>{label}</span>
              ))}
            </div>
          </div>
          <div className="w-full">
            <label className="label" htmlFor="description">
              Description
            </label>
            <textarea
              className="textarea textarea-bordered w-full max-w-[900px] h-[200px]"
              placeholder="Type your description here..."
              id="description"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <button className="btn btn-success btn-lg" type="submit">
            Submit
          </button>
          Response:
          {JSON.stringify(response)}
        </form>
      </div>
      {submitLoading && (
        <div className="w-screen h-screen fixed top-0 left-0 bg-black bg-opacity-20 flex items-center justify-center">
          <span className="loading loading-lg" />
        </div>
      )}
    </div>
  );
}

export default Input;
