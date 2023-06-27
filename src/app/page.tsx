import Image from "next/image" 
import styles from ".page.module.css"

export default function Home() {
  return (
    <main>
     <div className="mt-20 mb-20 ml-5">
        <h1 className="text-9xl m-2 pb-px mt-32 text-gray-700 lmao font-bold flex"> Welcome! </h1>
        <p className="text-6xl m-2 font-semibold text-gray-600 ">You have found my portfolio</p>
     </div>
     <div>
        <Image className='m-6 flex' src="/dow.png" alt="dash2" width={50} height={50}/>
        <Image className='m-6' src="/dow.png" alt="dash2" width={50} height={50}/>
        <Image className='m-6' src="/dow.png" alt="dash2" width={50} height={50}/>
     </div>
     <div>
        <Image className='block mt-24 ml-10 float-right' src="backpink.svg" alt="dash2" width={340} height={350}/>
     </div>
     <div>
        <h1 className="text-8xl mx-16 pb-px mt-32 text-gray-700 lmao font-bold"> Personal </h1>
        <h1 className="text-8xl mx-28 pb-px text-gray-700 lmao font-bold"> Statement </h1>
        <p className="text-4xl mx-16 pb-px text-gray-600 font-bold mt-4 whitespace-normal"> Lorem ipsum dolor sit amet, consectetur</p>
        <p className="text-4xl mx-16 pb-px text-gray-600 font-bold whitespace-normal"> eiusmod tempor incididunt ut labore et</p>
        <p className="text-4xl mx-16 pb-px mt-2 text-gray-600 font-normal whitespace-normal"> laboris nisi ut aliquip ex ea commodo consequat. </p>
        <p className="text-4xl mx-16 pb-px text-gray-600 font-normal whitespace-normal"> Duis aute irure dolor in reprehenderit </p>
     </div>
     <div>
        <Image className='m-6 flex' src="/dow.png" alt="dash2" width={45} height={50}/>
        <Image className='m-6' src="/dow.png" alt="dash2" width={45} height={50}/>
        <Image className='m-6' src="/dow.png" alt="dash2" width={45} height={50}/>
        <Image className='flex float-right' src="doordash.svg" alt="dash2" width={1000} height={500}/>
     </div>
     <div>
          <h1 className="text-8xl mx-16 pb-px mt-40 text-gray-700 lmao font-bold bg-local"> Education </h1>
          <Image className='flex mx-16 pb-px' src="backtedu.svg" alt="dash2" width={420} height={500}/>
     </div>
     
    </main>
  )
}