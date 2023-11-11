import Link from 'next/link';
import { useAuth, useFirestore, useFunctions, useUser } from 'reactfire';
import PainChart from '@/components/Painchart';
import { AnimateUp } from '@/components/AnimateUp';
import { zodResolver } from '@hookform/resolvers/zod';
import { doc, updateDoc } from 'firebase/firestore';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { Input } from '@/components/Input';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import { httpsCallable } from 'firebase/functions';
import dynamic from 'next/dynamic';

const ReactMediaRecorder = dynamic(() => import('react-media-recorder').then((mod) => mod.ReactMediaRecorder), {
  ssr: false,
});

function Dashboard() {
  return (
    <AnimateUp className="">
      <div className="grid grid-cols-[1fr_auto]">
        <div className="h-[90vh]">
          <div>
            <ReactMediaRecorder
              audio
              render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
                <div>
                  <p>{status}</p>
                  <button onClick={startRecording}>Start Recording</button>
                  <button onClick={stopRecording}>Stop Recording</button>
                  <video src={mediaBlobUrl} controls autoPlay loop />
                </div>
              )}
            />
          </div>
          <span className="isolate inline-flex rounded-full shadow-sm mb-5">
            <button
              type="button"
              className="relative inline-flex items-center rounded-l-full bg-stone-100 px-3 py-2 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
            >
              Pain log
            </button>

            <button
              type="button"
              className="relative -ml-px inline-flex items-center rounded-r-full bg-stone-100 px-3 py-2 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
            >
              Assistant chat
            </button>
          </span>
          <InputForm />
        </div>
        <div className="flex items-center -mt-20">{/* <PainChart /> */}</div>
        <div className="my-40">
          <h1 style={{ fontSize: '40px', fontWeight: 'bold', marginBottom: '20px' }}>Personal insights</h1>
          <p style={{ fontSize: '24px', marginBottom: '2px' }}>
            Based on your personal data, it seems like swimming is an effective paint mitigator!
          </p>
        </div>
      </div>
    </AnimateUp>
  );
}

export default Dashboard;

const InputForm = () => {
  const auth = useAuth();
  const addPainInput = httpsCallable(useFunctions(), 'addPainInput');

  const displayName = auth.currentUser?.displayName;

  const schema = z.object({
    text: z.string().max(100).optional(),
    painLevel: z.string().max(100).optional(),
  });

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      text: '',
      painLevel: '',
    },
  });

  const [currentInputIndex, setCurrentInputIndex] = useState<number>(0);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  useEffect(() => {
    form.setFocus(inputs[currentInputIndex]?.name);
  }, [currentInputIndex]);

  const [formData, setFormData] = useState({
    text: '',
    painLevel: '',
  });

  const handleStepSubmit = async (data: z.infer<typeof schema>) => {
    if (currentInputIndex === 0) {
      const text = data.text!;
      if (text.length < 20) {
        form.setError('text', { message: 'Please enter a description of at least 20 characters' });
        return;
      }
    }

    if (currentInputIndex === 1) {
      const painLevel = data.painLevel!;
      if (painLevel.length === 0) {
        form.setError('painLevel', { message: 'Please enter a valid number' });
        return;
      }
      const parsedInt = parseInt(painLevel);

      if (isNaN(parsedInt)) {
        form.setError('painLevel', { message: 'Please enter a valid number' });
        return;
      }

      if (parsedInt > 10) {
        form.setError('painLevel', { message: 'Please enter a number between 0 and 10' });
        return;
      }
      if (parsedInt < 0) {
        form.setError('painLevel', { message: 'Please enter a number between 0 and 10' });
        return;
      }

      // @ts-expect-error
      data.painLevel = parsedInt;
    }

    console.log(data);

    // Update formData with new values
    setFormData((prevFormData) => ({ ...prevFormData, ...data }));

    // Check if it's the last input, otherwise move to the next step
    if (currentInputIndex < inputs.length - 1) {
      setCurrentInputIndex(currentInputIndex + 1);
    } else {
      try {
        setCurrentInputIndex(-1);
        const delayPromise = new Promise((resolve) => setTimeout(resolve, 1000));

        delayPromise.then(() => {
          addPainInput({
            description: data.text,
            painLevel: data.painLevel,
          }).then(() => {
            form.reset();
            setHasSubmitted(true);
            setCurrentInputIndex(0);
          });
        });

        // toast.promise(delayPromise, {
        //   loading: 'Recording your log...',
        //   success: 'Done!',
        // });
      } catch (e) {
        toast.error('Something went wrong, please try again');
      }
    }
  };
  const inputs = [
    {
      name: 'text',
      label: !hasSubmitted ? `Welcome${displayName ? `, ${displayName}.` : '.'}` : 'Thank you for your input.',
      placeholder: !hasSubmitted ? 'How have you been feeling recently?' : 'Write another log?',
    },
    {
      name: 'painLevel',
      label: 'How much pain did you feel today on average?',
      placeholder: 'Enter a number between 0 and 10.',
    },
  ] as const;

  const [dots, setDots] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => {
        if (prev === 3) {
          return 0;
        }
        return prev + 1;
      });
    }, 300); // Change the dot every 500ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="h-full pb-20 flex flex-col justify-center"
      onClick={() => {
        form.setFocus(inputs[currentInputIndex]?.name);
      }}
    >
      <div className="px-4 md:px-12 -mt-8">
        <form onSubmit={form.handleSubmit(handleStepSubmit)}>
          <div className="form-control w-full">
            {inputs.map((input, index) => {
              if (index === currentInputIndex) {
                return (
                  <AnimateUp key={input.name} className="relative">
                    <Input
                      type="text"
                      label={input.label}
                      error={form.formState.errors[input.name]?.message}
                      placeholder={input.placeholder}
                      {...form.register(input.name)}
                    />
                  </AnimateUp>
                );
              }
            })}
            {currentInputIndex === -1 && (
              <AnimateUp className="relative">
                <Input type="text" disabled label={`Loading${'.'.repeat(dots)}`} />
              </AnimateUp>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
