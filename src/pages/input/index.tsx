import { useUserDocument } from '@/lib/store';
import { useEffect, useState } from 'react';


function Input() {
  const { data, status, set } = useUserDocument('SpgDdCaYeUSU6Nt9MzlW');
  const [value, setValue] = useState('');

  useEffect(() => {
    status === 'success' && setValue(data?.test);
  }, [data, status]);

  const loading = status === 'loading';

  return (
    <div className="flex flex-col items-center">

      <header>
        <h1>How have you been feeling recently?</h1>
        <p>Describe your recent pain level to track your progress.</p>
        <p>Rate your pain level on a scale from 1-5, describe the area of pain and feel free to add more context.</p>
      </header>


      <input type="range" min={1} max="5" value="2" className="range range-error" step="1" />
      <div className="w-full flex justify-between text-xs px-2">
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
      </div>

      {loading ? (
        <span className="loading loading-spinner loading-lg" />
      ) : (
        <textarea
          className="textarea textarea-bordered w-full max-w-[500px] h-[200px] my-40"
          placeholder="Test"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              set({ test: value });
            }
          }}
        />
      )}
      {JSON.stringify(data)}
    </div>
  );
}

export default Input;
