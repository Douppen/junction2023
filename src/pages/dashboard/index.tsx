import { httpsCallable } from 'firebase/functions';
import Link from 'next/link';
import { useFunctions } from 'reactfire';
import PainChart from '@/components/Painchart';

function Dashboard() {
  const functions = useFunctions();
  const helloWorld = httpsCallable(functions, 'helloWorld');

  return (
    <div className="flex flex-col items-center">
      <Link href="input" className="my-40">
        <button className="btn btn-lg btn-primary">Add entry</button>
      </Link>
      <PainChart />
      <button onClick={() => helloWorld({ text: 'hellooo' })}>Hello world</button>
    </div>
  );
}

export default Dashboard;
