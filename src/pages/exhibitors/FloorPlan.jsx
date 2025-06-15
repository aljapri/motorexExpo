import { useInView } from 'framer-motion';
import React, { useRef } from 'react'
import UpPages from '../../components/UpPages';
import UpAnimation from '../../components/UpAnimation';

export default function FloorPlan() {
  const ref = useRef(null);
  const inView = useInView(ref, { triggerOnce: true, threshold: 0 });

  
  return (
        <div className=" mb-20">
        <UpPages title="About the Event" />
        
        <section className="bg-white relative" ref={ref}>
    
          <UpAnimation inView={inView} />
          <div className='w-full flex flex-row justify-center items-center px-10 '>
            <img src='/floor.jpeg' width={800} height={400} alt='floor' className='mt-20' />
          </div>
          
        </section>
      </div>
  )
}
