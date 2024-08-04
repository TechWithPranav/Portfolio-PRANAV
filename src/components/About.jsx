import React from 'react';
import {Tilt} from "react-tilt";
import {motion} from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { div } from 'three/examples/jsm/nodes/Nodes.js';



const ServiceCard = ({index,title,icon})=>(
  <Tilt className='sm:h-full sm:w-[250px]  w-full '>
    <motion.div 
    variants={fadeIn("right","spring",index*0.5,0.75)}
    className=' sm:w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>

      <div 
      options={{
        max:45,
        scale:1,
        speed:450,
      }} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[100px] sm:min-h-[240px] flex justify-evenly items-center flex-col'>
    
    <img src={icon} alt='web-development' className='w-16 h-16 object-contain' />

    <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
    </div>
    </motion.div>
  </Tilt>
);



const About = () => {
  return (
    <>
    
    <motion.div variants={textVariant()}>
    <p className={`${styles.sectionSubText}`}  >Introduction</p>
    <h2 className={styles.sectionHeadText}>Overview</h2>
    </motion.div>

    <motion.p
    varients = {fadeIn("","",0.1,1)}
    className='mt-0 xl:mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
     I am a skilled full stack engineer with expertise in React, Node.js, Flask, Java, and MongoDB. My experience spans web development, data analytics using Power BI, and I am actively expanding my knowledge in cloud technologies. I also contribute to open source projects and have a strong background in UI/UX design. Known for being a quick learner, I collaborate closely with clients to deliver efficient, scalable, and user-friendly solutions that address real-world challenges. With strong team management skills and a proactive approach, I am ready to bring your ideas to life and work together to achieve your goals.
    </motion.p>


    <div className="mt-20 flex flex-wrap gap-10  justify-center">
      {services.map((service,index)=>(
        <ServiceCard key={service.title} index={index} {...service}/>
      ))}
    </div>


    </>
  )
}

export default SectionWrapper(About,"about");