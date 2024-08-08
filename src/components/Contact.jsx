import React, {useRef,useState} from 'react'
import {motion} from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import {slideIn} from "../utils/motion";



const Contact = () => {
  
  const formRef = useRef();
  const [form,setForm] = useState({
    name:"",
    email:"",
    message:"",
  });
  
  const [loading,setLoading] = useState(false);
  
  const handleChange = (e) =>{
    const { target } = e;
    const { name, value } = target;
    console.log(name);
    console.log(value);
    
    setForm({
      ...form,
      [name]: value,
    });
  }
  
  // ........template_cu7y4v7....... template id email 
  //.........service_wiiafap..........
  // public id ........3pnD0iO6lJp7b5of3
  const handleSubmit = (e) => {

    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_wiiafap',
      'template_cu7y4v7',
      {
        from_name:form.name,
        to_name:'Pranav',
        from_email:form.email,
        to_email:'pranavkolhe77@gmail.com',
        message:form.message,
      },
      '3pnD0iO6lJp7b5of3'
    )
    .then(() =>{
      setLoading(false);
      alert('Thank you.I will get back to you as soon as possible');

      setForm({
        name:'',
        email:'',
        message:'',
      })
    },(error) =>{
      setLoading(false)
      console.log(error)
      alert('Something went wrong')
    })


  }

  return (
    <div className={`xl-mt-5 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden mb-20`}>
      <motion.div
        variants={slideIn("left","tween",0.2,1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input 
              type="text" 
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
          </label>


          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>


          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={5}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>


        {/* // buttom to handle onSubmit Event........... */}
        <button
      type="submit"
      className="relative z-30 bg-tertiary px-5 py-3 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary cursor-pointer hover:bg-tertiary-dark transition duration-300"
    >
          {loading ? "Sending":"Send"}
        </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right","tween",0.2,1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />

      </motion.div>

    </div>
  )
}

export default SectionWrapper(Contact,"contact");