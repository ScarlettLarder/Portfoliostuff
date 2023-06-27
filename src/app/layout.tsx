import './globals.css';
import { Navbar } from '';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
  params: {
    tag: string
    item: string
  }
}) {
  return (
    <html lang='en'>
      <head>
        <body>
           <Navbar />
          {children}
        </body>
      </head>
    </html>
  )
}