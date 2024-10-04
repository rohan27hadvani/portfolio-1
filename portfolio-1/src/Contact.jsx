import { useEffect, useState } from 'react';
// import carrow from './assets/icons/carrow.svg';
import './App.css';
import './fonts.css';
import './animation.css';
import GH from './assets/icons/GitHub.svg';
import insta from './assets/icons/Insta.svg';
import LI from './assets/icons/LinkedIn.svg';
import Email from './assets/icons/Email.svg';
import Download from './assets/icons/Download.svg';
import share from './assets/icons/Share.svg';

function Contact() {
  const [load, setLoad] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [theme] = useState(() => {
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


        <div className={`${themeClasses[theme].light} row-span-3 col-span-2 basic ${load ? 'moving-p1' : ''} transition-opacity duration-1000 ease ${isContentVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className='text-black font-gilroy w-full h-full'>
            <div className='flex flex-col place-items-center text-center w-full h-full'>
              <div className='h-3/5 w-4/5 text-4xl flex items-center'>
                Download My Latest Resume!
              </div>
              <div className='h-2/5 flex items-center'>
                <a href="">
                  <img src={Download} alt="Download" className='h-12 hover:cursor-pointer hover:border-[0.5px] hover:border-black' />
                </a>
              </div>
            </div>
          </div>
        </div>


        <div className={`${themeClasses[theme].light} row-span-1 col-span-5 basic ${load ? 'moving-p3' : ''} transition-opacity duration-1000 ease ${isContentVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className='w-full h-full content-center text-center text-4xl font-gilroy text-black'>
            Feel Free To Contact Me!
          </div>
        </div>

        <div className={`${themeClasses[theme].light} row-span-7 col-span-2 basic ${load ? 'moving-p5' : ''} transition-opacity duration-1000 ease ${isContentVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className='text-black font-gilroy w-full h-full'>
            <div className='flex w-full h-full place-items-center'>
              <div className='w-full px-5 text-center text-4xl'>
                I do not know what to do with this space right now....
              </div>
              
            </div>
            
          </div>
        </div>

        {/* <div className={`${themeClasses[theme].light} row-span-7 col-span-2 basic ${load ? 'moving-p5' : ''} transition-opacity duration-1000 ease ${isContentVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className='text-black font-gilroy w-full h-full'>
            <div className='flex w-full h-2/3'>
              <div className='w-2/5 text-4xl pl-6 pt-8'>
                Have some questions?
              </div>
              <div className='w-3/5 pr-6 pt-8 flex justify-end'>
                <img src={carrow} alt="Arrow" className='h-12 hover:cursor-pointer hover:border-[0.5px] hover:border-black' />
              </div>
            </div>
            <div className='h-1/3 text-2xl pl-6'>
              Contact me
            </div>
          </div>
        </div> */}

        <div className={`${themeClasses[theme].light} row-span-6 col-span-5 basic ${load ? 'moving-p4' : ''} transition-opacity duration-1000 ease ${isContentVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className='text-black font-gilroy w-full h-full flex items-center justify-center'>
            <div className='flex flex-col justify-center h-full py-8'> {/* Added flex column and vertical padding */}
              <ul className='grid grid-cols-2 gap-y-[200px] gap-x-[200px] w-full items-center justify-items-center'>
                <li className='flex justify-center items-center'>
                  <a href="mailto:rohan.hadvani0@gmail.com" target="_blank" rel="noopener noreferrer">
                    <img src={Email} alt="Email" className="h-[125px] w-[125px]" />
                  </a>
                </li>
                <li className='flex justify-center items-center'>
                  <a href="https://www.instagram.com/rohanhadvani/" target="_blank" rel="noopener noreferrer">
                    <img src={insta} alt="Instagram" className="h-[100px] w-[100px]" />
                  </a>
                </li>
                <li className='flex justify-center items-center'>
                  <a href="https://www.linkedin.com/in/rohan-hadvani-aa159b229/" target="_blank" rel="noopener noreferrer">
                    <img src={LI} alt="LinkedIn" className="h-[140px] w-[140px]" />
                  </a>
                </li>
                <li className='flex justify-center items-center font-light hover:underline'>
                  <a href="https://github.com/rohan27hadvani" target='_blank' rel="noopener noreferrer">
                    <img src={GH} alt="GitHub" className="h-[100px] w-[100px]" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>


        <div className={`${themeClasses[theme].light} row-span-4 col-span-2 basic ${load ? 'moving-p2' : ''} transition-opacity duration-1000 ease ${isContentVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className='text-black font-gilroy w-full h-full'>
            <div className='flex flex-col place-items-center text-center w-full h-full'>
              <div className='w-full h-1/2 pr-6 pt-8 flex justify-end'>
                <a href="">
                  <img src={share} alt="Share" className='h-12 hover:cursor-pointer hover:border-[0.5px] hover:border-black' />
                </a>
              </div>
              <div className='w-3/4 h-1/2 text-4xl inline-block align-bottom'>
                Share Portfolio with others!
              </div>
            </div>
          </div>
        </div>

      </div> 
    </div> 
  );
}

export default Contact;