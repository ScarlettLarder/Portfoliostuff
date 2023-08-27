"use client"
import Image from "next/image" 
import { useRive, useStateMachineInput } from "@rive-app/react-canvas";


// ---Basic rive explination---
// This is for the Rive robot to work. This is the same as others inside the project, but they are inside other functions.
function Rive_robot() {
  // State machines are for the interactions and animations themselfs, like a flow chart, if cursor in hitbox, turn on cursor follow for an asset. 
  const STATE_MACHINE_NAME = "form_in_progress";
  // This tells the function what the name of each file is for it to find it, and if there are any other factors for it to know. In this case, just autoplay is here.
  const { RiveComponent, rive } = useRive({
    src: "Rive_RobotPersonal.riv",
    stateMachines: "State Machine 1",
    autoplay: true
  });
  return (
    // This is whats returned when Rive_robot is called.
    <div className="md:float-right md:mr-20 mb-10 md:mb-0 pt-10 h-72 pb-34 md:h-96 w-full md:w-2/5 drop-shadow-xl delay-75 hover:scale-105 duration-150">
      <RiveComponent />
    </div>
  );
}


export default function Home() {
  const STATE_MACHINE_NAME = "form_in_progress";
  const { RiveComponent, rive } = useRive({
      src: "Rive_FishGame.riv",
      stateMachines: "State Machine 1",
      autoplay: true
    });
  return (
    <div>
      <div className="mt-20 mb-20 ml-5">
         <Image className="float-right flex my-5 lg:m-4 p-5" src="Placeholder_top.svg" alt="dash2" width={700} height={500}/>
         <h1 className="text-6xl xl:text-8xl 2xl:text-9xl m-2 pb-px mt-32 text-gray-700 lmao font-bold">Welcome!</h1>
         <p className="text-4xl xl:text-5xl 2xl:text-6xl m-2 font-semibold text-gray-600 ">You have found my portfolio</p>
      </div>
      <Image className='m-6' src="/Down.png" alt="dash2" width={50} height={50}/>
      <Image className='m-6' src="/Down.png" alt="dash2" width={50} height={50}/>
      <Image className='m-6' src="/Down.png" alt="dash2" width={50} height={50}/>

      <div className="mt-32 gradient clearfix shadow-md border-blue-200 border-t-4 border-b-4">
          <div className='xl:bg-[url("/Personal_DecoRM.svg")] bg-none sm:bg-no-repeat bg-right bg-contain overflow-visible'>
            <h1 className=" pt-8 text-6xl xl:text-8xl mx-16 pb-px text-gray-700 lmao font-bold text-center md:text-left bg-opacity-0 md:bg-opacity-100"> Personal </h1>
            <h1 className="text-6xl xl:text-8xl mx-16 md:mx-28 pb-px text-gray-700 lmao font-bold text-center md:text-left bg-opacity-0 md:bg-opacity-100"> Statement </h1>
            <Image className='md:mt-3 md:ml-24 md:float-none px-10 mx-auto text-center md:text-left bg-opacity-0 md:bg-opacity-100' src="Personal_DecoLine.svg" alt="dash2" width={450} height={0}/>
            <p className="text-2xl sm:text-4xl mx-4 md:mx-16 pb-px text-gray-600 font-bold mt-4 whitespace-normal text-center md:text-left"> Hello! I am Scarlett and welcome to my portfolio.</p>
            <Rive_robot />
            <p className="text-2xl sm:text-3xl sm:m-0 m-10 mt-4 md:mt-0 md:ml-16 text-gray-600 font-normal whitespace-normal text-center md:text-left"> Im currently in college, learning web and design. In this website, you will find out more about me, who I am and a selection of projects.</p>
            <Image className='sm:m-5 ml-6 static flex sm:mt-5' src="/Down.png" alt="dash2" width={45} height={50}/>
            <Image className='sm:m-5 ml-6' src="/Down.png" alt="dash2" width={45} height={50}/>
            <Image className='sm:ml-5 ml-6' src="/Down.png" alt="dash2" width={45} height={50}/>
            <Image className='flex float-right' src="Personal_DecoB.svg" alt="dash2" width={1000} height={500}/>
          </div>
      </div>

      <Image className='flex float-right pl-10' src="Edu_DecoBL.svg" alt="dash2" width={400} height={400}/>
      <h1 className="text-6xl xl:text-8xl text-center sm:text-left sm:mx-16 pb-px mt-20 text-gray-700 lmao font-bold bg-local"> Education + Skills</h1>
      <Image className='flex mx-auto sm:mx-16 ' src="Edu_DecoLine.svg" alt="dash2" width={420} height={500}/>
      <p className="text-2xl md:text-3xl mt-4 m-10 sm:m-0 md:ml-16 text-gray-600 font-normal whitespace-normal text-center md:text-left"> 
      I am currently studying T-Level, Digital design, production and development at Strode college. 
      The first year covers python and has exams that test on legislation, problem solving, programming, emerging issues in tech, 
      data how to handle it for example, and security. The second year covers more web, with multiple frameworks, designing, databases 
      and how to use APIs. Oh and also work experience, and workshops from companies like IBM and red hat. 
      You can learn more about the course <a className=" text-green-400 hover:text-green-200 focus:text-green-100" href="https://www.strode-college.ac.uk/courses/our-courses/digital-production,-design-and-d/?subject=&type=16744"> here!</a>
      </p>
      <p className="text-3xl sm:text-4xl md:ml-16 m-4 text-gray-600 font-bold whitespace-normal text-center md:text-left"> Some of my skills include:</p>
      <Image className='right-0 float-right md:mr-24 mx-auto hover:scale-105 duration-150 delay-75' src="Edu_PopupStrode.svg" alt="dash2" width={700} height={500}/>
      <p className="text-2xl sm:text-3xl md:ml-16 text-gray-600 font-normal whitespace-normal text-center md:text-left mt-6 md:mt-0"> Video editing, web development, and experience with design, <br/> Rive and Figma.</p>
      <Image className='md:right-0 md:float-right md:mr-12 md:mt-12 mt-6 mx-auto hover:scale-105 duration-150 delay-75' src="Edu_PopupSoftware.svg" alt="dash2" width={220} height={500}/>
      <Image className='mt-10 pr-10' src="Edu_DecoTL.svg" alt="dash2" width={700} height={500}/>

      <div className="mt-24 pt-10 clearfix gradient2 border-t-4 border-b-4 border-green-200 shadow-md">
        <div className="sm:bg-[url('/Hobbyliny.svg')] bg-none sm:bg-no-repeat bg-right bg-contain ">
            <h1 className="text-6xl xl:text-8xl text-center md:text-left mx-16 pb-px text-gray-700 lmao font-bold"> Hobbies </h1>
            <Image className=' md:ml-10 md:pb-10 md:float-none md:px-10 mx-auto' src="Hobby_DecoLine.svg" alt="dash2" width={420} height={500}/>
            <Image className="md:float-right mt-10 md:mr-20 pb-10 hover:scale-105 duration-150 delay-75 " src="Hobby_PopupYT.svg" alt="dash2" width={800} height={500}/>
            <p className="text-2xl sm:text-3xl mx-4 sm:mx-16 pb-px text-gray-600 font-normal whitespace-normal text-center sm:text-left">My hobbies include my YouTube channel, that I try to upload often too and improve my skills at editing with premiere and after effects. I also enjoy gaming, reading and just generally creating stuff!</p>
            <div className="xl:ml-0 2xl:ml-48 xl:mt-16 pb-10 pt-10 ">
                <div className="h-96 md:h-96 md:w-2/5 w-full hover:scale-105 duration-150 delay-75">
                    <RiveComponent />
                </div>
            </div>
        </div>
      </div>

      <div className="bg-[url('/Contact_DecoML.svg')] bg-no-repeat bg-bottom sm:bg-left bg-contain">
          <h1 className="text-6xl xl:text-8xl mx-16 pb-px mt-40 text-gray-700 lmao font-bold bg-local text-center md:text-left"> Contact </h1>
          <Image className='flex md:mx-16 pb-px mx-auto' src="Contact_DecoLine.svg" alt="dash2" width={340} height={100}/>
          <p className="mt-5 md:mt-10 text-2xl sm:text-3xl mx-4 sm:mx-16 pb-px text-gray-600 font-normal whitespace-normal text-center md:text-left"> You can find me on <a className="text-red-300 hover:text-red-200 underline" href="https://www.linkedin.com/in/alex-larder-066692258/">LinkedIn</a></p>
          <div className="">
            <span className="inline-flex items-center mt-10"> 
              <Image className='snap-center snap-right float-right rounded-full ml-1 sm:ml-16' src="Contact_Email.svg" alt="dash2" width={40} height={40}/>
              <span className="justify-between text-xl sm:text-3xl font-normal ml-3 sm:ml-5"> <span className='ml-3 font-semibold'>Email</span> - scarlett.insane@gmail.com</span>
            </span>
          </div>
          <div>
            <span className="inline-flex items-center mt-8 mb-80">
              <Image className='flex snap-center snap-right float-right rounded-full ml-1 sm:ml-16 ' src="Contact_Phone.svg" alt="dash2" width={40} height={40}/>
              <span className="justify-between text-xl sm:text-3xl font-normal ml-3 sm:ml-5"><span className='ml-3 font-semibold mr-3'>Phone</span> - +4401278723495</span>
            </span>
          </div>
      </div>
    </div>
  )
}

