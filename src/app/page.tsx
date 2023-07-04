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
      <div className='bg-[url("/backpink.svg")] bg-no-repeat bg-right bg-contain'>
         <h1 className="text-8xl mx-16 pb-px mt-32 text-gray-700 lmao font-bold"> Personal </h1>
         <h1 className="text-8xl mx-28 pb-px text-gray-700 lmao font-bold"> Statement </h1>
         <p className="text-4xl mx-16 pb-px text-gray-600 font-bold mt-4 whitespace-normal"> Lorem ipsum dolor sit amet, consectetur</p>
         <p className="text-4xl mx-16 pb-px text-gray-600 font-bold whitespace-normal"> eiusmod tempor incididunt ut labore et</p>
         <p className="text-4xl mx-16 pb-px mt-2 text-gray-600 font-normal whitespace-normal"> laboris nisi ut aliquip ex ea commodo consequat. </p>
         <p className="text-4xl mx-16 pb-px text-gray-600 font-normal whitespace-normal"> Duis aute irure dolor in reprehenderit </p>
         <Image className='m-6 flex' src="/dow.png" alt="dash2" width={45} height={50}/>
         <Image className='m-6' src="/dow.png" alt="dash2" width={45} height={50}/>
         <Image className='ml-6' src="/dow.png" alt="dash2" width={45} height={50}/>
         <Image className='flex float-right' src="doordash.svg" alt="dash2" width={1000} height={500}/>
      </div>
      <div>
            <h1 className="text-8xl mx-16 pb-px mt-40 text-gray-700 lmao font-bold bg-local"> Education </h1>
            <Image className='flex mx-16 pb-px' src="backtedu.svg" alt="dash2" width={420} height={500}/>
      </div>
      <div>
            <Image className='flex mt-3 float-right' src="eduliny2.svg" alt="dash2" width={450} height={500}/>
            <p className="text-4xl mx-16 pb-px mt-5 text-gray-600 font-bold whitespace-normal"> Lorem ipsum dolor sit amet, consectetur</p>
            <p className="text-4xl mx-16 pb-px text-gray-600 font-bold whitespace-normal"> eiusmod tempor incididunt ut labore et</p>
            <p className="text-4xl mx-16 pb-px mt-5 text-gray-600 font-normal whitespace-normal"> laboris nisi ut aliquip ex ea commodo consequat. </p>
            <p className="text-4xl mx-16 pb-px mb-20 text-gray-600 font-normal whitespace-normal"> Duis aute irure dolor in reprehenderit </p>
            <Image className='flex mt-3' src="eduliny.svg" alt="dash2" width={900} height={500}/>
            <Image className='m-6' src="/dow.png" alt="dash2" width={45} height={50}/>
      </div>
      <div className="bg-[url('/Hobbyliny.svg')] bg-no-repeat bg-right bg-contain ">
            <h1 className="text-8xl mx-16 pb-px mt-40 text-gray-700 lmao font-bold bg-local"> Hobbies </h1>
            <p className="text-4xl mx-16 pb-px mt-5 text-gray-600 font-bold whitespace-normal"> Lorem ipsum dolor sit amet, consectetur fafwhgfdbv</p>
            <p className="text-4xl mx-16 pb-px text-gray-600 font-bold whitespace-normal"> eiusmod tempor incididunt ut laborefdsfsd et</p>
            <p className="text-4xl mx-16 pb-px mt-3 text-gray-600 font-normal whitespace-normal"> laboris nisi ut aliquip ex ea gfdsfsdfdscommodo consequat. </p>
            <p className="text-4xl mx-16 pb-px text-gray-600 font-normal whitespace-normal"> Duis aute irure doloehenderit </p>
            <p className="text-4xl mx-16 pb-px text-gray-600 font-normal whitespace-normal mt-3"> laboris nisi ut aliquip ex ea commodo consequat. </p>
            <p className="text-4xl mx-16 pb-px mb-20 text-gray-600 font-normal whitespace-normal"> Duis aute irure dolor in reprehefdsnderit </p>
            <Image className='m-8 flex' src="/dow.png" alt="dash2" width={45} height={50}/>
            <Image className='m-8' src="/dow.png" alt="dash2" width={45} height={50}/>
            <Image className='ml-8 mt' src="/dow.png" alt="dash2" width={45} height={50}/>
      </div>
      <div className="bg-[url('/contliny.svg')] bg-no-repeat bg-left bg-contain">
            <h1 className="text-8xl mx-16 pb-px mt-40 text-gray-700 lmao font-bold bg-local"> Contact Me </h1>
            <Image className='flex mx-16 pb-px' src="backtcont.svg" alt="dash2" width={520} height={500}/>
            <div>
                <span className="inline-flex items-center mt-16">
                    <Image className='snap-center snap-right float-right rounded-full ml-10 ' src="mail.svg" alt="dash2" width={40} height={40}/>
                    <span className="justify-between text-3xl font-normal ml-5">Email - scarlett.insane@gmail.com</span>
                </span>
              </div>
              <div>
                <span className="inline-flex items-center mt-8 mb-80">
                    <Image className='flex snap-center snap-right float-right rounded-full ml-10 ' src="call.svg" alt="dash2" width={40} height={40}/>
                    <span className="flex justify-between items-center text-3xl font-normal ml-5">Phone number - +44 01278723495</span>
                </span>

            </div>
      </div>
    </main>
  )
}