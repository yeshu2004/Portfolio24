import React, { useEffect } from 'react'
import { DoubleSide } from 'three'
import { useScroll, useTransform } from 'framer-motion'
import {motion} from 'framer-motion-3d'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'
import PPfont from '../assets/PPGatwick-Regular.ttf'

const Model = () => {
    const { scrollYProgress } = useScroll()
    const rotationY = useTransform(scrollYProgress, [0, 1], [0, Math.PI * 2])
    const opacity = useTransform(scrollYProgress, [0,1], [0, 1])

    useEffect(() => {
        console.log(scrollYProgress)
    })
    

    return (
        <div className='w-full h-[500vh] bg-black text-white'>
            <div className='w-full h-[100vh] sticky top-0'>
                <Canvas>
                <ambientLight intensity={0.5} />
                <motion.group rotation-y={rotationY} rotation={[0,0,0]}>
                    <motion.mesh>
                        <boxGeometry args={[3.5, 3.5, 3.5, 10, 5, 10]} />
                        <motion.meshStandardMaterial
                            side={DoubleSide}
                            wireframe={true}
                            color={'white'}
                            transparent={true}
                            opacity={opacity}
                        />
                    </motion.mesh>
                </motion.group>
                </Canvas>
            </div>
            <div className="relative z-10 px-10">
                {[{
                    title: "FRONT-END Mastery",
                    content: "Proficient in creating dynamic and responsive user interfaces using React.js, Tailwind."
                },
                {
                    title: "MERN Stack Developer",
                    content: "Skilled in building full-stack applications using MongoDB, Express.js, React, and Node.js."
                },
                {
                    title: "UI/UX Focus",
                    content: "Passionate about creating intuitive and visually appealing user experiences."
                },
                {
                    title: "WEB Technologies",
                    content: "Well-versed in ES6+, TypeScript, and Next.js for building efficient and scalable web applications."
                }
                ].map((item, index) => (
                    <div
                        key={index}
                        className={`h-screen flex items-center ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}
                    >
                        <div className="bg-transparent text-white p-4 py-5 font-[PPfont] max-w-sm">
                            <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
                            <p className=''>{item.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Model
