import { useState, useEffect } from 'react';  // Import useEffect

import './App.css'
import './fonts.css'
import './animation.css'

function App() {
  const [div1, setDiv1] = useState(false);
  const [div2, setDiv2] = useState(false);
  const [div3, setDiv3] = useState(false);
  const [div4, setDiv4] = useState(false);
  const [div5, setDiv5] = useState(false);
  const [div6, setDiv6] = useState(false);
  const [div7, setDiv7] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setDiv1(true);
    }, 100);

    const timer2 = setTimeout(() => {
      setDiv2(true);
    }, 100);

    const timer3 = setTimeout(() => {
      setDiv3(true);
    }, 100);

    const timer4 = setTimeout(() => {
      setDiv4(true);
    }, 100);

    const timer5 = setTimeout(() => {
      setDiv5(true);
    }, 100);
    
    const timer6 = setTimeout(() => {
      setDiv6(true);
    }, 100);

    const timer7 = setTimeout(() => {
      setDiv7(true);
    }, 100);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
      clearTimeout(timer6);
      clearTimeout(timer7);
    };
  }, []);

  return (
    <>
      <div className="h-screen w-screen flex items-center justify-center p-4 bg-lightbg">
        <div className="relative w-full h-full ">
          <div className="grid grid-rows-8 grid-cols-9 h-full w-full gap-4">
          
            <div className={`box-1 row-span-1 col-span-9 basic ${div1 ? 'moving-1' : ''}`}>
              <div className='text-black flex gap-2 font-gilroy uppercase text-2xl justify-start pl-8 w-full'>
                <div className='italic'>
                  Rohan
                </div>
                <div className='font-semibold'>
                  Hadvani
                </div>
              </div>
              <div className='w-1/3 pr-12'>
                <li className='text-black flex gap-16 font-gilroy uppercase text-2xl'>
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
            

            <div className={`box-1 row-span-4 col-span-4 basic ${div2 ? 'moving-2' : ''}`}>
              <div className='text-black font-gilroy text-6xl w-full pl-8 h-1/5'>
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

            <div className={`box-1 row-span-4 col-span-2 basic ${div3 ? 'moving-3' : ''}`}>
              3
            </div>

            <div className={`box-1 row-span-6 col-span-3 basic ${div4 ? 'moving-4' : ''}`}>
              4
            </div>

            <div className={`box-1 row-span-3 col-span-3 basic ${div5 ? 'moving-5' : ''}`}> 
              <div className='text-black font-gilroy w-full h-1 pl-8 pr-10 font-light text-2xl'>
                <section>
                  Julia Huang is an innovative AI artist, renowned for blending cutting-edge technology with creative expression. Based in LA, she crafts unique digital art experiences accessible globally.
                </section>
              </div>
            </div>

            <div className={`bg-cream row-span-3 col-span-3 basic ${div6 ? 'moving-6' : ''}`}>
              6
            </div>

            <div className={`box-1 row-span-1 col-span-3 basic ${div7 ? 'moving-7' : ''}`}>
              <div>
                <li className='text-black flex gap-16 font-gilroy uppercase text-2xl w-full'>
                  <ul className='font-light hover:underline'>
                    <a href="https://www.instagram.com/rohanhadvani/" target="_blank">
                      Instagram
                    </a>
                  </ul>
                  <ul className='font-light hover:underline'>
                    <a href="https://www.linkedin.com/in/rohan-hadvani-aa159b153/" target='_blank'>
                      LinkedIn
                    </a>
                  </ul>
                  <ul className='font-light hover:underline'>
                    <a href="https://github.com/rohan27hadvani" target='_blank'>
                      GitHub
                    </a>
                  </ul>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
