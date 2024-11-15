import React from 'react'
import Image from 'next/image'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: '700', // aap apna desired weight specify kar sakte hain
  subsets: ['latin'], // language subset choose kar sakte hain
});

const Hero = () => {
  return (
    <main className={`${poppins.className} grid grid-cols-2 relative z-0 w-full overflow-hidden bg-opacity-75 bg-[url('/transperant.jpg')] bg-cover __className_092cb9`}>
        <div className=" text-black mt-[2rem] flex flex-col justify-center ml-12">
            <h1 className="m whitespace-nowrap text-center text-[2rem] font-extrabold leading-10 tracking-wider text-main sm:text-5xl sm:leading-none md:text-left lg:text-6xl text-[#254e83]">Governor Sindh</h1>
             <h1 className=" whitespace-nowrap text-center text-[1.5rem] font-normal leading-[2rem] tracking-wider  text-main sm:text-4xl sm:leading-[3rem] md:text-left lg:text-[2.5rem] text-[#254e83]">Kamran Khan Tessori</h1>
             <h1 className="mt-5 whitespace-nowrap text-center text-[1.5rem] font-semibold leading-[2rem] tracking-wider  text-sub sm:text-4xl sm:leading-[3rem] md:text-left lg:text-[2.5rem] text-[#5bb7e8]">Certified Cloud <br /> Applied Generative AI <br />Engineer (GenEng)</h1>
             <p className=" my-5 whitespace-nowrap text-center text-[1.25rem] font-extrabold text-main sm:text-2xl md:text-left">Earn up to $5,000 / month</p>
             <p className="my-5 w-full text-center text-[1.25rem] font-bold tracking-wider text-main sm:text-2xl md:w-[80%] md:text-left">Now admissions are open in Hyderabad</p>
            <div className="mb-7 mt-5 flex flex-col items-center sm:mt-10 sm:flex-row sm:gap-5 md:mb-0">
             <button className="w-full rounded-md bg-main py-3 text-center text-sm font-semibold tracking-widest text-white bg-[#254e83] transition-all hover:translate-y-1 sm:py-4 sm:text-base md:w-52 mt-4">APPLY NOW</button>
              <div className='flex flex-col justify-evenly mt-2'>
             <div className="w-40 font-extrabold text-[30px] text-[#254e83] text-center">562,143</div>
             <div className="text-center text-xs tracking-wider text-[#254e83] text-main sm:mb-0 sm:text-sm">Accepted Applications</div>
             </div>
          </div>
        </div>
         <div>
            <Image src="/cover.1d863e39.png" alt="logo" width={1600} height={1212} className=" md: ml-30 h-auto min-w-[900px] sm:flex-col lg:w-[600px] mt-4"/>
         </div>
    </main>
  )
}

export default Hero