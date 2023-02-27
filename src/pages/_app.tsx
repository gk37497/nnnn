import '../styles/global.css';

import { IBM_Plex_Sans } from '@next/font/google';
import type { AppProps } from 'next/app';
import type { FC, ReactNode } from 'react';

import { ManagedUIContext } from '@/components/ui/context';

// Initialize IBM_Plex_Mono font
const ibm = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: '400',
});

const Noop: FC<{ children?: ReactNode }> = ({ children }) => <>{children}</>;

export default function App({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop;
  return (
    <ManagedUIContext>
      <main className={ibm.className}>
        <Layout pageProps={pageProps}>
          <Component {...pageProps} />
        </Layout>
      </main>
    </ManagedUIContext>
  );
}
