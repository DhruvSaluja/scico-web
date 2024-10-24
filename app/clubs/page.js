import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { global } from 'styled-jsx/css'
import Image from 'next/image'
import ClubCard from '@/components/ClubCard'
const clubs = () => {
  return (
    <div className='flex flex-col h-fit items-center justify-center'>
      <div className='text-[#30DB48] text-3xl text-center mt-4'>
        <h1 className='underline underline-offset-8'>Our Clubs</h1>
    </div>
   {/* <div className=' text-white inline-block h-fit'>
    <div>
      <Image
      src={'/images/coming-soon.png'}
      width={300}
      height={300}
      // className='animate-[ping_1s_cubic-bezier(0,0,0.2,1)_infinite'
      className='animate-[bounce_1s_2]'
      />
    </div>
   </div> */}

      <div className='  mt-28 grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-12 lg:gap-x-14 xl:gap-x-32 gap-y-14 sm:gap-y-24 mb-12  cursor-pointer'>
       <div><ClubCard /></div>
      <div><ClubCard /></div>
      <div><ClubCard /></div>
      <div><ClubCard /></div> 
      <div><ClubCard /></div>
      <div><ClubCard /></div>
      <div><ClubCard /></div>
      <div><ClubCard /></div> 
      <div><ClubCard /></div>
      <div><ClubCard /></div>
      <div><ClubCard /></div>
      <div><ClubCard /></div> 
      <div><ClubCard /></div>
      <div><ClubCard /></div>
      <div><ClubCard /></div>
      <div><ClubCard /></div> 


      </div>
   </div> 
  )
}

export default clubs
