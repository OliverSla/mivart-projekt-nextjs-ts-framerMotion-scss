"use client"
import React, { useRef } from 'react'
import './HeroSection.scss'
import { motion, useScroll, useTransform } from 'framer-motion'

const HeroSection = () => {
  const text = "SINE METU";
  const sectionRef = useRef(null);
  

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  
  const titleOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
  
  
  const logoOpacity = useTransform(scrollYProgress, [1, 0], [2, 0]);
  const logoY = useTransform(scrollYProgress, [1, 0], [200, -400]);
  
 
  const letterVariants = {
    hidden: { 
      opacity: 0,
      scale: 3,
      rotate: -15,
      filter: "blur(20px)"
    },
    visible: (i: number) => ({ 
      opacity: 1,
      scale: 1,
      rotate: 0,
      filter: "blur(0px)",
      transition: { 
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }),
  };

  return (
    <section id="hero" className='hero_section' ref={sectionRef}>
      <div className='hero_first_screen'>
        <motion.div 
          className="text-container"
          style={{ 
            opacity: titleOpacity,
            y: titleY
          }}
        >
          {text.split('').map((char, index) => (
            <motion.span
              key={index}
              className="animated-letter"
              custom={index}
              initial="hidden"
              animate="visible"
              variants={letterVariants}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
      </div>
      
      <div className='hero_second_screen'>
        <motion.div 
          className="logo-container"
          style={{ 
            opacity: logoOpacity,
            y: logoY
          }}
        >
          <img className='logo' src="/images/logo.svg" alt="Logo" />
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection