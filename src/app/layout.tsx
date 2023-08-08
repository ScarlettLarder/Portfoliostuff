import './globals.css';
import Image from 'next/image'

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
              <link rel="stylesheet" href="https://use.typekit.net/aky3scy.css"/>
              <body>
                      {children}
              </body>
          </head>
      </html>
  )
}

