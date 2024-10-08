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
    // const scale = useTransform(scrollYProgress, [0, 1], [0, 2])

    useEffect(() => {
        console.log(scrollYProgress)
    })
    

    return (
        <div className='w-full h-[500vh] bg-black text-white'>
            <div className='w-full h-[100vh] sticky top-0'>
                <Canvas>
                <ambientLight intensity={0.5} />
                <motion.group rotation-y={rotationY}rotation={[0,0,0]}>
                    <mesh>
                        <boxGeometry args={[3.5, 3.5, 3.5, 10, 10, 10]} />
                        <meshStandardMaterial
                            side={DoubleSide}
                            wireframe={true}
                            color={'white'}
                            antialiasing={true}
                        />
                    </mesh>
                </motion.group>
                </Canvas>
            </div>
            <div className="relative z-10 px-10">
                {[1, 2, 3, 4].map((index) => (
                    <div
                        key={index}
                        className={`h-screen flex items-center ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}
>
                        <div className="bg-transparent text-white p-4 py-5 border-[1px] border-zinc-300 font-[PPfont]">
                            <h2 className="text-xl font-bold mb-4">Text Box {index}</h2>
                            <p>This is the content for text box {index}.</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Model
