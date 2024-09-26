import { useState, useEffect } from 'react';  // Import useEffect

import './App.css'
import './fonts.css'
import './animation.css'
import profilePhoto from './assets/profilePhoto.jpg';

function App() {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(true);
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <div className="h-screen w-screen p-4 bg-bg1">
        <div className="w-full h-full">
          <div className="grid grid-rows-8 grid-cols-9 h-full w-full gap-4">
          
            <div className={`box-1 row-span-1 col-span-9 basic ${load ? 'moving-1' : ''}`}>
              <div className='text-black flex gap-2 font-gilroy uppercase text-2xl justify-start pl-8 w-2/3 items-center'>
                <div className='italic'>
                  Rohan
                </div>
                <div className='font-semibold'>
                  Hadvani
                </div>
              </div>
              <div className='w-1/3 flex items-center'>
                <li className='text-black flex justify-around font-gilroy uppercase text-2xl w-full'>
                  <ul className='font-light hover:underline'>
                    Projects
                  </ul>
                  <ul className='font-light hover:underline'>
                    About
                  </ul>
                  <ul className='font-light hover:underline'>
                    Contact
                  </ul>
                </li>
              </div>
            </div>
            

            <div className={`box-1 row-span-4 col-span-4 basic ${load ? 'moving-2' : ''}`}>
              <div className='text-black font-gilroy text-xl w-full h-full'>
                <div className='h-1/4 w-full text-right p-8'>
                  Test
                </div>
                <div className='w-full h-3/4 flex justify-end flex-grow flex-col gap-4 text-5xl pl-6 pb-[60px]'>
                  <div className='font-bold'>
                    Full-Stack Developer
                  </div> 
                  <div className='font-bold'>
                    Thriving Author
                  </div> 
                  <div>
                    Sports Enthusiast
                  </div> 
                  <div className='font-bold'>
                    College Drop-out
                  </div> 
                </div>
              </div>
            </div>

            <div className={`box-1-image row-span-4 col-span-2 basic ${load ? 'moving-3' : ''}`}>
              <div className='w-full h-full'>
              <img className='rounded-3xl object-cover w-full h-full' src={profilePhoto} alt="Profile Photo"/>
              </div>
            </div>

            <div className={`box-1 row-span-6 col-span-3 basic ${load ? 'moving-4' : ''}`}>
              <div>
              
              </div>
            </div>

            <div className={`box-1 row-span-3 col-span-3 basic ${load ? 'moving-5' : ''}`}> 
              <div className='text-black font-gilroy font-light pl-6'>
              <div className='flex align-top h-1/3 pt-8'>
                Test
              </div>
              <section className='flex items-end h-2/3 w-5/6 text-2xl pb-8'>
                  Julia Huang is an innovative AI artist, renowned for blending cutting-edge technology with creative expression. Based in LA, she crafts unique digital art experiences accessible globally.
              </section>
              </div>
            </div>


            <div className={`bg-dark1 row-span-3 col-span-3 basic ${load ? 'moving-6' : ''}`}>
              <div className='text-black font-gilroy w-full h-full'>
                <div className='flex w-full h-4/5'>
                <div className='w-2/5 text-xl pl-6 pt-8'>
                Have some questions?
                </div>
                <div className='w-3/5 pr-6 pt-8 text-right'>
                  Test
                </div>
                </div>
                <div className='h-1/5 text-5xl pl-6 pb-8'>
                  Contact me
                </div>
              </div>
            </div>

            <div className={`box-1 row-span-1 col-span-3 basic ${load ?     'moving-7' : ''}`}>
              <div className='w-full h-full flex items-center'>
                <ul className='text-black flex justify-around font-gilroy uppercase text-2xl w-full'>
                  <li className='font-light hover:underline'>
                    <a href="https://www.instagram.com/rohanhadvani/" target="_blank">
                      Instagram
                    </a>
                  </li>
                  <li className='font-light hover:underline'>
                    <a href="https://www.linkedin.com/in/rohan-hadvani-aa159b153/" target='_blank'>
                      LinkedIn
                    </a>
                  </li>
                  <li className='font-light hover:underline'>
                    <a href="https://github.com/rohan27hadvani" target='_blank'>
                      GitHub
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
