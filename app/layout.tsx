import type { Metadata } from "next";
import Nav from "../components/Nav";
import ParanormalEffects from "../components/ParanormalEffects";
import "../styles/globals.scss";

interface RootLayoutProps {
  children?: React.ReactNode;
}

function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <ParanormalEffects />
        {children}
      </body>
    </html>
  );
}

export default RootLayout;

export const metadata: Metadata = {
  title: "Danycon",
  icons: { icon: "/favicon.ico" },
};
