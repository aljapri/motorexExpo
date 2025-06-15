import React, { useRef } from 'react'
import UpAnimation from '../components/UpAnimation'
import UpPages from '../components/UpPages'
import AnimatedSection from '../components/AnimatedSection'
import { useInView } from 'framer-motion';
import StatsSection from '../components/Status';
import VisitorProfile from '../components/VisitorProfile';

export default function Visitor() {
    const ref = useRef(null);
    const inView = useInView(ref, { triggerOnce: true, threshold: 0 });
  
  return (
    <div className="">
    <UpPages title="WHY VISIT" />
    
    <section className="bg-white relative" ref={ref}>
      <UpAnimation inView={inView} />
      <AnimatedSection />
      <div className='mt-20'></div>
      <StatsSection/>
      <VisitorProfile/>
    </section>
  </div>
  )
}
