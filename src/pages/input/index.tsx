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
