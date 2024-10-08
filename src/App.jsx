import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Home from './components/Home'
import Blank from './components/Blank'
import Landing from './components/Landing'
import Lenis from 'lenis'
import Model from './components/Model'
import ScrollableContent from './components/ScrollableContent'

const App = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])

  const lenis = new Lenis()
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  
  requestAnimationFrame(raf)

  return (
    <div ref={containerRef} className='bg-black relative'>
      <motion.div 
        className='fixed top-0 left-0 right-0 h-1 bg-red-700 origin-left z-50'
        style={{ scaleX }}
      />
      <Landing/>
      <ScrollableContent/>
      <Blank/>
    </div>
  )
}

export default App