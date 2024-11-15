import React from 'react'
import Image from 'next/image'
import { Roboto } from 'next/font/google'

const roboto=Roboto({
  weight:'700',
  subsets:['latin'],
});

const Card = () => {
  return (
    <div className={`${roboto.className} xl:w-[1250px] lg:w-[90%] w-[95%] m-auto sm:mt-20 mt-10 border-b border-zinc-300 pb-10`}>
        <h1 className="text-center text-[#254e83] xl:text-[30px] sm:text-[32px] text-xl sm:leading-[2.5rem] leading-[1.75rem] text-main font-extrabold m-auto md:w-[95%]">Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur Developing Billion-Dollar Valued Developers and Solopreneurs</h1>
        <p className="sm:mt-10 mt-7 mb-8 xl:text-[1.25rem] sm:text-[1.2rem] text-[1rem] text-zinc-800 sm:tracking-wider tracking-normal text-justify">The pace of technological change is accelerating, big players like Microsoft, Amazon, Google, and OpenAI are winning by providing infrastructure, large AI foundation models, frameworks, 3D Metaverse experiences, and massive distribution networks. Solopreneurs trained in this program will win by automating work typically outsourced to employees, by directly connecting to customers by eliminating the middleman, and by developing vertical metaverses, thus paving the way for the first billion-dollar valued solopreneur businesses. This program has the objective to train this new breed of billion-dollar solopreneurs. These solopreneurs will adopt the ultra-lean business model and work independently and will not need to hire employees or other team members.</p>
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-5 mt-10 m-3 sm:m-0">
            <Image src="/developer.jpg" alt='developer' width={1088} height={896} className="shadow-2xl shadow-black rounded-lg h-[300px] object-cover w-full" />
            <Image src="/solopreneur.jpg" alt='solopreneur' width={1088} height={896} className="shadow-2xl shadow-black rounded-lg h-[300px] object-cover w-full" />
            <Image src="/marqee.jpg" alt='solopreneur' width={1088} height={896} className="shadow-2xl shadow-black rounded-lg h-[300px] object-cover w-full" />
        </div>
        
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-3 rounded-lg overflow-hidden mt-10">
            <Image src='/first_meeting.jpg' alt='meeting' width={1280} height={809} className="w-full h-[300px] rounded-lg md:h-[600px] object-cover"/>
            <Image src='/miss_hina.jpg' alt='meeting' width={1280} height={809} className="w-full h-[300px] rounded-lg md:h-[600px] object-cover"/>
        </div>
     </div>
    
  )
}

export default Card