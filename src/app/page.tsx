import Image from "next/image" 
import styles from ".page.module.css"

export default function Home() {
  return (
    <main>
      <div className="mt-20 mb-20 ml-5">
        <Image className="float-right mr-40" src="placeholder_top.svg" alt="dash2" width={700} height={500}/>
         <h1 className="text-9xl m-2 pb-px mt-32 text-gray-700 lmao font-bold flex"> Welcome! </h1>
         <p className="text-6xl m-2 font-semibold text-gray-600 ">You have found my portfolio</p>
        
      </div>
      <div>
         <Image className='m-6 flex' src="/dow.png" alt="dash2" width={50} height={50}/>
         <Image className='m-6' src="/dow.png" alt="dash2" width={50} height={50}/>
         <Image className='m-6' src="/dow.png" alt="dash2" width={50} height={50}/>
      </div>
      <div className='bg-[url("/backpink.svg")] bg-no-repeat bg-right bg-contain overflow-visible '>
         <h1 className="text-8xl mx-16 pb-px mt-32 text-gray-700 lmao font-bold "> Personal </h1>
         <h1 className="text-8xl mx-28 pb-px text-gray-700 lmao font-bold"> Statement </h1>
         <p className="text-4xl mx-16 pb-px text-gray-600 font-bold mt-4 whitespace-normal"> Hello! I am Scarlett and welcome to my portfolio.</p>
         <p className="text-4xl mx-16 pb-px text-gray-600 font-bold whitespace-normal"> Currently in college, learning web and design</p>
         <p className="text-4xl mx-16 pb-px mt-2 text-gray-600 font-normal whitespace-normal absolute"> In this website, you will find a collection of projects,
         <p className="text-4xl text-gray-600 font-normal whitespace-normal"> my eductaion and who I am.
         </p></p>
         <p className="text-4xl mx-16 pb-px text-gray-600 font-normal whitespace-normal static isolate float-right"> </p>

         <div className="float-right">
            <div className="bg-[url('/pop_up_two.svg')] float-none bg-no-repeat bg-center mr-96 text-center bg-contain bg-local min-w-min max-w-full">
             <p>&nbsp;</p>
             <p>&nbsp;</p>
             <p>Hello!</p>
             <p>This is a placeholder</p>
             <p className="">I know very cooldwadwdgfdgfdgfdgffdgdfgfdgfdgfdgdfgdfwawda</p>
             <p>This is a placeholder</p>
             <p>&nbsp;</p>
            </div>
         </div>

         <Image className='m-10 static flex mt-24' src="/dow.png" alt="dash2" width={45} height={50}/>
         <Image className='m-10' src="/dow.png" alt="dash2" width={45} height={50}/>
         <Image className='ml-10' src="/dow.png" alt="dash2" width={45} height={50}/>
         <Image className='flex float-right ' src="doordash.svg" alt="dash2" width={1000} height={500}/>
      </div>

      <div className="bg-[url('/eduliny2.svg')] bg-no-repeat bg-right bg-contain overflow-visible">
            <h1 className="text-8xl mx-16 pb-px mt-40 text-gray-700 lmao font-bold bg-local"> Education </h1>
            <Image className='flex mx-16 pb-px' src="backtedu.svg" alt="dash2" width={420} height={500}/>
       <div>
            <p className="text-4xl mx-16 pb-px mt-5 text-gray-600 font-bold whitespace-normal"> I am studying T-Level Digital Design, Production and development</p>
            <p className="text-4xl mx-16 pb-px text-gray-600 font-bold whitespace-normal"> at Strode college.</p>
            <p className="text-3xl mx-16 pb-px mt-5 text-gray-600 font-normal whitespace-normal"> The course covers a wide area of digital, the first year being</p>
            <p className="text-3xl mx-16 pb-px mb-10 text-gray-600 font-normal whitespace-normal"> a general look, and learning python, and the second being web and design.</p>
            <Image className="float-right mr-40" src="strode_img.svg" alt="dash2" width={800} height={500}/>
       </div>
      </div>

      <Image className='flex mt-3' src="eduliny.svg" alt="dash2" width={900} height={500}/>
      <Image className='m-6' src="/dow.png" alt="dash2" width={45} height={50}/>
      <div className="bg-[url('/Hobbyliny.svg')] bg-no-repeat bg-right bg-contain ">
            <h1 className="text-8xl mx-16 pb-px mt-40 text-gray-700 lmao font-bold bg-local"> Hobbies </h1>
            <Image className='flex mx-16 pb-px' src="hobby_line.svg" alt="dash2" width={420} height={500}/>
            <p className="text-4xl mx-16 pb-px mt-5 text-gray-600 font-bold whitespace-normal"> I enjoy a variety of things,</p>
            <p className="text-4xl mx-16 pb-px text-gray-600 font-normal whitespace-normal"> like video making, with my youtube channel that I try to upload on often, i also enjoy</p>
            <p className="text-4xl mx-16 pb-px text-gray-600 font-normal whitespace-normal"> gaming, reading and drawing (not very good at drawing thought).</p>
            <Image className="float-right mr-60 mt-5" src="pop_up_hobby.svg" alt="dash2" width={800} height={500}/>
            <Image className='m-10 flex' src="/dow.png" alt="dash2" width={45} height={50}/>
            <Image className='m-10' src="/dow.png" alt="dash2" width={45} height={50}/>
            <Image className='ml-10' src="/dow.png" alt="dash2" width={45} height={50}/>
      </div>
      <div className="bg-[url('/contliny.svg')] bg-no-repeat bg-left bg-contain">
            <h1 className="text-8xl mx-16 pb-px mt-40 text-gray-700 lmao font-bold bg-local"> Contact Me </h1>
            <Image className='flex mx-16 pb-px' src="backtcont.svg" alt="dash2" width={520} height={500}/>
            <div>
                <span className="inline-flex items-center mt-16">
                    <Image className='snap-center snap-right float-right rounded-full ml-10 ' src="mail.svg" alt="dash2" width={40} height={40}/>
                    <span className="justify-between text-3xl font-normal ml-5"><span className='ml-3 font-semibold '>Email</span> - scarlett.insane@gmail.com</span>
                </span>
              </div>
              <div>
                <span className="inline-flex items-center mt-8 mb-80">
                    <Image className='flex snap-center snap-right float-right rounded-full ml-10 ' src="call.svg" alt="dash2" width={40} height={40}/>
                    <span className="flex justify-between items-center text-3xl font-normal ml-5"><span className='ml-3 font-semibold mr-3'>Phone number</span> - +44 01278723495</span>
                </span>

            </div>
      </div>
    </main>
  )
}