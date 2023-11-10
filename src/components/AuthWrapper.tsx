import { useSigninCheck } from 'reactfire';
import { Login } from './Login';
import { useRouter } from 'next/router';

export const AuthWrapper = ({ children }: { children: React.ReactNode }) => {
  const singinCheck = useSigninCheck();
  const router = useRouter();

  if (singinCheck.status === 'error') {
    return <div>Error: {singinCheck.error?.message}</div>;
  }

  if (singinCheck.status === 'loading') {
    return <div>Loading...</div>;
  }

  if (!singinCheck.data.user) {
    return <Login />;
  }

  return <>{children}</>;
};
