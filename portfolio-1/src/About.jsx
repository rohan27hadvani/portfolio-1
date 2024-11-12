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

      {/* Div 1 */}
      <div className="w-full h-full grid grid-rows-7 grid-cols-9 gap-4 box-border
      
      mobile:inline-block tablet:grid">
        <div className={`${themeClasses[theme].dark} row-span-3 col-span-6 basic ${load ? 'moving-p1' : ''} transition-opacity duration-1000 ease ${isContentVisible ? 'opacity-100' : 'opacity-0'}
          
        mobile:mt-4 tablet:mt-0`}>
          <div className='text-black font-gilroy w-full h-full'>
            <div className='flex w-full h-1/5'>
              <div className='w-full text-5xl px-6 pt-8
              
              mobile:text-4xl tablet:text-2xl tablet:pt-3 laptop:text-2xl laptop:pt-4 desktop:text-3xl desktop:pt-5 screen14:text-4xl screen14:pt-6 screen16:text-5xl screen16:pt-8'>
                A little bit about &apos;Who I am&apos;
              </div>
              
            </div>

            <div className='h-4/5 text-xl flex flex-col justify-end text-justify pb-8 px-6 
            
            mobile:pt-4 tablet:pt-0 tablet:text-[12px] tablet:leading-[22px] tablet:pb-3 laptop:text-[14px] laptop:leading-6 laptop:pb-4 desktop:text-lg desktop:leading-7 desktop:pb-5 screen14:text-xl screen14:pb-6 screen16:pb-8'>
            I&apos;ve been fascinated by technology from a young age, which led me to pursue front-end development and now back-end development as I aim to become a full-stack developer by year&apos;s end. Beyond coding, I&apos;ve had the privilege of playing football at the national level, which reflects my commitment both on and off the field. When I&apos;m not immersed in tech, I&apos;m reading fiction or non-fiction, traveling to explore new places, or capturing moments through photography. My passion for learning new coding languages and frameworks keeps me motivated to push the boundaries of what I can create.
            </div>

          </div>
        </div>

        {/* Div 2 */}
        <div className={`${themeClasses[theme].light} row-span-7 col-span-3 basic ${load ? 'moving-p2' : ''} transition-opacity duration-1000 ease ${isContentVisible ? 'opacity-100' : 'opacity-0'}
          
        mobile:mt-4 tablet:mt-0 `}>
          <div className='text-black font-gilroy w-full h-full px-6'>
            <div className='w-full h-[10%] text-5xl pt-8 
            
            mobile:text-4xl tablet:text-2xl tablet:pt-3 laptop:text-2xl laptop:pt-4 desktop:text-3xl desktop:pt-5 screen14:text-4xl screen14:pt-6 screen16:text-5xl screen16:pt-8'>
              Experience
            </div>
            
            <div className='h-[90%] flex flex-col justify-start items-center
            
            mobile:mt-0 tablet:-mt-1 desktop:mt-0'>

            <div className='tablet:scale-[0.7] tablet:-mt-[160px] tablet:w-[150%] laptop:scale-[0.68] laptop:-mt-[130px] laptop:w-[155%] desktop:scale-[0.85] desktop:w-[115%] desktop:-mt-[80px] screen14:scale-[0.975] screen14:w-[105%] screen14:-mt-[40px] screen16:scale-[1.025] screen16:w-[95%] screen16:-mt-[10px]'>

            <div className="relative pl-8 sm:pl-32 pt-4 group">
              <div className="font-semibold text-2xl uppercase mb-1
              
              mobile:text-xl mobile:pt-3 tablet:text-2xl">
                WriteSpace Infotech Private Limited
              </div>
              <div className="pt-3 flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-[130%] before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-black after:border-4 after:box-content after:white after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5
              
              ">
                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-sm font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-black bg-white rounded-full">
                  Present
                </time>
                <div className="text-xl font-semibold text-black">
                  SDE-2
                </div>
              </div>
              <div className="text-black">
                <div className='pt-1 font-semibold text-xl'>
                Client:- KINC Mineral Technologies Pvt Ltd
                </div>
                <div className='text-md text-justify'>
                I am developing an internal system to replace SAP, with modules for procurement, payroll (Axis Bank API), billing, and staff management.
                </div>
              </div>
            </div>
    

            <div className="relative pl-8 sm:pl-32 pt-3 group">
              <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-[100%] before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-black after:border-4 after:box-content after:white after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-sm font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-black bg-white rounded-full">
                  Dec, 2023
                </time>
                <div className="text-xl font-semibold text-black">
                  SDE-1
                </div>
              </div>
              
              <div className="text-black">
              <div className='pt-1 font-semibold text-xl'>
                Client:- Delta 9 Adventures   
              </div>
              <div className='text-md text-justify'>
              I built an online turf booking system using Google Calendar and Google Pay, now expanding to include more sports and maintenance scheduling. Also, developing a mobile app for easier access.
              </div>
              </div>

            </div>

            <div className="relative pl-8 sm:pl-32 group">
              <div className="pt-3 flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-[0%] before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-black after:border-4 after:box-content after:white after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-sm font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-black bg-white rounded-full">
                  June, 2021
                </time>
               </div>
            </div>



            <div className="relative pl-8 sm:pl-32 pt-6 group">
              <div className="font-semibold text-2xl uppercase mb-1 pt-4 sm:mb-0
              
              mobile:text-xl tablet:text-2xl">
                WriteSpace
              </div>
              <div className="pt-3 flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-[75%] before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-black after:border-4 after:box-content after:white after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-sm font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-black bg-white rounded-full">
                  Aug, 2021
                </time>
                <div className="pt-1 text-xl font-semibold text-black">
                  Software Developer Intern
                </div>
              </div>
              <div className="text-black text-md text-justify">
              Developed the full frontend, migrated from React to Next for better SEO, improved UI to boost traffic by 83%, made it mobile-friendly, and implemented Firebase for 3rd-party authentication.

                </div>
            </div>

            <div className="relative pl-8 sm:pl-32 group">
              <div className="pt-3 flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-none before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-black after:border-4 after:box-content after:white after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-sm font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-black bg-white rounded-full">
                  June, 2021
                </time>
               </div>
            </div>

             

            </div>
            </div>
          </div>
        </div>

        {/* Div 3 */}
        <div className={`${themeClasses[theme].dark} row-span-4 col-span-3 basic ${load ? 'moving-p4' : ''} transition-opacity duration-1000 ease ${isContentVisible ? 'opacity-100' : 'opacity-0'}
        
        mobile:mt-4 tablet:mt-0 tablet:order-4`}>
          <div className='text-black font-gilroy w-5/6 h-full pl-6'>
            <div className='w-full h-[15%] text-5xl  pt-8
            
            mobile:text-4xl tablet:text-2xl tablet:pt-3 laptop:pt-4 laptop:text-2xl desktop:pt-5 screen14:text-4xl screen14:pt-6 screen16:text-5xl screen16:pt-8'>
              Education
            </div>

            <div className='flex h-[85%] pb-8 flex-col justify-end
            
            tablet:pb-3 laptop:pb-4 desktop:pb-5 screen14:pb-6 screen16:pb-8'>
              <div className='w-full pt-4 tablet:w-[120%] laptop:w-[115%]'>
                <div className='font-semibold text-3xl tablet:text-xl laptop:text-2xl desktop:text-[26px] screen14:text-3xl'>
                  College:-
                </div>
                <div className='text-2xl pl-4 pt-2 tablet:text-lg laptop:text-xl desktop:text-[22px] screen14:text-2xl'>
                  Sardar Vallabhbhai Institute of Technology, Vasad
                </div>
                <div className='text-2xl pl-4 pt-2 tablet:text-lg laptop:text-xl desktop:text-[22px] screen14:text-2xl'>
                  (Affiliated with Gujarat Technological University)
                </div>
              </div>

              <div className='w-full pt-4'>
                <div className='font-semibold text-3xl tablet:text-xl laptop:text-2xl desktop:text-[26px] screen14:text-3xl'>
                  Grade:-
                </div>
                <div className='text-2xl pl-4 pt-2 tablet:text-lg laptop:text-xl desktop:text-[22px] screen14:text-2xl'>
                  8.29 CGPA
                </div>
              
            </div>
            </div>


          </div>
        </div>

        {/* Div 4 */}
        <div className={`${themeClasses[theme].light} row-span-4 col-span-3 basic ${load ? 'moving-p3' : ''} transition-opacity duration-1000 ease ${isContentVisible ? 'opacity-100' : 'opacity-0'}
          
        mobile:mt-4 tablet:mt-0`}>
          <div className='text-black font-gilroy w-full h-full'>
            <div className='flex w-full h-1/3 pt-8
            
            tablet:pt-3 laptop:pt-4 desktop:pt-5 screen14:pt-6 screen16:pt-8'>
              <div className='w-4/5 text-5xl pl-6
              
              mobile:text-4xl tablet:text-2xl laptop:text-2xl desktop:text-3xl screen14:text-4xl screen16:text-5xl'>
                My Amazon Author Page!
              </div>
              <div className='w-1/5 pr-6 flex justify-end'>
                <a href="https://www.amazon.com/stores/Mr.-Rohan-Suresh-Hadvani/author/B09FLDYMC5?ref=ap_rdr&isDramIntegrated=true&shoppingPortalEnabled=true" target='_blank'>
                  <img src={carrow} alt="" className='h-12 hover:cursor-pointer hover:border-[0.5px] hover:border-black' />
                </a>
              </div>
            </div>
            <div className='h-2/3 text-xl flex flex-col justify-end text-justify pb-8 px-6 
            
            mobile:pt-4 tablet:pt-0 tablet:text-[12px] tablet:leading-[22px] tablet:pb-3 laptop:text-[14px] laptop:leading-6 laptop:pb-4 desktop:text-lg desktop:leading-7 desktop:pb-5 screen14:text-xl screen14:pb-6 screen16:pb-8'>
            When I&apos;m not coding or designing dynamic websites, you&apos;ll find me lost in the world of writing. I&apos;ve published three books—two from my series Destiny of the Night and a standalone novella, Heaven & Earth. Storytelling is another creative outlet where I explore my love for building characters and plots.
            </div>
          </div>
        </div>


        
      </div>
    </div>
  );
}



export default About;
