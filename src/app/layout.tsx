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
                <nav className="text-lg sm:text-2xl flex border border-b-2 border-l-0 t-0 border-r-0 bg-white border-gray-400 gap-0 font-semibold fixed top-0 w-full">
                    <a href="/" className="py-1 m-2 ml-10 sm:mt-2 my-1 mr-0.5 sm:mr-4 font-medium text-gray-600 ">Scarlett&apos;s portfolio</a>
                    <a href="./project" className="text-base sm:text-2xl pt-1.5 sm:py-1 sm:m-2 my-1 ml-1 font-normal float-right text-gray-500">See all projects</a>     
                </nav>
                      {children}
                <nav className="text-base sm:text-2xl flex bottom-0 border border-t-2 border-l-0 t-0 border-r-0 border-gray-200 bg-purple-300">
                    <button className="bg-yellow-100 hover:bg-yellow-50 mt-2 mb-2 font-semibold py-1.5 px-1 sm:px-4 border border-gray-400 rounded shadow flex ml-2 sm:ml-10 text-gray-600">
                          <a href="/project">Go see my project&apos;s</a>
                    </button>
                    <a href="#" className="py-1 my-1 ml-2 sm:ml-6 mt-2 sm:mt-3 font-normal text-gray-500 top text-xl ">Back to the top!</a>
                      <a className="ml-2 sm:ml-5 mt-4" href="https://www.linkedin.com/in/alex-larder-066692258/">
                        <Image alt="Linked_in_logo" src="/Linked_in.png" width={25} height={30}/>
                      </a>
                      <a className='ml-2 sm:ml-5 mt-4' href="https://github.com/ScarlettLarder">
                        <Image alt="Github_Logo" src="/git_hub.png" width={25} height={30}/>
                      </a>
                      <a className='ml-2 sm:ml-5 mt-4' href="https://rive.app/@Starlett/">
                        <Image alt="Rive_Logo" src="/rive.svg" width={25} height={30}/>
                      </a>
                </nav>
              </body>
          </head>
      </html>
  )
}