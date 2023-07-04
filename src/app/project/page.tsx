import Image from "next/image" 

export default function About() {
    return (
        <div> 
            <h1 className="text-8xl m-2 pb-px ml-10 mt-32 text-gray-700 lmao font-bold flex"> Projects page / </h1>
            <h1 className="text-5xl m-2 pb-px ml-10 text-gray-700 font-bold flex"> My past projects on web and more </h1>
            <div className='m-20 bg-gray-100 border-8 border-purple-300 overflow-visible'>
                <Image className='float-right m-4' src="/proj_one.PNG" alt="dash2" width={600} height={400}/>
                <h1 className="text-3xl ml-6 mt-10 font-normal">Project #3</h1>
                <h1 className="lmao text-7xl font-bold text-gray-700 ml-6">Wessex Footware</h1>
                <p className=" text-3xl mt-5 ml-6 font-medium"> What I did: A developer and the primary designer
                <p className="mt-3 mb-28 font-normal"> I worked in a team of 4 on a website for wessex footware, that at the time had no online presence. I did the designing for the project on figma, and then did alot of dev work with the team making the website. I did the rectangle modules, some navbar, about us and the contact us pages.
                </p></p>
            </div>
            <div className='m-20 bg-gray-100 border-8 border-pink-200 overflow-visible'>
                <Image className='float-right m-4' src="/proj_one.PNG" alt="dash2" width={600} height={400}/>
                <h1 className="text-3xl ml-6 mt-10 font-normal">Project #2</h1>
                <h1 className="lmao text-7xl font-bold text-gray-700 ml-6">Placeholder</h1>
                <p className=" text-3xl mt-5 ml-6 font-medium"> What I did: A developer and the primary designer
                <p className="mt-3 mb-28 font-normal"> I worked in a team of 4 on a website for wessex footware, that at the time had no online presence. I did the designing for the project on figma, and then did alot of dev work with the team making the website. I did the rectangle modules, some navbar, about us and the contact us pages.
                </p></p>
            </div>
            <div className='m-20 bg-gray-100 border-8 border-green-300 overflow-visible'>
                <Image className='float-right m-4' src="/proj_three.PNG" alt="dash2" width={700} height={400}/>
                <h1 className="text-3xl ml-6 mt-10 font-normal">Project #1</h1>
                <h1 className="lmao text-7xl font-bold text-gray-700 ml-6">This website!</h1>
                <p className=" text-3xl mt-5 ml-6 font-medium"> What I did: All dev and design
                <p className="mt-3 mb-36 font-normal"> I worked by myself to develop and design the website with Next.js, Tailwind CSS, Figma and some Rive for the animations. This was my first time using all these other then Figma.
                </p></p>
            </div>
        </div>
    )
}