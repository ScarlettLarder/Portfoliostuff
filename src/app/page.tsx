"use client"
import Image from "next/image" 
import { useRive, useStateMachineInput } from "@rive-app/react-canvas";

const Rive_robot = () => {
  const STATE_MACHINE_NAME = "form_in_progress";
  const { RiveComponent, rive } = useRive({
      src: "robotv3.riv",
      stateMachines: "State Machine 1",
      autoplay: true
    });
    return (
      <div className="sm:float-right clearfix pt-10 h-72 pb-22 sm:h-96 w-full sm:w-3/5 drop-shadow" >
        <RiveComponent />
      </div>
    )
}
export default function Home() {
  const STATE_MACHINE_NAME = "form_in_progress";
  const { RiveComponent, rive } = useRive({
      src: "fish_gamingV3.riv",
      stateMachines: "State Machine 1",
      autoplay: true
    });
  return (
    <main>
      <div className="mt-20 mb-20 ml-5">
         <Image className="float-right flex my-5 lg:m-4 p-5" src="placeholder_top.svg" alt="dash2" width={700} height={500}/>
         <h1 className="text-6xl xl:text-8xl 2xl:text-9xl m-2 pb-px mt-32 text-gray-700 lmao font-bold">Welcome!</h1>
         <p className="text-4xl xl:text-5xl 2xl:text-6xl m-2 font-semibold text-gray-600 ">You have found my portfolio</p>
      </div>
      <div>
         <Image className='m-6 flex' src="/dow.png" alt="dash2" width={50} height={50}/>
         <Image className='m-6' src="/dow.png" alt="dash2" width={50} height={50}/>
         <Image className='m-6' src="/dow.png" alt="dash2" width={50} height={50}/>
      </div>
      <div className="mt-32 pt-10 clearfix bg-blue-50 shadow-md  border-blue-100 border-t-4 border-b-4">
        <div className='xl:bg-[url("/backpink.svg")] bg-none sm:bg-no-repeat bg-right bg-contain overflow-visible'>
          <div className="text-center sm:text-left bg-opacity-0 sm:bg-opacity-100 ">
            <h1 className="text-6xl xl:text-8xl mx-16 pb-px text-gray-700 lmao font-bold"> Personal </h1>
            <h1 className="text-6xl xl:text-8xl mx-16 sm:mx-28 pb-px text-gray-700 lmao font-bold"> Statement </h1>
            <Image className='sm:mt-3 sm:ml-24 sm:float-none px-10 mx-auto' src="line_personal.svg" alt="dash2" width={450} height={0}/>
          </div>
          <br/>
          <br/>
          <p className="text-2xl sm:text-4xl mx-4 sm:mx-16 pb-px text-gray-700 font-bold mt-4 whitespace-normal text-center sm:text-left"> Hello! I am Scarlett and welcome to my portfolio.</p>
          <p className="text-2xl sm:text-4xl mx-4 sm:mx-16 pb-px text-gray-600 font-bold whitespace-normal text-center sm:text-left"> Currently in college, learning web and design</p>
          <p className="text-2xl sm:text-4xl mx-4 sm:mx-16 pb-px mt-2 text-gray-600 font-normal whitespace-normal text-center sm:text-left"> In this website, you will find a collection of projects, my education and who I am.</p>
          <p className="text-4xl mx-16 pb-px text-gray-600 font-normal whitespace-normal static isolate float-right"> </p>
          <Rive_robot />
          <Image className='sm:m-10 ml-6 static flex sm:mt-24' src="/dow.png" alt="dash2" width={45} height={50}/>
          <Image className='sm:m-10 ml-6' src="/dow.png" alt="dash2" width={45} height={50}/>
          <Image className='sm:ml-10 ml-6' src="/dow.png" alt="dash2" width={45} height={50}/>
          <Image className='flex float-right' src="doordash.svg" alt="dash2" width={1000} height={500}/>
        </div>

      </div>
      <Image className='flex float-right ' src="eduliny2.svg" alt="dash2" width={400} height={400}/>
      <div>
            <h1 className="text-6xl xl:text-8xl mx-16 pb-px mt-28 text-gray-700 lmao font-bold bg-local"> Education + Skills</h1>
            <Image className='flex sm:mx-16 ' src="backtedu.svg" alt="dash2" width={420} height={500}/>
      </div>
      <div>
            <p className="text-2xl sm:text-4xl mx-4 sm:mx-16 pb-px mt-2 text-gray-600 font-normal whitespace-normal text-center sm:text-left"> I am studying T-Level Digital Design, Production and development at Strode college.</p>
            <p className="text-2xl sm:text-4xl mx-4 sm:mx-16 pb-px mt-2 text-gray-600 font-normal whitespace-normal text-center sm:text-left"> The course covers a wide area of digital, the first year being</p>
            <p className="text-2xl sm:text-4xl mx-4 sm:mx-16 sm:pb-px sm:mt-2 text-gray-600 font-normal whitespace-normal text-center pb-3 sm:pb-0 sm:text-left"> a general look, and learning python, and the second being web and design.</p>
            <Image className='right-0 float-right sm:mr-32 mx-auto' src="Edu_popup.svg" alt="dash2" width={700} height={500}/>
            <p className="text-3xl sm:text-4xl mx-4 sm:mx-16 pb-px mt-2 text-gray-700 font-normal whitespace-normal text-center sm:text-left"> Some of my skills include...</p>
            <p className="text-2xl sm:text-4xl mx-4 sm:mx-16 sm:pb-px sm:mt-2 text-gray-600 font-normal whitespace-normal text-center pb-3 sm:pb-0 sm:text-left"> Video editing, web development, and experience with design, <br/> Rive and Figma.</p>
            <Image className='sm:ml-24 mt-10 sm:float-left mx-auto' src="Pop-up 4.svg" alt="dash2" width={220} height={500}/>
            <Image className='right-0 ' src="eduliny.svg" alt="dash2" width={900} height={500}/>
            <Image className='ml-6 float-left' src="/dow.png" alt="dash2" width={45} height={50}/>
            
      </div>
      <div className="mt-24 pt-10 clearfix bg-green-50 border-t-4 border-b-4 border-green-200 shadow-md">
        <div className="sm:bg-[url('/Hobbyliny.svg')] bg-none sm:bg-no-repeat bg-bottom bg-right bg-contain ">
              <h1 className="text-6xl xl:text-8xl text-center sm:text-left  mx-16 pb-px text-gray-700 lmao font-bold"> Hobbies </h1>
              <Image className=' sm:ml-10 sm:pb-10 sm:float-none px-10 mx-auto' src="hobby_line.svg" alt="dash2" width={420} height={500}/>
              <p className="text-2xl sm:text-4xl mx-4 sm:mx-16 pb-px mt-2 text-gray-600 font-normal whitespace-normal text-center sm:text-left">I enjoy a variety of things, like video making, with my youtube channel that I try to upload on often, i also enjoy gaming, reading and drawing (not very good at drawing thought).</p>
              <Image className="float-right mt-3 sm:mr-20 pb-10" src="pop_up_hobby.svg" alt="dash2" width={800} height={500}/>
              <Image className='m-6' src="/dow.png" alt="dash2" width={45} height={50}/>
              <div className="sm:pl-96 pt-2 mt-2 pb-10">
                <div className="h-96 sm:h-96 sm:w-2/5 w-full">
                  <RiveComponent />
                </div>
              </div>
        </div>
      </div>
      <div className="bg-[url('/contliny.svg')] bg-no-repeat bg-bottom  bg-contain">
            <h1 className="text-6xl xl:text-8xl mx-16 pb-px mt-40 text-gray-700 lmao font-bold bg-local"> Contact Me </h1>
            <Image className='flex sm:mx-16 pb-px' src="backtcont.svg" alt="dash2" width={520} height={500}/>
            <div>
                <span className="inline-flex items-center mt-16">
                    <Image className='snap-center snap-right float-right rounded-full ml-1 sm:ml-16' src="mail.svg" alt="dash2" width={40} height={40}/>
                    <span className="justify-between text-xl sm:text-3xl font-normal ml-3 sm:ml-5"><span className='ml-3 font-semibold'>Email</span> - scarlett.insane@gmail.com</span>
                </span>
              </div>
              <div>
                <span className="inline-flex items-center mt-8 mb-80">
                    <Image className='flex snap-center snap-right float-right rounded-full ml-1 sm:ml-16 ' src="call.svg" alt="dash2" width={40} height={40}/>
                    <span className="justify-between text-xl sm:text-3xl font-normal ml-3 sm:ml-5"><span className='ml-3 font-semibold mr-3'>Phone</span> - +4401278723495</span>
                </span>

            </div>
      </div>
    </main>
  )
}