import { Metadata } from 'next';
import Nav from '../components/Nav';
import '../styles/globals.scss';

interface RootLayoutProps {
  children?: React.ReactNode;
}

function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}

export default RootLayout;

export const metadata: Metadata = {
  title: 'Danycon',
  icons: { icon: '/favicon.ico' },
};
