
import Image from "next/image" 

const CurrentProjects = [
    {
        project: 'Project #1',
        name: 'Wessex Footware',
        work: 'Lead, developer and primary designer',
        href: 'https://web-project-tau.vercel.app/',
        desc: 'I worked in a team of 4 on a website for wessex footware, that at the time had no online presence. I did the designing for the project on figma, and then did alot of dev work with the team making the website. I did the rectangle modules, some navbar, about us and the contact us pages.',
        color:'border-purple-300',
        imageSrc: '/proj_one.PNG',
        imageAlt: 'Project 1 image',
    },
    {
        project: 'Project #2',
        name: 'This Website!',
        work: 'All dev and design',
        href: '/',
        desc: 'I worked by myself to develop and design the website with Next.js, Tailwind CSS, Figma and some Rive for the animations. This was my first time using all these other then Figma.',
        color:'border-purple-300',
        imageSrc: '/proj_three.PNG',
        imageAlt: 'Project 1 image',
    },    
    {
        project: 'Project #3',
        name: 'Wessex Footware',
        work: 'A developer and primary designer',
        href: 'https://web-project-tau.vercel.app/',
        desc: 'I worked in a team of 4 on a website for wessex footware, that at the time had no online presence. I did the designing for the project on figma, and then did alot of dev work with the team making the website. I did the rectangle modules, some navbar, about us and the contact us pages.',
        color:'border-purple-300',
        imageSrc: '/proj_one.PNG',
        imageAlt: 'Project 1 image',
    },
]

export default function About() {
    return (
        <div> 
            <div className="m-2 pb-px ml-10 text-gray-700 font-bold">
                <h1 className="text-5xl sm:text-8xl mt-28 lmao font-bold"> Projects page / </h1>
                <h1 className="text-4xl sm:text-5xl mt-2 sm:mt-0 font-bold"> My past projects on web and more.</h1>
                <p className="text-3xl mt-2 sm:mt-5 text-gray-500 font-bold">Click on a project to get sent to it.</p>
            </div>
                {CurrentProjects.map((Products) => (
                    <div className="mt-10 mb-10 sm:m-20 bg-gray-100 border-8 border-purple-300 overflow-visible clearfix">
                    <a key={Products.project} href={Products.href}>
                        <div className="right-7 aspect-w-1 aspect-h-1 overflow-hidden float-right">
                            <Image className="m-4 float-right"
                                src={Products.imageSrc}
                                alt={Products.imageAlt}
                                width={600} 
                                height={400}/>
                        </div>   
                        <div className="pl-5 px-3 ml-2 sm:ml-6 mb-5">
                            <h2 className="text-3xl mt-10 font-normal">{Products.project}</h2>
                            <h1 className="lmao text-7xl font-bold text-gray-700 ">{Products.name}</h1>
                            <p className="text-3xl mt-5 font-medium"><span>What I did: </span>{Products.work}</p>
                            <p className="text-3xl mt-3 font-normal">{Products.desc}</p>
                        </div>
                    </a>
                    </div>
                    ))}
        </div>
    )
}