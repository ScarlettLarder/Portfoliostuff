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
               <nav className="text-lg top sm:text-2xl flex border border-b-2 border-l-0 t-0 border-r-0 bg-white border-gray-400 gap-0 font-semibold fixed top-0 w-full">
                  <a href="/" className="py-1 m-2 ml-10 sm:mt-2 my-1 mr-0.5 sm:mr-4 font-medium text-gray-600 hover:text-purple-300 focus:text-purple-200 fadeout">Scarlett&apos;s portfolio</a>
                  <a href="/project" className="text-base sm:text-2xl pt-1.5 sm:py-1 sm:m-2 my-1 ml-1 font-normal float-right text-gray-500 hover:text-purple-300 focus:text-purple-200 fadeout">See all projects</a>     
               </nav>
                      {children}
                <nav className="text-base sm:text-2xl flex items-center justify-between bottom-0 border border-t-2 border-l-0 t-0 border-gray-200 bg-purple-200">
                    <span className='flex'>
                      <button className="bg-yellow-100 hover:bg-yellow-50 mt-2 mb-2 font-semibold py-1.5 px-1 sm:px-3 border-gray-400 rounded shadow ml-2 sm:ml-10 text-gray-600 duration-75">
                          <a href="/project">All my project&apos;s</a>
                      </button>
                          <a href="#" className="mt-3 mb-3 text-xl py-1.5 px-1 sm:px-4 rounded ml-2 sm:ml-4 text-gray-500 duration-75 hover:bg-purple-300 hover:shadow">Back to the top!</a>
                    </span>
                    <div className='flex items-center justify-between pb-2 sm:pr-20'>
                        <a className="ml-2 sm:ml-5 mt-2 p-2 delay-100 bg-purple-300 hover:bg-purple-200 rounded-lg duration-75 border-neutral-100 border-2" href="https://www.linkedin.com/in/alex-larder-066692258/">
                            <Image alt="Linked_in_logo" src="/Linked_in.png" width={25} height={30}/>
                        </a>
                        <a className='ml-2 sm:ml-5 mt-2 p-2 delay-100 bg-purple-300 hover:bg-purple-200 rounded-full duration-75 border-neutral-100 border-2' href="https://github.com/ScarlettLarder">
                            <Image alt="Github_Logo" src="/Git_hub.png" width={25} height={30}/>
                        </a>
                        <a className='ml-2 sm:ml-5 mt-2 p-2 delay-100 bg-purple-300 hover:bg-purple-200 rounded-md duration-75 border-neutral-100 border-2 drop-shadow-xl' href="https://rive.app/@Starlett/">
                            <Image alt="Rive_Logo" src="/rive.svg" width={25} height={30}/>
                        </a>
                    </div>
                </nav>
              </body>
          </head>
      </html>
  )
}

