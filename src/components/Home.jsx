import React from 'react'
import Scene from './Scene'

const Home = () => {
  return (
    <main className='w-full h-screen bg-black flex text-white'>
        <div className='p-10 fixed top-0 left-0 w-full'>
            <div>Yeshu</div>
        </div>
        <Scene/>
    </main>
  )
}

export default Home