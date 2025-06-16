import React, { useRef } from 'react'
import UpPages from '../../components/UpPages'
import UpAnimation from '../../components/UpAnimation'
import AnimatedSection from '../../components/AnimatedSection'
import { useInView } from 'framer-motion';
import AboutEventCard from '../../components/AboutEventCard';

export default function AboutEvent() {
  const ref = useRef(null);
  const inView = useInView(ref, { triggerOnce: true, threshold: 0 });

  
  return (
        <div className=" mb-20">
        <UpPages title="About the Event" />
        
        <section className="bg-white relative" ref={ref}>
    
          <UpAnimation inView={inView} />
          
          <AnimatedSection />
          <AnimatedSection reverse />
          <AnimatedSection />
          <AnimatedSection reverse />
        </section>
      </div>
  )
}
