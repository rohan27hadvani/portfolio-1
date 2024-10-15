// import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Navbar = ({ theme, load, animationClass = 'moving-1' }) => {
  return (
    <div className={`${theme.light} row-span-1 col-span-9 basic ${load ? animationClass : ''}
    
    mobile:py-3 tablet:py-0 mobile:flex mobile:flex-col mobile:items-center tablet:flex-row
    `}>
      <div className='text-black flex font-gilroy uppercase text-3xl justify-start w-2/3 items-center hover:cursor-pointer 
      
      mobile:text-3xl mobile:mb-2 mobile:justify-center mobile:flex tablet:mb-0
      
      tablet:pl-6 tablet:justify-start tablet:text-2xl laptop:text-3xl desktop:text-4xl screen14:text-[40px]'>
        <NavLink to="/" className='flex  mobile:gap-2 tablet:gap-3'>
          <div className='italic'>Rohan</div>
          <div className='font-semibold'>Hadvani</div>
        </NavLink>
      </div>
      <div className='w-1/3 flex items-center tablet:mr-0 tablet:pr-2'>
        <ul className='text-black flex justify-around font-gilroy uppercase text-2xl w-full mobile:gap-6 mobile:justify-center mobile:flex tablet:justify-end tablet:pr-6'>
          <li className='font-light font hover:font-bold hover:underline hover:cursor-pointer
          
          mobile:text-lg tablet:text-[16px] laptop:text-xl desktop:text-2xl screen14:text-[28px]'>
            <NavLink to="/Projects" className={({ isActive }) => (isActive ? 'font-semibold' : '')}>
              Projects
            </NavLink>
          </li>
          <li className='font-light hover:font-bold hover:underline hover:cursor-pointer 
          
          mobile:text-lg tablet:text-[16px] laptop:text-xl desktop:text-2xl screen14:text-[28px]'>
            <NavLink to="/About" className={({ isActive }) => (isActive ? 'font-semibold' : '')}>
              About
            </NavLink>
          </li>
          <li className='font-light hover:font-bold hover:underline hover:cursor-pointer
          
          mobile:text-lg tablet:text-[16px] laptop:text-xl desktop:text-2xl screen14:text-[28px]'>
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