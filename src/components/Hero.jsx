import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from "./canvas"
import { DockDemo } from "../components/magicui/Dock_demo"
import { ShimmerButtonDemo } from "../components/magicui/Shimmer_demo"

const Hero = () => {
  return (
    <section className="relative w-full h-[630px] sm:h-[550px] xl:h-[500px] lg:h-[600px] mx-auto lg:top-10 " id='home'> 
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* .....data ..... */}
        <div>
          <h1 className={`${styles.heroHeadText_main} text-white`}>Hi, I'm <span className="text-[#915eff]">Pranav</span></h1>
          {/* <p className={`${styles.heroSubText} mt-2 text-white-100`}>A Full Stack Engineer crafting scalable, secure, and efficient applications, with growing proficiency in Cloud technologies.</p> */}
          <p className={`${styles.heroSubText_main} mt-2 text-white-100 sm:w-auto lg:w-[700px]`}>
            A Full Stack Engineer 💻 crafting scalable, secure 🔒, and efficient applications ⚙️,with growing proficiency in Cloud technologies ☁️.
          </p>
          <div className="flex  justify-start p-2 space-x-4">
          <ShimmerButtonDemo btn="Resume"/>
          <ShimmerButtonDemo btn="My Projects"/>
        </div>

        </div>
      </div>


      {/* //Computer 3d Model........................ */}
      <div>
      <div className="relative w-full h-[260px] top-[400px] flex justify-center items-center align-middle xs:top[320px] sm:h-[300px] sm:top-[300px] md:top-[300px] lg:h-[350px]  xl:h-[290px] xl:top-[139px] xl:left-[810px] xl:w-[500px] 2xl:left-[1000px] ">
        
        <ComputersCanvas />
        </div>
    </div>





{/* Fixed DockDemo */ }
  <div className="fixed bottom-0 right-0 z-50 w-full flex justify-center ">
    <div className=" p-6  rounded-lg shadow-lg">
      <DockDemo />
    </div>
  </div>
    </section >
  )
}

export default Hero