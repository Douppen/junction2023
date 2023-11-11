import { signOut } from 'firebase/auth';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth, useSigninCheck } from 'reactfire';

export function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useRouter();
  const signinCheck = useSigninCheck();
  const auth = useAuth();

  return (
    <main>
      <div className="navbar bg-base-100">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <img src='/logo.png' alt='Logo' width='50' height='50' style={{marginLeft: '10px'}} />
            <span style={{ fontSize: '25px', fontWeight: 'bold', marginLeft: '10px' }}>Restorative</span>
          </div>

        <div className="flex items-center space-x-4 mr-20">
          {['Dashboard', 'Input', 'Chat'].map((item) => (
            <Link
              key={item}
              className={`btn btn-ghost normal-case text-xl ${
                pathname === `/${item.toLowerCase()}` ? 'btn-active' : ''
              }`}
              href={`/${item.toLowerCase()}`}
            >
              {item}
            </Link>
          ))}
        </div>

          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-square btn-ghost">
                <svg fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                  ></path>
                </svg>
              </label>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <span className="m-3">
                  Signed in as:
                  <br />
                  {signinCheck?.data?.user?.displayName}
                </span>
                <li>
                  <button className="btn btn-sm" onClick={() => signOut(auth)}>
                    Log out
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>{children}</div>
    </main>
  );
}
