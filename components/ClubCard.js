// components/TeamMember.js
import '/app/globals.css';
import Image from 'next/image';
export default function ClubCard({ details }) {
    return (
      <div className='hover:opacity-85  transition duration-300 hover:scale-105 hover:shadow-black hover:shadow-2xl'>
        <div className='w-[300px] h-[300px] flex-col -space-y-5 md:h-[300px] bg-[#96C3B6] hover:bg-gradient-to-r from-[#0f3131] from-0% via-[#378a74] via-50% to-[#7a34ca] to-100% duration-1000 rounded-xl drop-shadow-2xl'>
        <div className='relative -top-12  h-fit '>
          <Image src={'/images/phy.png'} className='rounded-full mx-auto' width={130} height={130} />
        </div>
        <div className='mt-0 '>
          <h1 className='text-2xl font-bold text-center top-0 '>
            Physics Club
          </h1>
          <p className='text-center mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, ar.....</p>
        </div>
        
   </div> 
   </div>
    
 
    );
  }
  