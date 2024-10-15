import { useEffect, useState } from 'react';
import carrow from './assets/icons/carrow.svg';

import './App.css';
import './fonts.css';
import './animation.css';

function Projects() {
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

      <div className="w-full h-full grid grid-rows-7 grid-cols-9 gap-4 box-border
      
      mobile:inline-block tablet:grid">
        <div className={`${themeClasses[theme].light} row-span-3 col-span-5 basic ${load ? 'moving-p1' : ''} transition-opacity duration-1000 ease ${isContentVisible ? 'opacity-100' : 'opacity-0'}
          
        mobile:mt-4`}>
          <div className='text-black font-gilroy w-full h-full'>
            <div className='flex w-full h-2/3 pt-8
            
            tablet:pt-3 laptop:pt-8'>
              <div className='w-3/5 text-3xl font-semibold pl-6
              
              mobile:text-2xl tablet:text-[20px] laptop:text-[27px] desktop:text-3xl'>
                Library Management System
              </div>
              <div className='w-2/5 pr-6 flex justify-end 
              
              tablet:scale-[0.75] tablet:-mt-2 tablet:pr-0 laptop:scale-100 laptop:pr-6'>
                <a href="https://github.com/rohan27hadvani/SVIT-LMS" target='_blank'>
                  <img src={carrow} alt="" className='h-12 hover:cursor-pointer hover:border-[0.5px] hover:border-black' />
                </a>
              </div>
            </div>
            <div className='h-1/3 text-2xl px-6 text-justify
            
            mobile:text-lg mobile:mt-3 mobile:pb-4 tablet:text-[15px] tablet:-mt-[40px] laptop:text-[20px] desktop:text-2xl'>
              Created a Android App with Java. Used Firebase for Google Authentication for Creating an Account. Fully Functional for Admins and Students.
            </div>
          </div>
        </div>

        <div className={`${themeClasses[theme].light} row-span-4 col-span-4 basic ${load ? 'moving-p2' : ''} transition-opacity duration-1000 ease ${isContentVisible ? 'opacity-100' : 'opacity-0'}
          
        mobile:mt-4 `}>
          <div className='text-black font-gilroy w-full h-full pt-8'>
            <div className='flex w-full h-2/3 pt-8 
            
            tablet:-mt-4 tablet:pt-0 laptop:-mt-2'>
              <div className='w-3/5 text-3xl pl-6 font-semibold
              
              mobile:text-2xl tablet:text-[20px] laptop:text-[27px] desktop:text-3xl'>
                Ticketing App/ Jira Clone
              </div>
              <div className='w-2/5 pr-6 flex justify-end
              tablet:scale-[0.75] tablet:-mt-2 tablet:pr-0 laptop:scale-100 laptop:pr-6 laptop:mt-0'>
                <a href="https://github.com/rohan27hadvani/ticketing-app" target='_blank'>
                  <img src={carrow} alt="" className='h-12 hover:cursor-pointer hover:border-[0.5px] hover:border-black' />
                </a>
              </div>
            </div>
            <div className='h-1/3 text-2xl px-6 text-justify
            
            mobile:text-lg mobile:mt-3 mobile:pb-4 tablet:text-[15px] tablet:-mt-[45px] laptop:text-[20px] desktop:text-2xl'>
              Fully functional ticketing app made with Next.js, Tailwind CSS and MongoDB. Used Mongoose library to connect my app to Atlas Database.
            </div>
          </div>
        </div>

        <div className={`${themeClasses[theme].light} row-span-4 col-span-2 basic ${load ? 'moving-p3' : ''} transition-opacity duration-1000 ease ${isContentVisible ? 'opacity-100' : 'opacity-0'}
          
        mobile:mt-4 `}>
          <div className='text-black font-gilroy w-full h-full'>
            <div className='flex w-full h-2/3 pt-8
            
            tablet:pt-3 laptop:pt-8'>
              <div className='w-3/5 text-3xl font-semibold pl-6
              
              mobile:text-2xl tablet:text-[20px] laptop:text-[27px] desktop:text-3xl'>
                Game of Blackjack
              </div>
              <div className='w-2/5 pr-6 flex justify-end
              
              tablet:scale-[0.75] tablet:-mt-2 tablet:pr-0 laptop:scale-100 laptop:pr-6 laptop:mt-0'>
                <a href="https://github.com/rohan27hadvani/Blackjack-Game" target='_blank'>
                  <img src={carrow} alt="" className='h-12 hover:cursor-pointer hover:border-[0.5px] hover:border-black' />
                </a>
              </div>
            </div>
            <div className='h-1/3 text-2xl px-6 text-justify
            
            mobile:text-lg mobile:mt-3 mobile:pb-4 tablet:text-[15px] tablet:-mt-[55px] laptop:text-[20px] desktop:text-2xl'>
              Created a Fun Blackjack game with the help of JavaScript and CSS. 
            </div>
          </div>
        </div>

        <div className={`${themeClasses[theme].light} row-span-4 col-span-3 basic ${load ? 'moving-p4' : ''} transition-opacity duration-1000 ease ${isContentVisible ? 'opacity-100' : 'opacity-0'}
          
        mobile:mt-4 `}>
          <div className='text-black font-gilroy w-full h-full'>
            <div className='flex w-full h-2/3 pt-8
            
            tablet:pt-3 laptop:pt-8'>
              <div className='w-3/5 text-3xl font-semibold pl-6
              
              mobile:text-2xl tablet:text-[20px] laptop:text-[27px] desktop:text-3xl'>
                Private Bookmark Chrome Extention
              </div>
              <div className='w-2/5 pr-6 flex justify-end
              
              tablet:scale-[0.75] tablet:-mt-2 tablet:pr-0 laptop:scale-100 laptop:mt-0 laptop:pr-6'>
                <a href="https://github.com/rohan27hadvani/Private-Bookmark-Chrome-Ext" target='_blank'>
                  <img src={carrow} alt="" className='h-12 hover:cursor-pointer hover:border-[0.5px] hover:border-black' />
                </a>
              </div>
            </div>
            <div className='h-1/3 text-2xl px-6 text-justify
            
            mobile:text-lg mobile:mt-3 mobile:pb-4 tablet:text-[15px] tablet:-mt-[30px] laptop:text-[20px] desktop:text-2xl'>
              Used JavaScript with CSS to create a Chrome Extention for storing URLs locally on you machine. 
            </div>
          </div>
        </div>

        <div className={`${themeClasses[theme].light} row-span-3 col-span-4 basic ${load ? 'moving-p5' : ''} transition-opacity duration-1000 ease ${isContentVisible ? 'opacity-100' : 'opacity-0'}
          
        mobile:mt-4 `}>
          <div className='text-black font-gilroy w-full h-full'>
            <div className='flex w-full h-2/3 pt-8
            
            tablet:pt-3 laptop:pt-8'>
              <div className='w-3/5 text-3xl font-semibold pl-6
              
              mobile:text-2xl tablet:text-[20px] laptop:text-[27px] desktop:text-3xl'>
                Basic React Counter App
              </div>
              <div className='w-2/5 pr-6 flex justify-end
              
              tablet:scale-[0.75] tablet:-mt-2 tablet:pr-0 laptop:scale-100 laptop:pr-6'>
                <a href="https://github.com/rohan27hadvani/React-Counter-App/tree/main" target='_blank'>
                  <img src={carrow} alt="" className='h-12 hover:cursor-pointer hover:border-[0.5px] hover:border-black' />
                </a>
              </div>
            </div>
            <div className='h-1/3 text-2xl px-6 text-justify
            
            mobile:text-lg mobile:mt-3 mobile:pb-4 tablet:text-[15px] tablet:-mt-[30px] laptop:text-[20px] desktop:text-2xl'>
              Used React with CSS to create a Counter used to increment as well as decrement a number.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
