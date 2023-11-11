import { forwardRef, useState, useEffect } from 'react';

type InputProps = {
  label?: string;
  error?: string;
  speechRecog?: boolean;
  onMicChange?: (shouldListen: boolean) => void;
  listening?: boolean;
} & React.ComponentPropsWithoutRef<'input'>;

export const Input = forwardRef<HTMLTextAreaElement, InputProps>(
  ({ onChange, value, label, error, listening, speechRecog, onMicChange, ...props }, ref) => {
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
      <div>
        {label && (
          <div className="mb-1.5">
            <label className="font-bold text-2xl sm:text-3xl">
              <span>{label}</span>
            </label>
          </div>
        )}
        <div className="flex items-center gap-1 relative">
          {speechRecog && onMicChange && (
            <button
              type="button"
              className="text-neutral-400 absolute -left-9"
              onClick={() => (!listening ? onMicChange(true) : onMicChange(false))}
            >
              {listening ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3m7 9c0 3.53-2.61 6.44-6 6.93V21h-2v-3.07c-3.39-.49-6-3.4-6-6.93h2a5 5 0 0 0 5 5a5 5 0 0 0 5-5h2Z"
                  />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M17.3 11c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.49 6-3.31 6-6.72m-8.2-6.1c0-.66.54-1.2 1.2-1.2c.66 0 1.2.54 1.2 1.2l-.01 6.2c0 .66-.53 1.2-1.19 1.2c-.66 0-1.2-.54-1.2-1.2M12 14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3Z"
                  />
                </svg>
              )}
            </button>
          )}
          <textarea
            {...props}
            rows={1}
            ref={ref}
            value={value}
            onChange={handleChange}
            className={`placeholder:font-bold w-full placeholder:text-neutral-400 text-2xl sm:text-3xl outline-none bg-gray-300 disabled:bg-white ${
              !hasText ? 'placeholder:opacity-100' : 'placeholder:opacity-0'
            }`}
          />
        </div>
        {error && <div className="text-sm sm:text-xl text-neutral-400 absolute top-[4.5rem] mt-2.5">{error}</div>}
      </div>
    );
  }
);
