import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './App.css';
import './fonts.css';
import './animation.css';
import ProfilePhoto from './assets/profilePhoto.JPG';
import ProgressBar from './progressBar.jsx';
import ThemeButton from './themeButton.jsx';
import Navbar from './Navbar.jsx';

import Projects from './Projects.jsx'; 
import About from './About.jsx';
import Contact from './Contact.jsx';

import c from './assets/icons/C.ico';
import cpp from './assets/icons/C++.svg';
import html from './assets/icons/HTML.svg';
import css from './assets/icons/CSS.svg';
import js from './assets/icons/JS.svg';
import ts from './assets/icons/TS.svg';
import tw from './assets/icons/Tailwind.svg';
import py from './assets/icons/Python.svg';
import nxt from './assets/icons/Next.svg';
import node from './assets/icons/Node.svg';
// import dnet from './assets/icons/Dotnet.svg';
import react from './assets/icons/React.svg';
import carrow from './assets/icons/carrow.svg';
import circle from './assets/icons/Random Circle.svg';
import GH from './assets/icons/GitHub.svg';
import insta from './assets/icons/Insta.svg';
import LI from './assets/icons/LinkedIn.svg';
import aStudio from './assets/icons/AStudio.svg'

function App() {
  const [load, setLoad] = useState(false);
  
  const [theme, setTheme] = useState(() => {
    // Check localStorage for theme on initial load
    return localStorage.getItem('selectedTheme') || 'theme1';
  });

  // Using useEffect to set loading state
  useEffect(() => {
    setLoad(true); // Set load to true to indicate all components are ready
  }, []);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('selectedTheme', newTheme);  // Save theme to localStorage
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
    <Router>
      {/* Home Page */}
      <div className={`mobile:h-full mobile:w-full tablet:h-screen tablet:w-screen p-4 ${themeClasses[theme].bg}`}>
        <div className="w-full h-full">
          <div className="grid grid-rows-8 grid-cols-9 h-full w-full gap-4 
          
          mobile:inline-block tablet:grid">
            <Navbar theme={themeClasses[theme]} load={load} />
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    {/* Profile Section */}
                    <div className={`${themeClasses[theme].light} row-span-4 col-span-4 basic ${load ? 'moving-2' : ''}
                      
                    mobile:mt-4 tablet:mt-0 `}>
                      <div className='text-black font-gilroy w-full h-full'>
                        <div className='w-full h-full flex justify-end flex-col gap-4 text-5xl
                        
                        mobile:pb-2 mobile:pt-8 mobile:gap-0 mobile:pl-4 tablet:pl-6 tablet:pb-6 laptop:gap-3 desktop:gap-2 screen14:gap-4'>
                          <div className='font-bold 
                          
                          mobile:text-3xl tablet:text-[25px] laptop:text-4xl screen14:text-5xl'>
                            Front-End Developer
                          </div> 
                          <div className='font-bold 
                          
                          mobile:text-3xl tablet:text-[25px] laptop:text-4xl screen14:text-5xl'>
                            Thriving Author
                          </div> 
                          <div className='
                          
                          mobile:text-3xl tablet:text-[25px] laptop:text-4xl screen14:text-5xl'>
                            Sports Enthusiast
                          </div> 
                          <div className='font-bold 
                          
                          mobile:text-3xl tablet:text-[25px] laptop:text-4xl screen14:text-5xl'>
                            Curious Geroger
                          </div> 
                        </div>
                      </div>
                    </div>

                    {/* Profile Photo */}
                    <div className={`box-1-image row-span-4 col-span-2 basic ${load ? 'moving-3' : ''}
                      
                    mobile:mt-4 tablet:mt-0 `}>
                      <div className='mobile:w-full mobile:h-[500px] tablet:w-full tablet:h-full'>
                        <img className='rounded-3xl object-cover w-full h-full' src={ProfilePhoto} alt="Profile Photo"/>
                      </div>
                    </div>

                    {/* Skills Progress Bars */}
                    <div className={`${themeClasses[theme].light} row-span-6 w-full h-full flex flex-col col-span-3 basic ${load ? 'moving-4' : ''}
                      
                    mobile:mt-4 tablet:mt-0 mobile:h-[600px] tablet:h-full`}>
                      <div className='w-full h-5/6 flex flex-row align-top justify-center
                      
                      mobile:scale-[0.7] mobile:-mt-[45px]
                      
                      screen14:scale-[0.80] screen14:-mt-12 screen14:gap-x-4 screen16:scale-100 screen16:mt-3 desktop:scale-[0.8] desktop:-mt-10 laptop:scale-[0.6] laptop:-mt-[60px] tablet:-mt-[95px] tablet:scale-[0.45]'>
                        <div className='progressBar laptop:gap-y-[60px] screen14:gap-y-[50px] desktop:gap-y-6 tablet:gap-y-[100px]'>
                          <div>
                            <ProgressBar strokeDashoffset="10" theme={themeClasses[theme]} imageSrc={html} />
                          </div>
                          <div>
                            <ProgressBar strokeDashoffset="10" theme={themeClasses[theme]} imageSrc={tw}/>
                          </div>
                          <div>
                            <ProgressBar strokeDashoffset="25" theme={themeClasses[theme]} imageSrc={react}/>
                          </div>
                          <div>
                            <ProgressBar strokeDashoffset="40" theme={themeClasses[theme]} imageSrc={c}/>
                          </div>
                        </div>
                        <div className='progressBar laptop:gap-y-[60px] screen14:gap-y-[50px] desktop:gap-y-6 tablet:gap-y-[100px]'>
                          <div>
                            <ProgressBar strokeDashoffset="10" theme={themeClasses[theme]} imageSrc={css}/>
                          </div>
                          <div>
                            <ProgressBar strokeDashoffset="30" theme={themeClasses[theme]} imageSrc={ts}/>
                          </div>
                          <div>
                            <ProgressBar strokeDashoffset="60" theme={themeClasses[theme]} imageSrc={nxt}/>
                          </div>
                          <div>
                            <ProgressBar strokeDashoffset="50" theme={themeClasses[theme]} imageSrc={cpp}/>
                          </div>
                        </div>
                        <div className='progressBar laptop:gap-y-[60px] screen14:gap-y-[50px] desktop:gap-y-6 tablet:gap-y-[100px]'>
                          <div>
                            <ProgressBar strokeDashoffset="20" theme={themeClasses[theme]} imageSrc={js}/>
                          </div>
                          <div>
                            <ProgressBar strokeDashoffset="20" theme={themeClasses[theme]} imageSrc={aStudio}/>
                          </div>
                          <div>
                            <ProgressBar strokeDashoffset="40" theme={themeClasses[theme]} imageSrc={node}/>
                          </div>
                          <div>
                            <ProgressBar strokeDashoffset="30" theme={themeClasses[theme]} imageSrc={py}/>
                          </div>
                        </div>
                      </div>
                      <div className='w-full flex justify-around text-2xl items-center h-1/5 font-gilroy 
                      
                      mobile:mt-10
                      
                      screen14:mt-12 screen16:mt-[70px] screen16:text-3xl desktop:mt-4 laptop:mt-[60px] laptop:scale-105 tablet:scale-75 tablet:mt-[80px] screen14:text-3xl'>
                        <ThemeButton handleThemeChange={handleThemeChange} currentTheme={theme} />
                      </div>
                    </div>

                    <div className={`${themeClasses[theme].dark} row-span-3 col-span-3 basic ${load ? 'moving-5' : ''}
                      
                    mobile:mt-4 tablet:mt-0 mobile:h-[350px]
                    tablet:h-full tablet:w-full`}> 
                      <div className='text-black font-gilroy font-light px-6'>
                        <div className='flex align-top h-1/3 pt-8 
                        
                        mobile:scale-[0.8] mobile:-ml-[40px] mobile:-mt-4

                        desktop:scale-95 desktop:-ml-2 laptop:scale-90 laptop:-ml-4 screen16:scale-110 screen16:ml-7 tablet:pt-6 tablet:-ml-[20px] tablet:mt-1'>
                          <img src={circle} alt="" className='h-1/2'/>
                        </div>
                        <section className='flex items-end h-2/3 w-full text-[20px] pb-8 text-justify 
                        
                        mobile:mt-2
                        
                        laptop:text-[17px] laptop:mt-3 desktop:text-[19px] screen14:text-[22px] screen16:text-[26px] screen16:mt-2 tablet:text-[12px]'>
                          Passionate front-end developer focused on creating dynamic, user-friendly websites. Always eager to learn more, I&apos;m expanding my skills into full-stack and mobile app development to craft versatile digital solutions.
                        </section>
                      </div>
                    </div>

                    <div className={`${themeClasses[theme].light} row-span-3 col-span-3 basic ${load ? 'moving-6' : ''}
                      
                    mobile:mt-4 tablet:mt-0 `}>
                      <div className='text-black font-gilroy w-full h-full'>
                        <div className='flex w-full h-3/5'>
                          <div className='w-2/5 text-xl pl-6 pt-8 
                          
                          laptop:text-[20px] tablet:text-[12px] tablet:leading-5 tablet:pt-6 desktop:text-[22px] desktop:leading-7 screen14:text-[24px]'>Have some questions?</div>
                          <div className='w-3/5 pr-6 pt-8 tablet:pt-6 tablet:pr-4 flex justify-end'>
                            <Link to="/Contact">
                              <img src={carrow} alt="" className='h-12 hover:cursor-pointer hover:border-[0.5px] hover:border-black 
                              
                              laptop:scale-90 screen16:scale-110 tablet:scale-[0.6]'/>
                            </Link>
                          </div>
                        </div>
                        <div className='h-2/5 flex justify-end flex-col text-5xl pl-6 pb-8 
                        
                        mobile:mt-[60px] tablet:text-3xl tablet:mt-4 laptop:text-4xl screen16:text-6xl'>Contact me</div>
                      </div>
                    </div>

                    <div className={`${themeClasses[theme].dark} row-span-1 col-span-3 basic ${load ? 'moving-7' : ''}
                      
                    mobile:mt-4 tablet:mt-0 `}>
                      <div className='w-full h-full flex items-center'>
                        <ul className='text-black flex items-center justify-around w-full'>
                          <li>
                            <a href="https://www.instagram.com/rohanhadvani/" target="_blank" rel="noopener noreferrer">
                              <img src={insta} alt="Instagram" className="h-12 w-12
                              
                              tablet:scale-[0.6] laptop:scale-[0.8] desktop:scale-90 screen14:scale-110" />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.linkedin.com/in/rohan-hadvani-aa159b229/" target="_blank" rel="noopener noreferrer">
                              <img src={LI} alt="LinkedIn" className="h-[74px] w-[74px]
                              
                              tablet:scale-[0.6] laptop:scale-[0.8] desktop:scale-90 screen14:scale-110" />
                            </a>
                          </li>
                          <li className='font-light hover:underline'>
                            <a href="https://github.com/rohan27hadvani" target='_blank' rel="noopener noreferrer">
                              <img src={GH} alt="GitHub" className="h-14 w-14
                              
                              tablet:scale-[0.6] laptop:scale-[0.8] desktop:scale-90 screen14:scale-110" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </>
                }
              />
              {/* Define other routes */}
              <Route path="/Projects" element={<Projects theme={themeClasses[theme]} load={load} />} />
              <Route path="/About" element={<About theme={themeClasses[theme]} load={load} />} />
              <Route path="/Contact" element={<Contact theme={themeClasses[theme]} load={load} />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
