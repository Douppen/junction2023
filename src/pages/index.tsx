import { redirect } from 'next/navigation';
import { useCallableFunctionResponse, useSigninCheck } from 'reactfire';

export default function Home() {
  const signinCheck = useSigninCheck();
  const functionResponse = useCallableFunctionResponse('helloWorld');

  return redirect('/dashboard');
}
