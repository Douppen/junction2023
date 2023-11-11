import { useWindowSize } from '@/lib/utils';
import { signOut } from 'firebase/auth';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth, useSigninCheck } from 'reactfire';

export function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useRouter();
  const signinCheck = useSigninCheck();
  const auth = useAuth();

  const [width] = useWindowSize();

  const isMobile = width < 768;

  const pageLink = (name: string) => (
    <Link
      key={name}
      className={`btn btn-ghost normal-case ${isMobile ? 'text-md' : 'text-xl'} ${
        pathname === `/${name.toLowerCase()}` ? 'btn-active' : ''
      }`}
      onClick={() => isMobile && (document.activeElement as any).blur()}
      href={`/${name.toLowerCase()}`}
    >
      {name}
    </Link>
  );

  return (
    <main>
      <div className="navbar bg-base-100">
        <div className="flex items-center justify-between w-full">
          <img src="/logo.png" alt="Logo" width="50" height="50" style={{ marginLeft: '10px' }} />
          <h1 className="text-3xl font-bold">Restorative</h1>

          {!isMobile && (
            <div className="flex items-center space-x-4 mr-20">
              {['Dashboard', 'Input', 'Chat', 'About'].map((item) => pageLink(item))}
            </div>
          )}

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
                {isMobile && ['Dashboard', 'Input', 'Chat', 'About'].map(pageLink)}
                <span className="m-3">
                  Signed in as:
                  <br />
                  {signinCheck.data?.user?.displayName}
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
