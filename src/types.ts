import { Timestamp } from 'firebase/firestore';

export type UserDocData = {
  name: string;
  email: string;
  photoURL: string;
  uid: string;
  provider: string;
  onboardingData?: OnboardingData;
};

type OnboardingData = {
  timestampOnboarded: Timestamp;
};
