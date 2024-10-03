import { useEffect, useState } from 'react';
import carrow from './assets/icons/carrow.svg';

import './App.css';
import './fonts.css';
import './animation.css';

function Contact() {
  const [load, setLoad] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [theme] = useState(() => {
    // Retrieve the theme from localStorage
    return localStorage.getItem('selectedTheme') || 'theme1';
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(true);
    }, 100);

    const timeout = setTimeout(() => {
      setIsContentVisible(true);
    }, 300);

    return () => {
      clearTimeout(timer);
      clearTimeout(timeout);
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
    <div className={`row-span-7 col-span-9 ${themeClasses[theme].bg}`}>

      <div className="w-full h-full grid grid-rows-7 grid-cols-9 gap-4 box-border">
        <div className={`${themeClasses[theme].light} row-span-3 col-span-5 basic ${load ? 'moving-p1' : ''} transition-opacity duration-1000 ease ${isContentVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className='text-black font-gilroy w-full h-full'>
            <div className='flex w-full h-2/3'>
              <div className='w-2/5 text-xl pl-6 pt-8'>
                Have some questions?
              </div>
              <div className='w-3/5 pr-6 pt-8 flex justify-end'>
                <img src={carrow} alt="" className='h-12 hover:cursor-pointer hover:border-[0.5px] hover:border-black' />
              </div>
            </div>
            <div className='h-1/3 text-5xl pl-6'>
              Contact me
            </div>
          </div>
        </div>

        <div className={`${themeClasses[theme].light} row-span-4 col-span-4 basic ${load ? 'moving-p2' : ''} transition-opacity duration-1000 ease ${isContentVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className='text-black font-gilroy w-full h-full'>
            <div className='flex w-full h-2/3'>
              <div className='w-2/5 text-xl pl-6 pt-8'>
                Have some questions?
              </div>
              <div className='w-3/5 pr-6 pt-8 flex justify-end'>
                <img src={carrow} alt="" className='h-12 hover:cursor-pointer hover:border-[0.5px] hover:border-black' />
              </div>
            </div>
            <div className='h-1/3 text-5xl pl-6'>
              Contact me
            </div>
          </div>
        </div>

        <div className={`${themeClasses[theme].light} row-span-4 col-span-2 basic ${load ? 'moving-p3' : ''} transition-opacity duration-1000 ease ${isContentVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className='text-black font-gilroy w-full h-full'>
            <div className='flex w-full h-2/3'>
              <div className='w-2/5 text-xl pl-6 pt-8'>
                Have some questions?
              </div>
              <div className='w-3/5 pr-6 pt-8 flex justify-end'>
                <img src={carrow} alt="" className='h-12 hover:cursor-pointer hover:border-[0.5px] hover:border-black' />
              </div>
            </div>
            <div className='h-1/3 text-5xl pl-6'>
              Contact me
            </div>
          </div>
        </div>

        <div className={`${themeClasses[theme].light} row-span-4 col-span-3 basic ${load ? 'moving-p4' : ''} transition-opacity duration-1000 ease ${isContentVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className='text-black font-gilroy w-full h-full'>
            <div className='flex w-full h-2/3'>
              <div className='w-2/5 text-xl pl-6 pt-8'>
                Have some questions?
              </div>
              <div className='w-3/5 pr-6 pt-8 flex justify-end'>
                <img src={carrow} alt="" className='h-12 hover:cursor-pointer hover:border-[0.5px] hover:border-black' />
              </div>
            </div>
            <div className='h-1/3 text-5xl pl-6'>
              Contact me
            </div>
          </div>
        </div>

        <div className={`${themeClasses[theme].light} row-span-3 col-span-4 basic ${load ? 'moving-p5' : ''} transition-opacity duration-1000 ease ${isContentVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className='text-black font-gilroy w-full h-full'>
            <div className='flex w-full h-2/3'>
              <div className='w-2/5 text-xl pl-6 pt-8'>
                Have some questions?
              </div>
              <div className='w-3/5 pr-6 pt-8 flex justify-end'>
                <img src={carrow} alt="" className='h-12 hover:cursor-pointer hover:border-[0.5px] hover:border-black' />
              </div>
            </div>
            <div className='h-1/3 text-5xl pl-6'>
              Contact me
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
