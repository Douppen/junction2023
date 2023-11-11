import Link from 'next/link';
import { useAuth } from 'reactfire';
import PainChart from '@/components/Painchart';

function Dashboard() {
  const auth = useAuth();

  const displayName = auth.currentUser?.displayName;

  return (
    <div className="flex flex-col items-center m-5">
      <div className="my-40 flex flex-col">
        <h1 style={{ fontSize: '40px', fontWeight: 'bold', marginBottom: '20px' }}>
          Welcome back{displayName ? `, ${displayName}!` : '!'}
        </h1>
        <p style={{ fontSize: '24px', marginBottom: '2px' }}>How have you been feeling recently?</p>
        <Link href="input" className="self-center mt-10">
          <button className="btn btn-lg btn-primary">Add entry</button>
        </Link>
      </div>
      <h1 style={{ fontSize: '40px', fontWeight: 'bold', marginBottom: '20px' }}>History</h1>
      <PainChart />
      <div className="my-40">
        <h1 style={{ fontSize: '40px', fontWeight: 'bold', marginBottom: '20px' }}>Personal insights</h1>
        <p style={{ fontSize: '24px', marginBottom: '2px' }}>Try to do some yoga</p>
      </div>
    </div>
  );
}

export default Dashboard;
