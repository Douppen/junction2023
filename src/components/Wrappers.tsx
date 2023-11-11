import { useFirestore, useFirestoreDocData, useSigninCheck } from 'reactfire';
import { Login } from './Login';
import { useRouter } from 'next/router';
import { UserDocData } from '@/types';
import { User } from 'firebase/auth';
import { doc } from 'firebase/firestore';

export const Wrappers = ({ children }: { children: React.ReactNode }) => {
  return <AuthWrapper>{children}</AuthWrapper>;
};

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

  return <OnboardingWrapper user={singinCheck.data.user}>{children}</OnboardingWrapper>;
};

export const OnboardingWrapper = ({ children, user }: { children: React.ReactNode; user: User }) => {
  const db = useFirestore();
  const userDocData = useFirestoreDocData(doc(db, 'users', user.uid));

  if (userDocData.status === 'error') {
    return <p>Error loading user document in onboarding wrapper</p>;
  }

  if (userDocData.status === 'loading') {
    return null;
  }

  const data = userDocData.data as UserDocData;

  // if (!data.onboardingData) {
  //   return <OnBoardingForm />;
  // }

  return (
    <div>
      {/* <p>onboarding data: {JSON.stringify(data.onboardingData)}</p> */}
      {children}
    </div>
  );
};
