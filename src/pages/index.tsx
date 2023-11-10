import { useRouter } from 'next/navigation';
import { useCallableFunctionResponse, useSigninCheck } from 'reactfire';

export default function Home() {
  const router = useRouter();
  router.push('/dashboard');
}
