"use client"
import Image from "next/image" 
import { useRive, useStateMachineInput } from "@rive-app/react-canvas";


const CurrentProjects = [
    {
        project: 'Project #5',
        name: 'Wessex Footware',
        work: 'Lead, developer and primary designer',
        href: 'https://web-project-tau.vercel.app/',
        desc: 'I worked in a team of 4 on a website for wessex footware, that at the time had no online presence. I did: The design using figma, setting up team with trello to set tasks for everyone, dev work on all pages making the navs, rectangle modules for main, all of contact other then the map and about us and the product grid.',
        color:'border-purple-300',
        imageSrc: '/proj_one.PNG',
        imageAlt: 'Wessex footware',
    },
    {
        project: 'Project #4',
        name: 'This Website!',
        work: 'All dev and design',
        href: '/',
        desc: 'I worked by myself to develop and design the website with Next.js, Tailwind CSS, Figma and some Rive for the animations like the one on top of this page! This was my first time using all these other then Figma.',
        color:'border-purple-300',
        imageSrc: '/proj_three.PNG',
        imageAlt: 'Website image',
    },
    {
        project: 'Project #3',
        name: 'Strode Stripes',
        work: 'Logo, social media, stream layout',
        href: 'https://www.youtube.com/@strodestripes',
        desc: 'Strode Stripes is the esports team for strode college, and I made the logo, managed the social media (youtube, twitter, twitch) and made the stream layout. I also did some casting on the stream, while in the compitition.',
        color:'border-purple-300',
        imageSrc: '/strode_esports.PNG',
        imageAlt: 'Strode_esports',
    },
    {
        project: 'Project #2',
        name: 'My Youtube Channel',
        work: 'Editing, recording, thumbnails ect',
        href: 'https://www.youtube.com/channel/UCoaGlVJ72VTG-3Frlz28qgw',
        desc: 'This is my youtube channel! I try to upload often, although I havent been able to lately due to college and work. I use premiere pro and after effects for editing, photoshop for thumbnails and other assets.',
        color:'border-purple-300',
        imageSrc: '/YT_Scarlett.PNG',
        imageAlt: 'My_Yt_Channel',
    },
    {
        project: 'Project #1',
        name: 'Rive Projects',
        work: 'Art and animation',
        href: 'https://rive.app/@Starlett/',
        desc: 'I am currently learning rive, that makes interactive animations for web and software with their runtime to get better at digital art. While I am still learning, you can check out my latest animations on my profile.',
        color:'border-purple-300',
        imageSrc: '/rive_Scarlett.PNG',
        imageAlt: 'My_Rive_Profile',
    },
]


export default function About() {
    const STATE_MACHINE_NAME = "form_in_progress";
    const { RiveComponent, rive } = useRive({
      src: "robotV2.riv",
      stateMachines: "State Machine 1",
      autoplay: true
    });
    return (
        <div> 
            <nav className="text-lg sm:text-2xl flex border border-b-2 border-l-0 t-0 border-r-0 bg-white border-gray-400 gap-0 font-semibold fixed top-0 w-full">
                <a href="/" className="py-1 m-2 ml-10 sm:mt-2 my-1 mr-0.5 sm:mr-4 font-medium text-gray-600  fadeout">Scarlett&apos;s portfolio</a>
                <a href="/project" className="text-base sm:text-2xl pt-1.5 sm:py-1 sm:m-2 my-1 ml-1 font-normal float-right text-gray-500 fadeout">See all projects</a>     
            </nav>
            <div className="lg:float-right clearfix h-72 mt-20 sm:h-96 w-full lg:w-3/5" >
                <RiveComponent />
            </div>
            <div className="pb-px sm:ml-20 p-5 text-gray-700 font-bold ">
                <h1 className="sm:pt-32 text-5xl sm:text-8xl lmao font-bold projtext"> Projects page / </h1>
                <h1 className="text-4xl sm:text-5xl mt-2 sm:mt-0 font-bold"> My past projects on web and more.</h1>
                <p className="text-3xl pb-10 mt-2 sm:mt-5 text-gray-500 font-bold">Click on a project to get sent to it.</p>

            </div>
                {CurrentProjects.map((Products) => (
                    <a key={Products.project} href={Products.href}>
                        <div className="mt-10 mb-10 lg:m-20 backproj  border-8 border-purple-300 overflow-visible clearfix">
                            <div id="projectimg" className="right-7 aspect-w-1 aspect-h-1 overflow-hidden float-right">
                                  <img className="m-4 float-right"
                                    src={Products.imageSrc}
                                    alt={Products.imageAlt}
                                    width={600} 
                                    height={400}/>
                            </div>   
                            <div className="pl-5 px-3 ml-2 sm:ml-6 mb-">
                                <h2 className="text-3xl mt-10 font-normal">{Products.project}</h2>
                                <h1 className="lmao text-7xl font-bold text-gray-700 ">{Products.name}</h1>
                                <p className="text-3xl mt-5 font-bold "><span>What I did: </span>{Products.work}</p>
                                <p className="text-xl sm:text-3xl mt-3 mb-10 font-normal">{Products.desc}</p>
                            </div>
                        </div>
                    </a>
                ))}
                <nav className="text-base sm:text-2xl flex items-center justify-between bottom-0 border border-t-2 border-l-0 t-0 border-gray-200 bg-purple-200">
                    <span className='flex'>
                      <button className="bg-yellow-100 hover:bg-yellow-50 mt-2 mb-2 font-semibold py-1.5 px-1 sm:px-4 border-gray-400 rounded shadow ml-2 sm:ml-10 text-gray-600 duration-75">
                          <a href="/project">All my project&apos;s</a>
                      </button>
                      <a href="#" className="mt-3 mb-2 text-xl py-1.5 px-1 sm:px-4 rounded ml-2 sm:ml-4 text-gray-500 duration-75 hover:bg-purple-300 hover:shadow">Back to the top!</a>
                    </span>
                    
                    <div className='flex items-center justify-between pb-3 sm:pr-20'>
                      <a className="ml-2 sm:ml-5 mt-4 p-2 delay-100 hover:bg-purple-300 rounded-full duration-75" href="https://www.linkedin.com/in/alex-larder-066692258/">
                          <Image alt="Linked_in_logo" src="/Linked_in.png" width={25} height={30}/>
                      </a>
                      <a className='ml-2 sm:ml-5 mt-4 p-2 delay-100 hover:bg-purple-300 rounded-full duration-75' href="https://github.com/ScarlettLarder">
                          <Image alt="Github_Logo" src="/Git_hub.png" width={25} height={30}/>
                      </a>
                      <a className='ml-2 sm:ml-5 mt-4 p-2 delay-100 hover:bg-purple-300 rounded-full duration-75' href="https://rive.app/@Starlett/">
                          <Image alt="Rive_Logo" src="/rive.svg" width={25} height={30}/>
                      </a>
                    </div>
                </nav>
        </div>
    )
}