// import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Navbar = ({ theme, load, animationClass = 'moving-1' }) => {


  return (
    <div className={`${theme.light} row-span-1 col-span-9 basic ${load ? animationClass : ''}`}>
      <div className='text-black flex gap-3 font-gilroy uppercase text-3xl justify-start pl-8 w-2/3 items-center hover:cursor-pointer'>
        <Link to="/" className='flex gap-3'>
          <div className='italic'>Rohan</div>
          <div className='font-semibold'>Hadvani</div>
        </Link>
      </div>
      <div className='w-1/3 flex items-center'>
        <ul className='text-black flex justify-around font-gilroy uppercase text-2xl w-full'>
          <li className='font-light hover:font-semibold hover:underline hover:cursor-pointer'>
            <Link to="/Projects">Projects</Link>
          </li>
          <li className='font-light hover:font-semibold hover:underline hover:cursor-pointer'>
            <Link to="/About">About</Link>
          </li>
          <li className='font-light hover:font-semibold hover:underline hover:cursor-pointer'>
            <Link to="/Contact">Contact</Link>
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
