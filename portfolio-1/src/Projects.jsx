import { useEffect, useState } from 'react';
import Navbar from './Navbar.jsx';
import carrow from './assets/icons/carrow.svg';

import './App.css';
import './fonts.css';
import './animation.css';

function Projects() {
  const [load, setLoad] = useState(false);
  const [theme] = useState(() => {
    // Retrieve the theme from localStorage
    return localStorage.getItem('selectedTheme') || 'theme1';
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(true);
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const themeClasses = {
    theme1: {
      bg: 'bg1',
      dark: 'dark1',
      light: 'light1',
    },
    theme2: {
      bg: 'bg2',
      dark: 'dark2',
      light: 'light2',
    },
    theme3: {
      bg: 'bg3',
      dark: 'dark3',
      light: 'light3',
    },
  };

  return (
    <div className={`h-screen w-screen p-4 ${themeClasses[theme].bg}`}>
      <div className="w-full h-full">
        <div className="grid grid-rows-8 grid-cols-9 h-full w-full gap-4">
          
        <Navbar theme={themeClasses[theme]} load={load} animationClass="moving-pn" />


          <div className={`${themeClasses[theme].light} row-span-3 col-span-5 basic ${load ? 'moving-p1' : ''}`}>
            <div className='text-black font-gilroy w-full h-full'>
              <div className='flex w-full h-2/3'>
                <div className='w-2/5 text-xl pl-6 pt-8'>
                  Have some questions?
                </div>
                <div className='w-3/5 pr-6 pt-8 flex justify-end'>
                  <img src={carrow} alt="" className='h-12 hover:cursor-pointer hover:border-[0.5px] hover:border-black'/>
                </div>
              </div>
              <div className='h-1/3 text-5xl pl-6'>
                Contact me
              </div>
            </div>
          </div>

          <div className={`${themeClasses[theme].light} row-span-4 col-span-4 basic ${load ? 'moving-p2' : ''}`}>
            <div className='text-black font-gilroy w-full h-full'>
              <div className='flex w-full h-2/3'>
                <div className='w-2/5 text-xl pl-6 pt-8'>
                  Have some questions?
                </div>
                <div className='w-3/5 pr-6 pt-8 flex justify-end'>
                  <img src={carrow} alt="" className='h-12 hover:cursor-pointer hover:border-[0.5px] hover:border-black'/>
                </div>
              </div>
              <div className='h-1/3 text-5xl pl-6'>
                Contact me
              </div>
            </div>
          </div>

          <div className={`${themeClasses[theme].light} row-span-4 col-span-2 basic ${load ? 'moving-p3' : ''}`}>
            <div className='text-black font-gilroy w-full h-full'>
              <div className='flex w-full h-2/3'>
                <div className='w-2/5 text-xl pl-6 pt-8'>
                  Have some questions?
                </div>
                <div className='w-3/5 pr-6 pt-8 flex justify-end'>
                  <img src={carrow} alt="" className='h-12 hover:cursor-pointer hover:border-[0.5px] hover:border-black'/>
                </div>
              </div>
              <div className='h-1/3 text-5xl pl-6'>
                Contact me
              </div>
            </div>
          </div>
        
          <div className={`${themeClasses[theme].light} row-span-4 col-span-3 basic ${load ? 'moving-p4' : ''}`}>
            <div className='text-black font-gilroy w-full h-full'>
              <div className='flex w-full h-2/3'>
                <div className='w-2/5 text-xl pl-6 pt-8'>
                  Have some questions?
                </div>
                <div className='w-3/5 pr-6 pt-8 flex justify-end'>
                  <img src={carrow} alt="" className='h-12 hover:cursor-pointer hover:border-[0.5px] hover:border-black'/>
                </div>
              </div>
              <div className='h-1/3 text-5xl pl-6'>
                Contact me
              </div>
            </div>
          </div>

          <div className={`${themeClasses[theme].light} row-span-3 col-span-4 basic ${load ? 'moving-p5' : ''}`}>
            <div className='text-black font-gilroy w-full h-full'>
              <div className='flex w-full h-2/3'>
                <div className='w-2/5 text-xl pl-6 pt-8'>
                  Have some questions?
                </div>
                <div className='w-3/5 pr-6 pt-8 flex justify-end'>
                  <img src={carrow} alt="" className='h-12 hover:cursor-pointer hover:border-[0.5px] hover:border-black'/>
                </div>
              </div>
              <div className='h-1/3 text-5xl pl-6'>
                Contact me
              </div>
            </div>
          </div>

          {/* <div className={`${themeClasses[theme].light} row-span-3 col-span-3 basic ${load ? 'moving-p6' : ''}`}>
            <div className='text-black font-gilroy w-full h-full'>
              <div className='flex w-full h-2/3'>
                <div className='w-2/5 text-xl pl-6 pt-8'>
                  Have some questions?
                </div>
                <div className='w-3/5 pr-6 pt-8 flex justify-end'>
                  <img src={carrow} alt="" className='h-12 hover:cursor-pointer hover:border-[0.5px] hover:border-black'/>
                </div>
              </div>
              <div className='h-1/3 text-5xl pl-6'>
                Contact me
              </div>
            </div>
          </div>
         */}
        
        
        
        
        
        
        </div>
      </div>
    </div>
  );
}

export default Projects;
