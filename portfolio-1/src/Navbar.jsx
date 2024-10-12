// import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Navbar = ({ theme, load, animationClass = 'moving-1' }) => {
  return (
    <div className={`${theme.light} row-span-1 col-span-9 basic ${load ? animationClass : ''}`}>
      <div className='text-black flex gap-3 font-gilroy uppercase text-3xl justify-start pl-8 w-2/3 items-center hover:cursor-pointer laptop:scale-90 laptop:-ml-9 screen16:text-5xl screen16:-ml-[50px]'>
        <NavLink to="/" className='flex gap-3'>
          <div className='italic'>Rohan</div>
          <div className='font-semibold'>Hadvani</div>
        </NavLink>
      </div>
      <div className='w-1/3 flex items-center'>
        <ul className='text-black flex justify-around font-gilroy uppercase text-2xl w-full screen16:gap-0'>
          <li className='font-light font hover:font-bold hover:underline hover:cursor-pointer laptop:scale-90 screen16:text-4xl'>
            <NavLink to="/Projects" className={({ isActive }) => (isActive ? 'font-semibold' : '')}>
              Projects
            </NavLink>
          </li>
          <li className='font-light hover:font-bold hover:underline hover:cursor-pointer laptop:scale-90 screen16:text-4xl'>
            <NavLink to="/About" className={({ isActive }) => (isActive ? 'font-semibold' : '')}>
              About
            </NavLink>
          </li>
          <li className='font-light hover:font-bold hover:underline hover:cursor-pointer laptop:scale-90 laptop:-mr-8 screen16:text-4xl screen16:-mr-[65px]'>
            <NavLink to="/Contact" className={({ isActive }) => (isActive ? 'font-semibold' : '')}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

// Add prop types
Navbar.propTypes = {
  theme: PropTypes.shape({
    light: PropTypes.string.isRequired,
  }).isRequired,
  load: PropTypes.bool.isRequired,
  animationClass: PropTypes.string,  // New prop
};

export default Navbar;