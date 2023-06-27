import Image from "next/image" 
import styles from ".page.module.css"

export default function Home() {
  return (
    <main>
     <div className="mt-20 mb-20 ml-5">
        <h1 className="text-9xl m-2 pb-px text-gray-700 lmao font-bold"> Welcome! </h1>
        <p className="text-6xl m-2 font-semibold text-gray-600 ">You have found my portfolio</p>
     </div>
     <div>
        <Image className='m-6 ' src="/dow.png" alt="dash2" width={50} height={50}/>
        <Image className='m-6' src="/dow.png" alt="dash2" width={50} height={50}/>
        <Image className='m-6' src="/dow.png" alt="dash2" width={50} height={50}/>
     </div>
     <div>
     <h1 className="text-8xl mx-10 pb-px text-gray-700 lmao font-bold"> Personal </h1>
     <h1 className="text-8xl mx-16 pb-px text-gray-700 lmao font-bold"> Statement </h1>
     <p className="text-4xl mx-16 pb-px text-gray-600 font-bold"> Lorem ipsum dolor sit amet consectetur</p>
     </div>
    </main>
  )
}