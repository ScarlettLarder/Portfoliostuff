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
         <nav className="text-2xl flex border border-b-2 bg-white border-gray-800 gap-0 font-semibold fixed top-0 w-full">
          <Image className='py-1 ml-4 mr-6 m-2 my-1 ' src="dashlines.svg" alt="dash" width={30} height={30}/>
          <a href="/" className="flex py-1 m-2 my-1 mr-4 font-medium text-gray-600 ">Scarletts portfolio</a>
          <a href="./project" className="py-1 m-2 my-1 font-normal float-right text-gray-500 ">See all projects</a>
         </nav>
          {children}
        </body>
      </head>
    </html>
  )
}