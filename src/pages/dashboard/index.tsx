import { httpsCallable } from 'firebase/functions';
import Link from 'next/link';
import { useFunctions } from 'reactfire';
import PainChart from '@/components/Painchart';

function Dashboard() {
  const functions = useFunctions();
  const helloWorld = httpsCallable(functions, 'helloWorld');

  return (
    <div className="flex flex-col items-center">
      <Link href="input">
        <button className="btn btn-lg btn-primary my-40">Add entry</button>
      </Link>
      <button onClick={() => helloWorld({ text: 'hellooo' })}>Hello world</button>
      <PainChart />
    </div>
  );
}

export default Dashboard;
