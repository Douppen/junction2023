import { forwardRef, useState, useEffect } from 'react';

type InputProps = {
  label?: string;
  error?: string;
} & React.ComponentPropsWithoutRef<'input'>;

export const Input = forwardRef<HTMLInputElement, InputProps>(({ onChange, value, label, error, ...props }, ref) => {
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
      <input
        {...props}
        ref={ref}
        value={value}
        onChange={handleChange}
        className={`placeholder:font-bold w-full placeholder:text-neutral-400 text-2xl sm:text-3xl outline-none disabled:bg-white ${
          !hasText ? 'placeholder:opacity-100' : 'placeholder:opacity-0'
        }`}
      />
      {error && <div className="text-sm sm:text-xl text-neutral-400 absolute top-[4.5rem] mt-2.5">{error}</div>}
    </div>
  );
});
