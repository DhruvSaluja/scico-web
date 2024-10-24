import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { global } from 'styled-jsx/css'
import Image from 'next/image'
import BlogCard from '@/components/BlogsCard'
const blogs = () => {
  return (
    <div className='flex flex-col h-fit items-center justify-center'>
      <div className='text-[#30DB48] text-3xl text-center mt-4'>
        <h1 className='underline underline-offset-8'>Blogs</h1>
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

{/* <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
        <div class="flex-shrink-0">
          <Image class=" object-cover" src="/images/coming-soon.png" width={100} height={100} alt="" />
        </div>
        <div class="flex flex-1 flex-col justify-between bg-white p-6">
          <div class="flex-1">
            <p class="text-sm font-medium text-indigo-600">
              <a href="#" class="hover:underline">Article</a>
            </p>
            <a href="#" class="mt-2 block">
              <p class="text-xl font-semibold text-gray-900">Boost your conversion rate</p>
              <p class="mt-3 text-base text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.</p>
            </a>
          </div>
          <div class="mt-6 flex items-center">
            <div class="flex-shrink-0">
              <a href="#">
                <span class="sr-only">Roel Aufderehar</span>
                <Image class="h-10 w-10 rounded-full" src="/images/coming-soon.png" width={100} height={100}  alt="" />
              </a>
            </div>
            <div class="ml-3">
              <p class="text-sm font-medium text-gray-900">
                <a href="#" class="hover:underline">Roel Aufderehar</a>
              </p>
              <div class="flex space-x-1 text-sm text-gray-500">
                <time datetime="2020-03-16">Mar 16, 2020</time>
                <span aria-hidden="true">·</span>
                <span>6 min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>*/}

{/* <div className='flex flex-col md:flex-row mt-10 md:space-y-0 md:space-x-4 items-center md:justify-evenly md:items-centerr space-y-28 '>
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      </div> */}
      <div className='  mt-14 grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-12 lg:gap-x-14 xl:gap-x-32 gap-y-14 sm:gap-y-24 mb-12  cursor-pointer'>
       <div><BlogCard /></div>
      <div><BlogCard /></div>
      <div><BlogCard /></div>
      <div><BlogCard /></div> 
      <div><BlogCard /></div>
      <div><BlogCard /></div>
      <div><BlogCard /></div>
      <div><BlogCard /></div> 
      <div><BlogCard /></div>
      <div><BlogCard /></div>
      <div><BlogCard /></div>
      <div><BlogCard /></div> 
      <div><BlogCard /></div>
      <div><BlogCard /></div>
      <div><BlogCard /></div>
      <div><BlogCard /></div> 


      </div>
   </div> 
  )
}

export default blogs
