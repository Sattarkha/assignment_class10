import React from 'react'
import Image from 'next/image'
import {Roboto} from '@next/font/google'

const roboto = Roboto({
  weight: '700', 
  subsets: ['latin'], 
});

const Navbar = () => {
  return (
    <>
       <nav className='sticky top-0 z-30 w-full bg-main backdrop-blur-3xl print:hidden flex bg-[#254e83] justify-between items-center h-16'>
        <div>
            
            <Image src="/logo.9ff76f62.png" alt='logo' width={90} height={113} className="mt-14 w-[70px] sm:mt-20 sm:w-[80px] md:w-[90px] ml-[50px]"/>
        </div>
         <div className={`${roboto.className}m-auto flex h-16 w-[95%] items-center justify-center md:h-20 lg:w-[90%] xl:w-[1300px]`}>
            <h1 className=" text_shadow text-[20px] font-extrabold text-[#b9d8f3]">Tuition Free Education Program on Latest Technologies</h1>
        </div >
        
        <ul className={`${roboto.className}text_shadow text-[1.125rem] font-bold items-center gap-5 text-[#FAF9F6] sm:flex lg:gap-10`}>
            <li>Home</li>
            <li>Apply</li>
            <li>Jobs</li>
            <li>Result</li>
            <li>Courses</li>
        </ul>
      
       </nav>
    </>
  )
}

export default Navbar