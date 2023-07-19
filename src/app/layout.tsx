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
                <nav className="text-lg sm:text-2xl flex border border-b-2 border-l-0 t-0 border-r-0 bg-white border-gray-400 gap-0 font-semibold fixed top-0 w-full">
                    <Image className='py-1 ml-1 sm:ml-4 mr-0.5 sm:mr-6 m-2 my-1' src="dashlines.svg" alt="dash" width={30} height={30}/>
                    <a href="/" className="py-1 m-2 sm:mt-2 my-1 mr-0.5 sm:mr-4 font-medium text-gray-600 ">Scarlett&apos;s portfolio</a>
                    <a href="./project" className="text-base sm:text-2xl pt-1.5 sm:py-1 sm:m-2 my-1 ml-1 font-normal float-right text-gray-500">See all projects</a>     
                </nav>
                      {children}
                <nav className="text-base sm:text-2xl flex bottom-0 border border-t-2 border-l-0 t-0 border-r-0 border-gray-200 bg-purple-200">
                      <button className="bg-yellow-100 hover:bg-yellow-50 mt-2 mb-2 font-semibold py-1.5 px-2 sm:px-4 border border-gray-400 rounded shadow flex ml-2 sm:ml-10 text-gray-600">
                          <a href="/project">Go see my project&apos;s</a>
                      </button>
                    <a href="#" className="py-1 my-1 ml-2 sm:ml-6 mt-2 sm:mt-3 font-normal text-gray-500 top text-xl">Back to the top!</a>
                </nav>
              </body>
          </head>
      </html>
  )
}