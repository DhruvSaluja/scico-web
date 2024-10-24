// components/TeamMember.js
import '/app/globals.css';
import Image from 'next/image';
export default function BlogCard({ details }) {
    return (
      <div className='hover:opacity-85 transition duration-300 hover:scale-105 hover:shadow-black hover:shadow-2xl'>
        <div className='w-[300px] h-[350px] md:h-[370px] bg-white overflow-hidden rounded-xl drop-shadow-2xl'>
        <div>
          <Image src={'/images/random1.webp'} className="w-full" width={400} height={100} />
        </div>
        <div>
          <h1 className='text-2xl font-bold md:mt-3 mt-0'>
          How to use search engine optimization to drive sales
          </h1>
          <p className='hidden md:block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, ar.....</p>
        </div>
        <hr className='max-md:mt-5'/>
        <div className='max-md:absolute max-md:w-full max-md:mb-5 max-md:bottom-0 h-fit'>
        <div class="mt-1 flex items-center">
            <div class="flex-shrink-0">
              <a href="#">
                <span class="sr-only">Roel Aufderehar</span>
                <Image class=" w-10 rounded-full" src="/images/coming-soon.png" width={100} height={100}  alt="" />
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
      </div>
   </div> 
    
 
    );
  }
  