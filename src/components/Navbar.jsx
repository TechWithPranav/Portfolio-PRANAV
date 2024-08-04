import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer'>Pranav Kolhe</p>
        </Link>

        {/* Desktop Navigation */}
        <ul className='list-none hidden sm:hidden lg:flex flex-row gap-10'>
          {navLinks.map((obj) => (
            <li
              key={obj.id}
              className={`${active === obj.title ? "text-white" : "text-secondary"} 
                hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(obj.title)}
            >
              {obj.id === 'achievements' ? (
                    <Link to="/achievements">
                      {obj.title}
                    </Link>
                  ) : (
                    <HashLink smooth to={`/#${obj.id}`}>
                      {obj.title}
                    </HashLink>
                  )}
            </li>
          ))}
        </ul>

        {/* Mobile Navigation */}
        <div className='lg:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt="menu"
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />

          <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((obj) => (
                <li
                  key={obj.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] 
                    ${active === obj.title ? "text-white" : "text-secondary"}`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(obj.title);
                  }}
                >

                  {/* Use Link for navigation to different routes */}
                  {obj.id === 'achievements' ? (
                    <Link to="/achievements">
                      {obj.title}
                    </Link>
                  ) : (
                    <HashLink smooth to={`/#${obj.id}`}>
                      {obj.title}
                    </HashLink>
                  )}


                  {/* <HashLink smooth to={`/#${obj.id}`}>
                    {obj.title}
                  </HashLink> */}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
