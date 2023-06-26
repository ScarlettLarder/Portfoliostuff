// Typescript that is used throughout the code, good for imports and navigation

import Link from 'next/link';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <main>
          <nav>
            <Link href="/">
              Home
            </Link>
            <Link href="/projects">
              Notes
            </Link>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}