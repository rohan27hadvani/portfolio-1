import { useEffect, useState } from 'react';
import carrow from './assets/icons/carrow.svg';

import './App.css';
import './fonts.css';
import './animation.css';

import html from './assets/icons/HTML.svg';
import css from './assets/icons/CSS.svg';
import fb from './assets/icons/Firebase.svg'
import java from './assets/icons/Java.svg' 
import aStudio from './assets/icons/AStudio.svg'
import js from './assets/icons/JS.svg';
// import ts from './assets/icons/TS.svg';
import tw from './assets/icons/Tailwind.svg';
// import py from './assets/icons/Python.svg';
import nxt from './assets/icons/Next.svg';
// import node from './assets/icons/Node.svg';
import mdb from './assets/icons/MongoDB.svg'
import react from './assets/icons/React.svg';

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
          
        mobile:mt-4 tablet:mt-0`}>
          <div className='text-black font-gilroy w-full h-full'>
            <div className='projectTopDiv'>
              <div className='projectHeadingDiv'>
                Library Management System
              </div>
              <div className=' 
              
              projectLinkIcon'>
                <a href="https://github.com/rohan27hadvani/SVIT-LMS" target='_blank'>
                  <img src={carrow} alt="" className='h-12 hover:cursor-pointer hover:border-[0.5px] hover:border-black' />
                </a>
              </div>
            </div>
            <div className='h-2/3 px-4 pb-4 flex flex-col items-start justify-end'>
              <div className='projectDes'>
              An android app with Java. Firebase for Google Authentication. Functional for Libriarians/Admins and Students.
              </div>
              <div className='mobile:text-lg tablet:text-[15px] laptop:text-[20px] desktop:text-2xl'> 
                Tech Stack:
                  <div className='mobile:text-lg tablet:text-[15px] laptop:text-[20px] desktop:text-2xl flex'>
                    <img src={java} className='techImg'/>
                    <img src={aStudio} className='techImg'/>
                    <img src={fb} className='techImg'/>
                  </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${themeClasses[theme].dark} row-span-4 col-span-4 basic ${load ? 'moving-p2' : ''} transition-opacity duration-1000 ease ${isContentVisible ? 'opacity-100' : 'opacity-0'}
          
        mobile:mt-4 tablet:mt-0`}>
          <div className='text-black font-gilroy w-full h-full'>
            <div className='projectTopDiv'>
              <div className='projectHeadingDiv'>
                Ticketing App/ Jira Clone
              </div>
              <div className='projectLinkIcon'>
                <a href="https://github.com/rohan27hadvani/ticketing-app" target='_blank'>
                  <img src={carrow} alt="" className='h-12 hover:cursor-pointer hover:border-[0.5px] hover:border-black' />
                </a>
              </div>
            </div>
            <div className='h-2/3 px-4 pb-4 flex flex-col items-start justify-end'>
              <div className='projectDes'>
                Fully functional ticketing app made with Next.js, Tailwind CSS and MongoDB. Used Mongoose library to connect my app to Atlas Database.  
              </div>
              <div className='mobile:text-lg tablet:text-[15px] laptop:text-[20px] desktop:text-2xl'> 
                Tech Stack:
                  <div className='mobile:text-lg tablet:text-[15px] laptop:text-[20px] desktop:text-2xl flex'>
                    <img src={html} className='techImg'/>
                    <img src={css} className='techImg'/>
                    <img src={tw} className='techImg'/>
                    <img src={nxt} className='techImg'/>
                    <img src={mdb} className='techImg'/>
                  </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${themeClasses[theme].dark} row-span-4 col-span-2 basic ${load ? 'moving-p3' : ''} transition-opacity duration-1000 ease ${isContentVisible ? 'opacity-100' : 'opacity-0'}
          
        mobile:mt-4 tablet:mt-0`}>
          <div className='text-black font-gilroy w-full h-full'>
            <div className='projectTopDiv'>
              <div className='projectHeadingDiv'>
                Game of Blackjack
              </div>
              <div className='projectLinkIcon'>
                <a href="https://github.com/rohan27hadvani/Blackjack-Game" target='_blank'>
                  <img src={carrow} alt="" className='h-12 hover:cursor-pointer hover:border-[0.5px] hover:border-black' />
                </a>
              </div>
            </div>
            <div className='h-2/3 px-4 pb-4 flex flex-col items-start justify-end'>
              <div className='projectDes'>
                Created a Fun Blackjack game with the help of JavaScript and CSS.  
              </div>
              <div className='mobile:text-lg tablet:text-[15px] laptop:text-[20px] desktop:text-2xl'> 
                Tech Stack:
                  <div className='mobile:text-lg tablet:text-[15px] laptop:text-[20px] desktop:text-2xl flex'>
                    <img src={html} className='techImg'/>
                    <img src={css} className='techImg'/>
                    <img src={js} className='techImg' />
                  </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${themeClasses[theme].light} row-span-4 col-span-3 basic ${load ? 'moving-p4' : ''} transition-opacity duration-1000 ease ${isContentVisible ? 'opacity-100' : 'opacity-0'}
          
        mobile:mt-4 tablet:mt-0`}>
          <div className='text-black font-gilroy w-full h-full'>
            <div className='projectTopDiv'>
              <div className='projectHeadingDiv'>
                Private Bookmark (Chrome Extention)
              </div>
              <div className='projectLinkIcon'>
                <a href="https://github.com/rohan27hadvani/Private-Bookmark-Chrome-Ext" target='_blank'>
                  <img src={carrow} alt="" className='h-12 hover:cursor-pointer hover:border-[0.5px] hover:border-black' />
                </a>
              </div>
            </div>
            <div className='h-2/3 px-4 pb-4 flex flex-col items-start justify-end'>
              <div className='projectDes'>
                Basic JavaScript and CSS to create a Chrome Extention for storing URLs locally on you machine. 
              </div>
              <div className='mobile:text-lg tablet:text-[15px] laptop:text-[20px] desktop:text-2xl'> 
                Tech Stack:
                  <div className='mobile:text-lg tablet:text-[15px] laptop:text-[20px] desktop:text-2xl flex'>
                    <img src={html} className='techImg'/>
                    <img src={css} className='techImg'/>
                    <img src={js} className='techImg'/>
                  </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${themeClasses[theme].dark} row-span-3 col-span-4 basic ${load ? 'moving-p5' : ''} transition-opacity duration-1000 ease ${isContentVisible ? 'opacity-100' : 'opacity-0'}
          
        mobile:mt-4 tablet:mt-0`}>
          <div className='text-black font-gilroy w-full h-full'>
            <div className='projectTopDiv'>
              <div className='projectHeadingDiv'>
                Basic React Counter App
              </div>
              <div className='projectLinkIcon'>
                <a href="https://github.com/rohan27hadvani/React-Counter-App/tree/main" target='_blank'>
                  <img src={carrow} alt="" className='h-12 hover:cursor-pointer hover:border-[0.5px] hover:border-black' />
                </a>
              </div>
            </div>
            <div className='h-2/3 px-4 pb-4 flex flex-col items-start justify-end'>
              <div className='projectDes'>
                Used React with CSS to create a Counter used to increment as well as decrement a number.
              </div>
              <div className='mobile:text-lg tablet:text-[15px] laptop:text-[20px] desktop:text-2xl'> 
                Tech Stack:
                  <div className='mobile:text-lg tablet:text-[15px] laptop:text-[20px] desktop:text-2xl flex'>
                    <img src={html} className='techImg'/>
                    <img src={css} className='techImg'/>
                    <img src={react} className='techImg'/>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
