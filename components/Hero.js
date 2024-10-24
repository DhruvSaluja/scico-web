import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="flex items-center h-[85vh] w-full mt-2 ">
      <div className='self-center lg:block hidden -translate-x-[180px] h-fit '>
        <Image
          src="/images/hero1.png"
          width={1000}
          height={1000}
          className='animate-[spin_6s_linear_infinite] unselectable my-auto opacity-60'
        />
      </div>
      <div id='hero_text' className='h-[40%] self-center mx-auto select-none '>
        
        <h1 className="text-center mb-5 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text text-3xl font-bold leading-tight transition duration-300 ease-in-out hover:scale-110 text-white  hover:text-transparent sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                Science Council IISERB
        </h1>
        <p className="mb-12 text-center !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl text-[#6e94b6]">
                The Science Council at IISER Bhopal, a part of the Student Activity Council, promotes Science Avenue growth outside classrooms, encouraging youth to think critically
        </p>
      </div>
      
    </div>
    
  )
}

export default Hero
