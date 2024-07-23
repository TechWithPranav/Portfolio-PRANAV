import React from 'react'

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import {styles} from "../styles";

import { div } from 'three/examples/jsm/nodes/Nodes.js';
import {IconCloudDemo} from "../components/magicui/icon_cloud_demo"
import {Tech_stack_Lang,Tech_stack_framework,Tech_stack_DevOps,Tech_stack_UI_UX} from "../constants"


const Tech = () => {
  return (

    
    <div className=''>
      <div className={`${styles.heroHeadText_main} text-center mb-10`}> Skills</div>
      <div className='flex'>
        <div className=' w-[100%] h-full'>



          <div>
            <h4 className='text-[30px] font-bold mb-4 mt-4'>Languages</h4>
            <div className='flex justify-start flex-wrap'>
              {Tech_stack_Lang.map((techno)=>(
                <img src={techno.icon} alt=""  key={techno.name} className='w-[6%] mr-4' />
              ))}
            </div>
          </div>

          <div>
            <h4 className='text-[30px] font-bold mb-4 mt-4'>Frameworks</h4>
            <div className='flex justify-start flex-wrap'>
              {Tech_stack_framework.map((techno)=>(
                <img src={techno.icon} alt={techno.name} key={techno.name} className='w-[6%] mr-4' />
              ))}
            </div>
          </div>

          <div>
            <h4 className='text-[30px] font-bold mb-4 mt-4'>DevOps</h4>
            <div className='flex justify-start flex-wrap'>
              {Tech_stack_DevOps.map((techno)=>(
                <img src={techno.icon} alt=""  key={techno.name} className='w-[6%] mr-4' />
              ))}
            </div>
          </div>


          <div>
            <h4 className='text-[30px] font-bold mb-4 mt-4'>UI/UX</h4>
            <div className='flex justify-start flex-wrap'>
              {Tech_stack_UI_UX.map((techno)=>(
                <img src={techno.icon} alt=""  key={techno.name} className='w-[5.8%] mr-4' />
              ))}
            </div>
          </div>
         



        </div>
        <div className='w-[80%] h-[500px] hidden md:block'>   <IconCloudDemo /></div>
   
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