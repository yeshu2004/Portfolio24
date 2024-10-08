import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react'
import { CiWifiOn } from "react-icons/ci";
import Scene from './Scene';

const Landing = () => {
    const containerRef = useRef(null);
    const textRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    })

    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
    const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.7])

    return (
        <motion.div 
            ref={containerRef}
            className='w-full h-screen bg-black text-white flex items-center justify-center'
        >
            <motion.h1 
                ref={textRef} 
                style={{ opacity, scale }} 
                className='lg:text-6xl text-xl font-[PPfont] fixed flex text-center items-center lg:gap-5 gap-1'
            >
                Welcome to my portfolio
                <span><CiWifiOn /></span>
            </motion.h1>
        </motion.div>
    )
}

export default Landing