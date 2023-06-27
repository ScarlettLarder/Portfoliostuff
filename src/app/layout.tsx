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
          <nav className="text-2xl flex border border-b-2 bottom-0 bg-purple-200">
            <button className="bg-yellow-100 hover:bg-gray-100 mt-2 mb-5 font-semibold py-2 px-4 border border-gray-400 rounded shadow flex ml-10 text-gray-600">
              <a href="/project">Go see my projects </a>
            </button>
            <a href="/" className="py-1 my-1 ml-6 mt-3 font-normal float-right text-gray-500 ">Back to the top!</a>
         </nav>
        </body>
      </head>
    </html>
  )
}