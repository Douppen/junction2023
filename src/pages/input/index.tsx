import { useUserDocument } from '@/lib/store';
import { httpsCallable } from 'firebase/functions';
import { useEffect, useState } from 'react';
import { useAuth, useFunctions } from 'reactfire';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { AnimateUp } from '@/components/AnimateUp';

const fields = ['activity_of_the_user', 'trigger', 'body_part', 'vital_information'];

interface InputSchema {
  description: string;
  painLevel: number;
  date: string;
  fields: Record<(typeof fields)[number], string>;
}

function Input() {
  const router = useRouter();
  const auth = useAuth();

  if (!auth.currentUser) {
    router.push("/login")
    return
  }

  const { data, status, update } = useUserDocument(auth.currentUser?.uid);
  const [value, setValue] = useState('');
  const [_prevInputs, setPrevInputs] = useState<InputSchema[]>([]);
  const [painLevel, setPainLevel] = useState(0);
  const [submitLoading, setSubmitLoading] = useState(false);

  const userDocumentLoading = status === 'loading';

  const addPainInput = httpsCallable(useFunctions(), 'addPainInput');

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

    await addPainInput({
      description: value,
      painLevel: painLevel,
    });

    setValue("")
    setPainLevel(0)
    setSubmitLoading(false)
    toast.success("Data sent!")
  };

  if (userDocumentLoading)
    return (
      <div className="flex flex-col items-center justify-center w-full h-[calc(100vh-80px)] max-h-[calc(100vh-80px)] p-5">
        <span className="loading loading-spinner loading-lg" />
      </div>
    );

  return (
    <AnimateUp className="flex flex-col items-center p-5 w-full">
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
        </form>
      </div>
      {submitLoading && (
        <div className="w-screen h-screen fixed top-0 left-0 bg-black bg-opacity-20 flex items-center justify-center">
          <span className="loading loading-lg" />
        </div>
      )}
    </AnimateUp>
  );
}

export default Input;
