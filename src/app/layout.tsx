import './globals.css'
import Link from 'next/link'

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
          <nav>
            <ul>
              <li>
               <Link href=""> d dddddddddddddddddddddddddd</Link>
              </li>
              <li>
                <Link href="project">project</Link>
              </li>
            </ul>
          </nav>
          {children}
        </body>
      </head>
    </html>
  )
}