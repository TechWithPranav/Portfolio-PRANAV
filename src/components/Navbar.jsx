import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom';

import {styles} from '../styles';
import { navLinks } from '../constants';
import {logo,menu,close} from '../assets';

const Navbar = () => {
  const [active,setActive] = useState('');
  const [toggle,setToggle] = useState(false);


  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          {/* logo image.................  */}
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={()=>{
              setActive("");
              window.scrollTo(0,0);
            }}
          >
            <img src={logo} alt="logo" className='w-9 h-9 object-contain' />
            <p className='text-white text-[18px] font-bold curser-pointer'>Pranav Kolhe</p>
          </Link>
          <ul className='list-none hidden sm:flex flew-row gap-10'>
            {navLinks.map((obj)=>(
              <li
                key={obj.id}
                className={`${
                  active ===obj.title
                  ? "text-white":"text-secondary"} 
                  hover:text-white text-[18px] font-medium cursor-pointer`} 
                  onclick={()=> setActive(obj.title)}
              >
                <a href="{`#${obj.id}`}">{obj.title}</a>
              </li>
            ))}
          </ul>


           {/* for menu functionality when screen size is too small..........  */}
            <div className='sm:hidden flex flex-1 justify-end items-center'>
              <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer' 
              onClick={() => setToggle(!toggle) }
              />

            </div>




        </div>
    </nav>
  )
}

export default Navbar