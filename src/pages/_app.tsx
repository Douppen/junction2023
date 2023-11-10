import { AuthWrapper } from '@/components/AuthWrapper';
import { Layout } from '@/components/Layout';
import { Providers } from '@/components/Providers';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';

function SafeHydrate({ children }: { children: React.ReactNode }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return <div suppressHydrationWarning>{!isClient ? null : children}</div>;
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SafeHydrate>
      {/* base styles here */}
      <div className="antialiased">
        <Providers>
          <AuthWrapper>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </AuthWrapper>
        </Providers>
      </div>
    </SafeHydrate>
  );
}
