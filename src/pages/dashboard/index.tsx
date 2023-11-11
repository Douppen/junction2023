import Link from 'next/link';
import { useAuth } from 'reactfire';
import PainChart from '@/components/Painchart';

function Dashboard() {
  const auth = useAuth();

  const displayName = auth.currentUser?.displayName;

  return (
    <div className="">
      <div className="flex flex-col items-center">
        <div className="my-40 flex flex-col text-center">
          <h1 className="font-bold mb-4 text-4xl">Welcome back{displayName ? `, ${displayName}!` : '!'}</h1>
          <p className="text-2xl mb-5">How have you been feeling recently?</p>
          <Link
            href="/input"
            className="self-center bg-stone-700 text-white font-bold hover:opacity-80 transition px-7 text-2xl py-2 rounded-full"
          >
            Add entry
          </Link>
        </div>
        <PainChart />
        <div className="my-40">
          <h1 style={{ fontSize: '40px', fontWeight: 'bold', marginBottom: '20px' }}>Personal insights</h1>
          <p style={{ fontSize: '24px', marginBottom: '2px' }}>Based on your personal data, it seems like swimming is an effective paint mitigator!</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
