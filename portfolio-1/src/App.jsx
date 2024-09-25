// import { useState } from 'react'

import './App.css'
import './fonts.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div className="h-screen w-screen flex items-center justify-center p-4 bg-lightbg">
      <div className="relative w-full h-full ">
        <div className="grid grid-rows-8 grid-cols-9 h-full w-full gap-4">
          <div className="box-1 row-span-1 col-span-9 basic">
            <div className='text-black flex gap-2 font-gilroy uppercase text-2xl justify-start pl-8 w-full'>
            <div className='italic'>
              Rohan
            </div>
            <div className='font-semibold'>
              Hadvani
            </div>
            </div>
            <div>
            <li className='text-black flex gap-16 font-gilroy uppercase text-2xl justify-end pr-8 w-full'>
            <ul className='font-light'>
              Projects
            </ul>
            <ul className='font-light'>
              About
            </ul>
            <ul className='font-light'>
              Contact
            </ul>
            </li>
          </div>
          </div>




          <div className="box-1 row-span-4 col-span-4 basic">
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
          
          
          
          <div className="box-1 row-span-4 col-span-2 basic">
            3
          </div>


          <div className="box-1 row-span-6 col-span-3 basic">
            4
          </div>
          
          
          <div className="box-1 row-span-3 col-span-3 basic"> 
            <div className='text-black font-gilroy w-full h-1 pl-8 pr-10  font-light text-2xl'>
              Julia Huang is an innovative AI artist, renowned for blending cutting-edge technology with creative expression. Based in LA, she crafts unique digital art experiences accessible globally.
            </div>
          </div>
          <div className="bg-cream row-span-3 col-span-3 basic">6</div>
          <div className="box-1 row-span-1 col-span-3 basic">7</div>
        </div>
      </div>
    </div>
    </>
  );
}


   

export default App
