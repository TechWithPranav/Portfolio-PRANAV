import React from 'react'
import {Tilt} from "react-tilt";
import {motion} from "framer-motion";

import {styles} from "../styles";
import {github} from "../assets";
import { SectionWrapper } from '../hoc';
import {projects} from "../constants";
import { fadeIn,textVariant } from '../utils/motion';

// for 3d buttons.......
import { AwesomeButton } from "react-awesome-button";
import 'react-awesome-button/dist/styles.css';






const ProjectCard =({index,name,description,tags,image,source_code_link,}) =>{
return(
  <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
  <Tilt
    options={{
      max: 45,
      scale: 1,
      speed: 450,
    }}
    className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full relative"
  >
    {/* GitHub icon at top right corner */}
    <div className="absolute top-2 right-3">
      <div
        onClick={() => window.open(source_code_link, "_blank")}
        className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
      >
        <img src={github} alt="source_code" className="w-7 h-8 object-contain" />
      </div>
    </div>

    {/* Project image */}
    <div className="relative w-full h-[230px]">
      <img src={image} alt="project-image" className="w-full h-full object-contain rounded-2xl" />
    </div>

    {/* Project description */}
    <div className="mt-5">
      <h3 className="text-white font-bold text-[24px]">{name}</h3>
      <p className="mt-2 text-secondary text-[14px]">{description}</p>
    </div>

    {/* Project tags */}
    <div className="mt-4 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <p
          key={`${name}-${tag.name}`}
          className={`text-[14px] ${tag.color}`}
        >
          #{tag.name}
        </p>
      ))}
    </div>
  </Tilt>
</motion.div>
)
}



const Works = () => {

  
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My Work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>

      <div className='w-full flex'>
      <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
       🚀 Explore my project portfolio to see real-world examples of my work, showcasing my ability to tackle complex challenges and deliver efficient, scalable, and user-friendly solutions. Each project is briefly described, with links to code repositories and live demos, reflecting my dedication to quality and innovation. Dive in to witness my skills in action and how I bring ideas to life!
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project,index)=>(
          <ProjectCard key={`project-${index}`} index={index} {...project}/>
        ))}
      </div>

        
      <div className="mt-10  flex justify-center">
      <a 
            href="https://github.com/TechWithPranav?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
        >
        <AwesomeButton type="secondary"  >View All Projects</AwesomeButton>
        </a>
      </div>
       
    </>
  )
}

export default SectionWrapper(Works,"works");