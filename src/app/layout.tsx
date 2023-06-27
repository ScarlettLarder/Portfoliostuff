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
        <body>
         <nav className="text-2xl flex border border-b-2 border-gray-800 gap-0 font-semibold">
          <Image className='py-1 m-2 my-1' src="dashlines.svg" alt="dash" width={30} height={30}/>
          <h1 className="flex py-1 m-2 my-1 font-medium">Scarletts portfolio</h1>
         </nav>
          {children}
        </body>
      </head>
    </html>
  )
}