"use client"
import Image from "next/image" 
import { useRive, useStateMachineInput } from "@rive-app/react-canvas";


const CurrentProjects = [
    {
        project: 'Project #1',
        name: 'Wessex Footware',
        work: 'Lead, developer and primary designer',
        href: 'https://web-project-tau.vercel.app/',
        desc: 'I worked in a team of 4 on a website for wessex footware, that at the time had no online presence. I did: The design using figma, setting up team with trello to set tasks for everyone, dev work on all pages making the navs, rectangle modules for main, all of contact other then the map and about us and the product grid.',
        color:'border-purple-300',
        imageSrc: '/Projects_Wessex.PNG',
        imageAlt: 'Wessex footware',
        datacolor: 'wessex'
    },
    {
        project: 'Project #2',
        name: 'This Website!',
        work: 'All dev and design',
        href: '/',
        desc: 'I worked by myself to develop and design the website with Next.js, Tailwind CSS, Figma and some Rive for the animations like the one on top of this page! This was my first time using all these other then Figma.',
        color:'border-purple-300',
        imageSrc: '/Projects_Portfolio.PNG',
        imageAlt: 'Website image',
        datacolor: 'scarlett'
    },
    {
        project: 'Project #3',
        name: 'Strode Stripes',
        work: 'Logo, social media, stream layout',
        href: 'https://www.youtube.com/@strodestripes',
        desc: 'Strode Stripes is the esports team for strode college, and I made the logo, managed the social media (youtube, twitter, twitch) and made the stream layout. I also did some casting on the stream, while in the competition.',
        color:'border-purple-300',
        imageSrc: '/Projects_Strode.png',
        imageAlt: 'Strode_esports',
        datacolor: 'strode'
    },
    {
        project: 'Project #4',
        name: 'My Youtube Channel',
        work: 'Editing, recording, thumbnails ect',
        href: 'https://www.youtube.com/channel/UCoaGlVJ72VTG-3Frlz28qgw',
        desc: 'This is my youtube channel! I try to upload often, although I havent been able to lately due to college and work. I use premiere pro and after effects for editing, photoshop for thumbnails and other assets.',
        color:'border-purple-300',
        imageSrc: '/Projects_YT.PNG',
        imageAlt: 'My_Yt_Channel',
        datacolor: 'yt'
    },
    {
        project: 'Project #5',
        name: 'Rive Projects',
        work: 'Art and animation',
        href: 'https://rive.app/@Starlett/',
        desc: 'I am currently learning rive, that makes interactive animations for web and software with their runtime to get better at digital art. While I am still learning, you can check out my latest animations on my profile.',
        color:'border-purple-300',
        imageSrc: '/Projects_Rive.PNG',
        imageAlt: 'My_Rive_Profile',
        datacolor: 'rive'
    },
]


export default function About() {
    const STATE_MACHINE_NAME = "form_in_progress";
    const { RiveComponent, rive } = useRive({
      src: "Rive_RobotProjects.riv",
      stateMachines: "State Machine 1",
      autoplay: true
    });
    return (
        <div> 
            <div className="lg:float-right clearfix h-72 mt-20 sm:h-96 w-full lg:w-3/5" >
                <RiveComponent />
            </div>
            <div className="pb-px sm:ml-20 p-5 text-gray-700 font-bold ">
                <h1 className="sm:pt-32 text-5xl sm:text-8xl lmao font-bold"> Projects page / </h1>
                <h1 className="text-4xl sm:text-5xl mt-2 sm:mt-0 font-bold"> My past projects on web and more.</h1>
                <p className="text-3xl pb-10 mt-2 sm:mt-5 text-gray-500 font-bold">Click on a project to get sent to it.</p>
            </div>
                {CurrentProjects.map((Products) => (
                    <a key={Products.project} href={Products.href}>
                        <div data-color={Products.datacolor} className="mt-10 bg-gray-50 hover:bg-grey-100 mb-10 lg:m-20 border-8 bg-grey-100 border-purple-300 overflow-visible clearfix projectimg">
                            <div className="right-7 aspect-w-1 aspect-h-1 overflow-hidden float-right">
                                  <img className="m-4 float-right hover:scale-105 duration-150 delay-75 mx-auto"
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
        </div>
    )
}