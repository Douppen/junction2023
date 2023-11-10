import Link from 'next/link';

function Dashboard() {
  return (
    <div className="flex flex-col items-center">
      <Link href="input">
        <button className="btn btn-lg btn-primary my-40">Add entry</button>
      </Link>
    </div>
  );
}

export default Dashboard;
