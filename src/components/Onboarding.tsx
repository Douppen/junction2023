import { httpsCallable } from 'firebase/functions';
import { forwardRef, useEffect, useState } from 'react';
import { useFunctions } from 'reactfire';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';

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
      className={`placeholder:font-bold placeholder:text-neutral-400 text-2xl outline-none ${
        !hasText ? 'placeholder:opacity-100' : 'placeholder:opacity-0'
      }`}
    />
  );
});

export const OnBoardingForm = () => {
  const schema = z.object({
    ageYears: z.string().max(100).optional(),
    preExistingDiagnoses: z.string().max(100).optional(),
    painHistoryDescription: z.string().max(100).optional(),
    alternativeTreatmentsOfInterest: z.string().max(100).optional(),
  });

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    mode: 'onSubmit',
    defaultValues: {
      ageYears: '',
      preExistingDiagnoses: '',
      painHistoryDescription: '',
      alternativeTreatmentsOfInterest: '',
    },
  });

  const [currentInputIndex, setCurrentInputIndex] = useState<number>(0);

  const onSubmit = (values: z.infer<typeof schema>) => {
    console.log(currentInputIndex);
    console.log(values);
    if (currentInputIndex === 0) {
      if (values.ageYears!.length === 0) {
        form.setError('ageYears', { message: 'Please enter a valid number' });
        return;
      }
      const parsedInt = parseInt(values.ageYears!);
      if (isNaN(parsedInt)) {
        form.setError('ageYears', { message: 'Please enter a valid number' });
      } else {
        setCurrentInputIndex(1);
      }
    }

    if (currentInputIndex === 1 && values.preExistingDiagnoses) {
    }
  };

  const onError = (errors: any) => {
    console.log(errors);
  };

  const inputs = [
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
    <div className="h-[80vh] bg-white flex flex-col justify-center">
      <div className="pl-12">
        <form onSubmit={form.handleSubmit(onSubmit, onError)}>
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
                      <label className="font-bold text-2xl">
                        <span>{input.label}</span>
                      </label>
                    </div>
                    <Input type="text" placeholder={input.placeholder} {...form.register(input.name)} />
                    {form.formState.errors[input.name] && (
                      <div className="text-sm text-neutral-400 absolute top-[4.5rem] mt-2.5">
                        {form.formState.errors[input.name]?.message}
                      </div>
                    )}
                    <AnimatePresence>
                      {currentInputIndex > 0 && (
                        <button
                          onClick={() => {
                            if (currentInputIndex > 0) {
                              setCurrentInputIndex((cur) => cur - 1);
                            }
                          }}
                          className="flex items-center text-sm absolute top-[5.5rem] text-neutral-500 hover:text-neutral-600 transition"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
                            <path
                              d="M216.4 163.7c5.1 5 5.1 13.3.1 18.4L155.8 243h231.3c7.1 0 12.9 5.8 12.9 13s-5.8 13-12.9 13H155.8l60.8 60.9c5 5.1 4.9 13.3-.1 18.4-5.1 5-13.2 5-18.3-.1l-82.4-83c-1.1-1.2-2-2.5-2.7-4.1-.7-1.6-1-3.3-1-5 0-3.4 1.3-6.6 3.7-9.1l82.4-83c4.9-5.2 13.1-5.3 18.2-.3z"
                              fill="currentColor"
                            />
                          </svg>
                          <span>Previous</span>
                        </button>
                      )}
                    </AnimatePresence>
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
