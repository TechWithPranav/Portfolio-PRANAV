import React from 'react'

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import {styles} from "../styles";

import { div } from 'three/examples/jsm/nodes/Nodes.js';
import {IconCloudDemo} from "../components/magicui/icon_cloud_demo"
import {technologies} from "../constants"


const Tech = () => {
  return (

    
    <div className=''>
      <div className={`${styles.heroHeadText_main} text-center mb-10`}> Skills</div>
      <div className='flex'>
        <div className=' w-[100%] h-full'>



          <div>
            <h4 className='text-[26px] font-bold mb-4 mt-4'>Languages</h4>
            <div className='flex justify-start flex-wrap'>
              {technologies.map((techno)=>(
                <img src={techno.icon} alt="" srcset="" className='w-[6%]' />
              ))}
            </div>
          </div>

          <div>
            <h4 className='text-[26px] font-bold mb-4 mt-4'>Frameworks</h4>
            <div className='flex justify-start flex-wrap'>
              {technologies.map((techno)=>(
                <img src={techno.icon} alt="" srcset="" className='w-[6%]' />
              ))}
            </div>
          </div>

          <div>
            <h4 className='text-[26px] font-bold mb-4 mt-4'>DevOps</h4>
            <div className='flex justify-start flex-wrap'>
              {technologies.map((techno)=>(
                <img src={techno.icon} alt="" srcset="" className='w-[6%]' />
              ))}
            </div>
          </div>
         



        </div>
        <div className='w-[60%] hidden md:block'>   <IconCloudDemo /></div>
   
      </div>
    </div>









    /// Animated Tech icons having some glitch not visible in mobile so i will do this later.............................
    // <div className='flex flex-row flex-wrap justify-center gap-10'>
    //   {technologies.map((technology)=>(
    //     <div className='w-28 h-28' key={technology.name}>
    //       <BallCanvas icon ={technology.icon} />
    //     </div>
    //   ))}
    // </div>
  )
}

export default SectionWrapper(Tech,"");