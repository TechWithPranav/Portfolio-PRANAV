import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { edu } from "../constants";



const FeedbackCard = ({
  index,
  info,
  name,
  designation,

  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <p className='text-white font-black text-[48px]'>"</p>

    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'dangerouslySetInnerHTML={{ __html: info }}></p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {designation}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>
  </motion.div>
);



const Education = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
    <div
      className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
    >
      <motion.div variants={textVariant()}>
        {/* <p className={styles.sectionSubText}></p> */}
        <h2 className={styles.sectionHeadText}>Education</h2>
      </motion.div>
    </div>
    <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7 justify-center`}>
      {edu.map((edu, index) => (
        <FeedbackCard key={edu.name} index={index} {...edu} />
      ))}
    </div>
  </div>
);
  
}

export default SectionWrapper(Education,"")