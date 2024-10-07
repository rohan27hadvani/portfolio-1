import { useEffect, useState } from 'react';
import carrow from './assets/icons/carrow.svg';

import './App.css';
import './fonts.css';
import './animation.css';


function About() {
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
        <div className={`${themeClasses[theme].light} row-span-3 col-span-6 basic ${load ? 'moving-p1' : ''} transition-opacity duration-1000 ease ${isContentVisible ? 'opacity-100' : 'opacity-0'}`}>
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

        <div className={`${themeClasses[theme].light} row-span-7 col-span-3 basic ${load ? 'moving-p2' : ''} transition-opacity duration-1000 ease ${isContentVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className='text-black font-gilroy w-full h-full px-6'>
            <div className='w-full h-[10%] text-5xl pt-8'>
              Experience
            </div>
            
            <div className='h-[90%]'>
            <div className="relative pl-8 sm:pl-32 pt-6 group">
              <div className="font-semibold text-2xl uppercase mb-1 sm:mb-0">
                WriteSpace Infotech Private Limited
              </div>
              <div className="pt-3 flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-[70%] before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-black after:border-4 after:box-content after:white after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-sm font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-black bg-white rounded-full">
                  Present
                </time>
                <div className="text-xl font-semibold text-black">
                  SDE-2
                </div>
              </div>
              <div className="text-black text-lg">
                <div className='pt-2 font-semibold text-xl'>
                KINC Mineral Technologies Pvt Ltd:-
                </div>
                <div className='pt-2 text-xl'>
                I am developing an internal system to replace SAP, with modules for procurement, payroll (Axis Bank API), billing, and staff management.
                </div>
              </div>
            </div>
    

            <div className="relative pl-8 sm:pl-32 pt-3 group">
              <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-[80%] before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-black after:border-4 after:box-content after:white after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-sm font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-black bg-white rounded-full">
                  Dec, 2023
                </time>
                <div className="text-xl font-semibold text-black">
                  SDE-1
                </div>
              </div>
              
              <div className="text-black text-lg">
              <div className='pt-2 font-semibold text-xl'>
                Delta 9 Adventures:-   
              </div>
              <div className='pt-2 text-xl'>
              I built an online turf booking system using Google Calendar and Google Pay, now expanding to include more sports and maintenance scheduling.
              </div>
              </div>

            </div>

            <div className="relative pl-8 sm:pl-32 group">
              <div className="pt-3 flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-[70%] before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-black after:border-4 after:box-content after:white after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-sm font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-black bg-white rounded-full">
                  June, 2021
                </time>
               </div>
            </div>



            <div className="relative pl-8 sm:pl-32 pt-6 group">
              <div className="font-semibold text-2xl uppercase mb-1 sm:mb-0">
                WriteSpace
              </div>
              <div className="pt-3 flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-[80%] before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-black after:border-4 after:box-content after:white after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-sm font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-black bg-white rounded-full">
                  Aug, 2021
                </time>
                <div className="text-xl font-semibold text-black">
                  Software Developer Intern
                </div>
              </div>
              <div className="pt-2 text-black text-xl">
              Developed the full frontend, migrated from React to Next for better SEO, improved UI to boost traffic by 83%, made it mobile-friendly, and implemented Firebase for 3rd-party authentication.

                </div>
            </div>

            <div className="relative pl-8 sm:pl-32 group">
              <div className="pt-3 flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-[70%] before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-black after:border-4 after:box-content after:white after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-sm font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-black bg-white rounded-full">
                  June, 2021
                </time>
               </div>
            </div>

             

            </div>
          </div>
        </div>

        <div className={`${themeClasses[theme].light} row-span-4 col-span-3 basic ${load ? 'moving-p3' : ''} transition-opacity duration-1000 ease ${isContentVisible ? 'opacity-100' : 'opacity-0'}`}>
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
      </div>
    </div>
  );
}

// Book
// Frontend


export default About;
