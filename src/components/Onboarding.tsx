import { httpsCallable } from 'firebase/functions';
import { forwardRef, useEffect, useState, useRef } from 'react';
import { useFirestore, useFunctions, useUser } from 'reactfire';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { doc, updateDoc } from 'firebase/firestore';
import { toast } from 'sonner';
import { useRouter } from 'next/router';

type InputProps = {} & React.ComponentPropsWithoutRef<'input'>;

{
  /* <label className="label"><span className="label-text">What is your name?</span></label> */
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ onChange, value, ...props }, ref) => {
  const [hasText, setHasText] = useState(value ? true : false);

  const handleChange = (e: any) => {
    if (onChange) {
      onChange(e);
    }
    setHasText(e.target.value.length > 0);
  };

  useEffect(() => {
    setHasText(value ? true : false);
  }, [value]);

  return (
    <input
      {...props}
      ref={ref}
      value={value}
      onChange={handleChange}
      className={`placeholder:font-bold placeholder:text-neutral-400 text-xl sm:text-2xl outline-none ${
        !hasText ? 'placeholder:opacity-100' : 'placeholder:opacity-0'
      }`}
    />
  );
});

export const OnBoardingForm = () => {
  const schema = z.object({
    phoneNumber: z.string().max(100).optional(),
    ageYears: z.string().max(100).optional(),
    preExistingDiagnoses: z.string().max(100).optional(),
    painHistoryDescription: z.string().max(100).optional(),
    alternativeTreatmentsOfInterest: z.string().max(100).optional(),
  });

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      phoneNumber: '',
      ageYears: '',
      preExistingDiagnoses: '',
      painHistoryDescription: '',
      alternativeTreatmentsOfInterest: '',
    },
  });

  const router = useRouter();
  const db = useFirestore();
  const user = useUser();
  const [currentInputIndex, setCurrentInputIndex] = useState<number>(0);

  useEffect(() => {
    form.setFocus(inputs[currentInputIndex].name);
  }, [currentInputIndex]);

  const [formData, setFormData] = useState({
    phoneNumber: '',
    ageYears: '',
    preExistingDiagnoses: '',
    painHistoryDescription: '',
    alternativeTreatmentsOfInterest: '',
  });

  const handleStepSubmit = async (data: z.infer<typeof schema>) => {
    if (currentInputIndex === 0) {
      const phoneNumber = data.phoneNumber!;
      if (phoneNumber.length === 0) {
        form.setError('phoneNumber', { message: 'Please enter a valid phone number' });
        return;
      }

      const regex = /(\+)?\d{5,15}/;

      const trimmed = phoneNumber.replace(/\s/g, '');

      if (!trimmed.match(regex)) {
        form.setError('phoneNumber', { message: 'Please enter a valid phone number' });
        return;
      }
    }

    if (currentInputIndex === 1) {
      const ageYears = data.ageYears!;
      if (ageYears.length === 0) {
        form.setError('ageYears', { message: 'Please enter a valid number' });
        return;
      }
      const parsedInt = parseInt(ageYears);

      if (isNaN(parsedInt)) {
        form.setError('ageYears', { message: 'Please enter a valid number' });
        return;
      }

      if (parsedInt > 100) {
        form.setError('ageYears', { message: 'You are too old!' });
        return;
      }
      if (parsedInt < 10) {
        form.setError('ageYears', { message: 'You are too young!' });
        return;
      }
    }

    // Update formData with new values
    setFormData((prevFormData) => ({ ...prevFormData, ...data }));

    // Check if it's the last input, otherwise move to the next step
    if (currentInputIndex < inputs.length - 1) {
      setCurrentInputIndex(currentInputIndex + 1);
    } else {
      const ref = doc(db, 'users', user.data!.uid);
      try {
        const delayPromise = new Promise((resolve) => setTimeout(resolve, 1800));

        toast.promise(delayPromise, {
          loading: 'Initializing...',
          success: 'Success!',
        });

        delayPromise.then(() => {
          updateDoc(ref, {
            onboarding: {
              ...formData,
              ageYears: parseInt(formData.ageYears),
            },
          }).then(() => {
            router.push('/dashboard');
          });
        });
      } catch (e) {
        toast.error('Something went wrong, please try again');
      }
    }
  };
  const inputs = [
    {
      name: 'phoneNumber',
      label: 'What is your phone number?',
      placeholder: 'Start typing...',
    },
    {
      name: 'ageYears',
      label: 'How old are you?',
      placeholder: 'Start typing...',
    },
    {
      name: 'preExistingDiagnoses',
      label: 'What pre-existing diagnoses do you have?',
      placeholder: 'Start typing...',
    },
    {
      name: 'painHistoryDescription',
      label: 'Describe your pain history',
      placeholder: 'Start typing...',
    },
    {
      name: 'alternativeTreatmentsOfInterest',
      label: 'What alternative treatments are you interested in?',
      placeholder: 'Start typing...',
    },
  ] as const;

  return (
    <div
      className="h-screen flex flex-col justify-center"
      onClick={() => {
        form.setFocus(inputs[currentInputIndex].name);
      }}
    >
      <div className="px-4 sm:px-12">
        <form onSubmit={form.handleSubmit(handleStepSubmit)}>
          <div className="form-control w-full">
            {inputs.map((input, index) => {
              if (index === currentInputIndex) {
                return (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    key={input.name}
                    className="relative"
                  >
                    <div className="mb-1.5">
                      <label className="font-bold text-xl sm:text-2xl">
                        <span>{input.label}</span>
                      </label>
                    </div>
                    <Input type="text" placeholder={input.placeholder} {...form.register(input.name)} />
                    {form.formState.errors[input.name] && (
                      <div className="text-sm text-neutral-400 absolute top-[4.5rem] mt-2.5">
                        {form.formState.errors[input.name]?.message}
                      </div>
                    )}
                  </motion.div>
                );
              }
            })}
          </div>
        </form>
      </div>
    </div>
  );
};
