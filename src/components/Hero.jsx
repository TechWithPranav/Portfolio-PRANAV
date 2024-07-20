import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from "./canvas"
import { DockDemo } from "../components/magicui/Dock_demo"

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* .....data ..... */}
        <div>
          <h1 className={`${styles.heroHeadText_main} text-white`}>Hi, I'm <span className="text-[#915eff]">Pranav</span></h1>
          {/* <p className={`${styles.heroSubText} mt-2 text-white-100`}>A Full Stack Engineer crafting scalable, secure, and efficient applications, with growing proficiency in Cloud technologies.</p> */}
          <p className={`${styles.heroSubText_main} mt-2 text-white-100`}>
            A Full Stack Engineer 💻 crafting scalable, secure 🔒, and efficient applications ⚙️, <br />with growing proficiency in Cloud technologies ☁️.
          </p>

        </div>
      </div>



      {/* //Computer 3d Model........................ */}
      <div className="relative border border-white">
  <div className="absolute inset-0  flex items-center justify-center  min-w-[100px] min-h-[400px] top-40 ml-48 ">
    <ComputersCanvas />
  </div>
</div>





{/* Fixed DockDemo */}
<div className="fixed bottom-0 right-0 z-50 w-full flex justify-center ">
        <div className=" p-6  rounded-lg shadow-lg">
          <DockDemo />
        </div>
      </div>
    </section>
  )
}

export default Hero