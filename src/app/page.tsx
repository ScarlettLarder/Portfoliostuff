"use client"
import Image from "next/image" 
import { useRive, useStateMachineInput } from "@rive-app/react-canvas";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import './insane.js';


// Basic rive explination 

// This is for the Rive robot to work. This is the same as other's inside the project, but they are inside other functions.
function Rive_robot() {
  // State machines are for the interactions and animations themselfs, like a flow chart, if cursor in hitbox, turn on cursor follow for an asset. 
  const STATE_MACHINE_NAME = "form_in_progress";
  // This tells the function what the name of each file is for it to find it, and if there are any other factors for it to know. In this case, just autoplay is here.
  const { RiveComponent, rive } = useRive({
    src: "robotv3.riv",
    stateMachines: "State Machine 1",
    autoplay: true
  });
  return (
    // This is what's returned when Rive_robot is called.
    <div className="sm:float-right pt-10 h-72 pb-22 sm:h-96 w-full sm:w-3/5 drop-shadow-xl popupimg">
      <RiveComponent />
    </div>
  );
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
      <div>

        <Parallax pages={3.7}>
          <nav className="text-lg sm:text-2xl flex border border-b-2 border-l-0 t-0 border-r-0 bg-white border-gray-400 gap-0 font-semibold fixed top-0 w-full">
            <a href="/" className="py-1 m-2 ml-10 sm:mt-2 my-1 mr-0.5 sm:mr-4 font-medium text-gray-600 ">Scarlett&apos;s portfolio</a>
            <a href="/project" className="text-base sm:text-2xl pt-1.5 sm:py-1 sm:m-2 my-1 ml-1 font-normal float-right text-gray-500">See all projects</a>     
          </nav>
          
          <ParallaxLayer offset={0} speed={1} factor={2}>
              <Image className="sm:ml-24 mt-28 p-4 sm:float-right mx-auto flex" src="placeholder_top.svg" alt="Hero_placeholder" width={700} height={500}/>
              <div className="ml-5">
                <h1 data-value="Welcome!" className="text-6xl xl:text-8xl 2xl:text-9xl m-2 pb-px mt-32 text-gray-700 lmao flex font-bold">Welcome!</h1>
                <p className="text-4xl xl:text-5xl 2xl:text-6xl m-2 font-semibold text-gray-600 ">You have found my portfolio</p>
              </div>
              <div>
                <Image className='m-6 flex downarrow' src="/dow.png" alt="downarrow" width={50} height={50}/>
                <Image className='m-6 downarrow' src="/dow.png" alt="downarrow" width={50} height={50}/>
                <Image className='m-6 downarrow' src="/dow.png" alt="downarrow" width={50} height={50}/>
              </div>
          </ParallaxLayer>

          <ParallaxLayer offset={0.9} speed={0.6} factor={0.4}>
              <div className="mt-32 pt-10 clearfix bg-blue-50 shadow-md  border-blue-100 border-t-4 border-b-4">
                <div className='xl:bg-[url("/backpink.svg")] bg-none sm:bg-no-repeat bg-right bg-contain overflow-visible'>
                  <div className="text-center sm:text-left bg-opacity-0 sm:bg-opacity-100">
                    <h1 className="text-6xl xl:text-8xl mx-16 pb-px text-gray-700 lmao font-bold"> Personal </h1>
                    <h1 className="text-6xl xl:text-8xl mx-16 sm:mx-28 pb-px text-gray-700 lmao font-bold"> Statement </h1>
                    <Image className='sm:mt-3 sm:ml-24 sm:float-none px-10 mx-auto ' src="line_personal.svg" alt="underline" width={450} height={0}/>
                  </div>
                  <p className="text-2xl sm:text-4xl mx-4 sm:mx-16 pb-px text-gray-700 font-bold sm:mt-4 whitespace-normal text-center sm:text-left"> Hello! I am Scarlett and welcome to my portfolio.</p>
                  <p className="text-2xl sm:text-4xl mx-4 sm:mx-16 pb-px text-gray-600 font-bold whitespace-normal text-center sm:text-left"> Currently in college, learning web and design</p>
                  <p className="text-2xl sm:text-4xl mx-4 sm:mx-16 pb-px mt-2 text-gray-600 font-normal whitespace-normal text-center sm:text-left"> In this website, you will find a collection of projects,<br/>my education and who I am.</p>
                  <Image className='sm:m-10 ml-6 flex sm:mt-24' src="/dow.png" alt="dash2" width={45} height={50}/>
                  <Image className='sm:ml-10 ml-6' src="/dow.png" alt="dash2" width={45} height={50}/>
                  <Image className='flex float-right selection:' src="doordash.svg" alt="dash2" width={1000} height={500}/>
                  <ParallaxLayer offset={0.5} speed={0.1} factor={0}>
                    <Rive_robot />
                  </ParallaxLayer>
                </div>
              </div>
          </ParallaxLayer>

          <ParallaxLayer offset={1.4} speed={0.5} factor={0.4}>
              <Image className='flex float-right ' src="eduliny2.svg" alt="dash2" width={400} height={400}/>
              <h1 className="text-6xl xl:text-8xl mx-16 pb-px mt-28 text-gray-700 lmao font-bold bg-local"> Education + Skills</h1>
              <Image className='flex sm:mx-16 ' src="backtedu.svg" alt="dash2" width={420} height={500}/>
              <p className="text-2xl sm:text-4xl mx-4 sm:mx-16 pb-px mt-2 text-gray-600 font-normal whitespace-normal text-center sm:text-left"> I am studying T-Level Digital Design, Production and development at Strode college. <br/> The course covers a wide area of digital, the first year being a general look, and learning python, and the second being web and design.</p>
              <ParallaxLayer offset={0.6} speed={0.2} factor={0}>
                <Image className='right-0 float-right lg:mr-32 mx-auto drop-shadow-xl popupimg' src="Edu_popup.svg" alt="dash2" width={700} height={500}/>
              </ParallaxLayer>
              <p className="text-3xl sm:text-4xl mx-4 sm:mx-16 pb-px mt-6 text-gray-700 font-normal whitespace-normal text-center sm:text-left"> Some of my skills include...</p>
              <p className="text-2xl sm:text-4xl mx-4 sm:mx-16 sm:pb-px sm:mt-2 text-gray-600 font-normal whitespace-normal text-center pb-3  sm:text-left"> Video editing, web development, and experience with design, <br/> Rive and Figma.</p>
              <Image className='sm:ml-24 sm:mt-10 mx-auto drop-shadow-xl popupimg' src="Pop-up 4.svg" alt="dash2" width={220} height={500}/>
          </ParallaxLayer>

          <ParallaxLayer offset={2} speed={0.4} factor={0.2}>
            <div className="pt-10 clearfix bg-green-50 border-t-4 border-b-4 border-green-200 shadow-md">
            <div className="xl:bg-[url('/Hobbyliny.svg')] bg-none xl:bg-no-repeat bg-right bg-contain ">
                  <h1 className="text-6xl xl:text-8xl text-center sm:text-left  mx-16 pb-px text-gray-700 lmao font-bold"> Hobbies </h1>
                  <Image className=' sm:ml-10 sm:pb-10 sm:float-none px-10 mx-auto ' src="hobby_line.svg" alt="dash2" width={420} height={500}/>
                  <p className="text-2xl sm:text-4xl mx-4 sm:mx-16 pb-px mt-2 text-gray-600 font-normal whitespace-normal text-center sm:text-left">I enjoy a variety of things, like video making, with my youtube channel <br/> that I try to upload on often, i also enjoy gaming, reading and drawing<br/> (not very good at drawing thought).</p>
                  <Image className="float-right mt-1 sm:mr-1 xl:mr-5 2xl:mr-20 pb-10 lg:w-2/4 popupimg drop-shadow-xl " src="pop_up_hobby.svg" alt="dash2" width={800} height={500}/>
                  <Image className='m-6 downarrow' src="/dow.png" alt="dash2" width={45} height={50}/>
                  <div className="xl:pl-1 2xl:pl-32 pt-2 mt-2 clearfix">
                  <ParallaxLayer offset={0.9} speed={0.2} factor={0}>
                    <div className="h-96 sm:h-96 lg:w-2/5 w-full ">
                      <RiveComponent />
                    </div>
                  </ParallaxLayer>
                  </div>
            </div>
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={3} speed={0.1} factor={0.2}>
            <div className="bg-[url('/contliny.svg')] bg-no-repeat bg-left bg-bottom  bg-contain">
              <h1 className="text-6xl xl:text-8xl text-center sm:text-left  mx-16 pb-px text-gray-700 lmao font-bold"> Contact Me </h1>
              <Image className='sm:ml-10 sm:pb-10 sm:float-none mx-auto' src="backtcont.svg" alt="dash2" width={520} height={500}/>
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
          </ParallaxLayer>

        </Parallax>
        <nav className="text-lg sm:text-2xl flex border border-b-2 border-l-0 t-0 border-r-0 bg-white border-gray-400 gap-0 font-semibold fixed top-0 w-full">
            <a href="/" className="py-1 m-2 ml-10 sm:mt-2 my-1 mr-0.5 sm:mr-4 font-medium text-gray-600 fadeout">Scarlett&apos;s portfolio</a>
            <a href="/project" className="text-base sm:text-2xl pt-1.5 sm:py-1 sm:m-2 my-1 ml-1 font-normal float-right text-gray-500 fadeout">See all projects</a>     
        </nav>
      </div>
    </main>
  )
}
