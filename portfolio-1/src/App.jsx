// App.jsx
import { useState, useEffect } from 'react';
import './App.css';
import './fonts.css';
import './animation.css';
import profilePhoto from './assets/profilePhoto.JPG';
import ProgressBar from './progressBar.jsx';
import ThemeButton from './themeButton.jsx';
import c from './assets/icons/C.ico';
import cpp from './assets/icons/C++.svg';
import html from './assets/icons/HTML.svg'
import css from './assets/icons/CSS.svg'
import js from './assets/icons/JS.svg'
import ts from './assets/icons/TS.svg'
import tw from './assets/icons/Tailwind.svg'
import py from './assets/icons/Python.svg'
import nxt from './assets/icons/Next.svg'
import node from './assets/icons/Node.svg'
import dnet from './assets/icons/Dotnet.svg'
import react from './assets/icons/React.svg'
import carrow from './assets/icons/carrow.svg'
import circle from './assets/icons/Random Circle.svg'
import GH from './assets/icons/GitHub.svg'
import insta from './assets/icons/Insta.svg'
import LI from './assets/icons/LinkedIn.svg'

function App() {
  const [load, setLoad] = useState(false);
  const [theme, setTheme] = useState('theme1');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(true);
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

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
    <>
      <div className={`h-screen w-screen p-4 ${themeClasses[theme].bg}`}>
        <div className="w-full h-full">
          <div className="grid grid-rows-8 grid-cols-9 h-full w-full gap-4">
          
            <div className={`${themeClasses[theme].light} row-span-1 col-span-9 basic ${load ? 'moving-1' : ''}`}>
              <div className='text-black flex gap-3 font-gilroy uppercase text-3xl justify-start pl-8 w-2/3 items-center'>
                <div className='italic'>
                  Rohan
                </div>
                <div className='font-semibold'>
                  Hadvani
                </div>
              </div>
              <div className='w-1/3 flex items-center'>
                <li className='text-black flex justify-around font-gilroy uppercase text-2xl w-full'>
                  <ul className='font-light hover:underline hover:cursor-pointer'>
                    Projects
                  </ul>
                  <ul className='font-light hover:underline hover:cursor-pointer'>
                    About
                  </ul>
                  <ul className='font-light hover:underline hover:cursor-pointer'>
                    Contact
                  </ul>
                </li>
              </div>
            </div>
            
            <div className={`${themeClasses[theme].light} row-span-4 col-span-4 basic ${load ? 'moving-2' : ''}`}>
              <div className='text-black font-gilroy text-xl w-full h-full'>
                <div className='w-full h-full flex justify-end flex-grow flex-col gap-4 text-5xl pl-6 pb-[60px]'>
                  <div className='font-bold'>
                    Front-End Developer
                  </div> 
                  <div className='font-bold'>
                    Thriving Author
                  </div> 
                  <div>
                    Sports Enthusiast
                  </div> 
                  <div className='font-bold'>
                    Curious Geroger
                  </div> 
                </div>
              </div>
            </div>

            <div className={`box-1-image row-span-4 col-span-2 basic ${load ? 'moving-3' : ''}`}>
              <div className='w-full h-full'>
              <img className='rounded-3xl object-cover w-full h-full' src={profilePhoto} alt="Profile Photo"/>
              </div>
            </div>

            <div className={`${themeClasses[theme].light} row-span-6 h-full flex flex-col col-span-3 basic ${load ? 'moving-4' : ''}`}>
              <div className='flex flex-row justify-around w-full h-5/6'>
                <div className='progressBar justify-around w-full h-full'>
                  <div>
                   <ProgressBar strokeDashoffset="10" theme={themeClasses[theme]} imageSrc={html} /> {/* Pass the theme and image */}
                  </div>
                  <div>
                    <ProgressBar strokeDashoffset="10" theme={themeClasses[theme]} imageSrc={tw}/> {/* Pass the theme */}
                  </div>
                  <div>
                    <ProgressBar strokeDashoffset="25" theme={themeClasses[theme]} imageSrc={react}/> {/* Pass the theme */}
                  </div>
                  <div>
                    <ProgressBar strokeDashoffset="40" theme={themeClasses[theme]} imageSrc={c}/> {/* Pass the theme */}
                  </div>
                </div>
                <div className='progressBar'>
                  <div>
                    <ProgressBar strokeDashoffset="10" theme={themeClasses[theme]} imageSrc={css}/> {/* Pass the theme */}
                  </div>
                  <div>
                    <ProgressBar strokeDashoffset="30" theme={themeClasses[theme]} imageSrc={ts}/> {/* Pass the theme */}
                  </div>
                  <div>
                    <ProgressBar strokeDashoffset="60" theme={themeClasses[theme]} imageSrc={nxt}/> {/* Pass the theme */}
                  </div>
                  <div>
                    <ProgressBar strokeDashoffset="50" theme={themeClasses[theme]} imageSrc={cpp}/> {/* Pass the theme */}
                  </div>
                </div>
                <div className='progressBar'>
                  <div>
                    <ProgressBar strokeDashoffset="20" theme={themeClasses[theme]} imageSrc={js}/> {/* Pass the theme */}
                  </div>
                  <div>
                    <ProgressBar strokeDashoffset="40" theme={themeClasses[theme]} imageSrc={dnet}/> {/* Pass the theme */}
                  </div>
                  <div>
                    <ProgressBar strokeDashoffset="40" theme={themeClasses[theme]} imageSrc={node}/> {/* Pass the theme */}
                  </div>
                  <div>
                    <ProgressBar strokeDashoffset="30" theme={themeClasses[theme]} imageSrc={py}/> {/* Pass the theme */}
                  </div>
                </div>
              </div>
              <div className='w-full flex justify-around text-2xl items-center h-1/5 font-gilroy'>
                <ThemeButton handleThemeChange={handleThemeChange} currentTheme={theme} /> {/* Pass handleThemeChange and currentTheme */}
              </div>
            </div>

            <div className={`${themeClasses[theme].dark} row-span-3 col-span-3 basic ${load ? 'moving-5' : ''}`}> 
              <div className='text-black font-gilroy font-light pl-6'>
              <div className='flex align-top h-1/3 pt-8'>
                <img src={circle} alt="" className='h-1/2'/>
              </div>
              <section className='flex items-end h-2/3 w-5/6 text-[20px] pb-8'>
              Passionate front-end developer focused on creating dynamic, user-friendly websites. Always eager to learn more, I’m expanding my skills into full-stack and mobile app development to craft versatile digital solutions.
              </section>
              </div>
            </div>

            <div className={`${themeClasses[theme].light} row-span-3 col-span-3 basic ${load ? 'moving-6' : ''}`}>
              <div className='text-black font-gilroy w-full h-full'>
                <div className='flex w-full h-4/5'>
                <div className='w-2/5 text-xl pl-6 pt-8'>
                Have some questions?
                </div>
                <div className='w-3/5 pr-6 pt-8 flex justify-end'>
                  <img src={carrow} alt="" className='h-12 hover:cursor-pointer hover:border-[0.5px] hover:border-black'/>
                </div>
                </div>
                <div className='h-1/5 text-5xl pl-6 pb-8'>
                  Contact me
                </div>
              </div>
            </div>

            <div className={`${themeClasses[theme].dark} row-span-1 col-span-3 basic ${load ? 'moving-7' : ''}`}>
              <div className='w-full h-full flex items-center'>
                <ul className='text-black flex justify-around uppercase w-full'>
                  <li>
                    <a href="https://www.instagram.com/rohanhadvani/" target="_blank">
                      <img src={insta} alt="Instagram" className="h-12 w-12" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/rohan-hadvani-aa159b153/" target='_blank'>
                      <img src={LI} alt="LinkedIn" className="h-14 w-14" />
                    </a>
                  </li>
                  <li className='font-light hover:underline'>
                    <a href="https://github.com/rohan27hadvani" target='_blank'>
                      <img src={GH} alt="GitHub" className="h-12 w-12" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
