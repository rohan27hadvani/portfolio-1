import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

  const copyLinkToClipboard = () => {
    const websiteURL = "https://rohanhadvani.xyz";
    navigator.clipboard.writeText(websiteURL)
      .then(() => {
        toast.success("Link copied to clipboard!", {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
        });
      })
      .catch((err) => {
        console.error("Failed to copy link: ", err);
        toast.error("Failed to copy the link", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
        });
      });
  };

  const downloadResume = () => {
    const resumeURL = "https://drive.google.com/uc?export=download&id=1B2r980K7EoixC9wNU52kEL3Jzrufu2eI";
    try {
      const link = document.createElement("a"); // Create a hidden <a> element
      link.href = resumeURL;
      link.download = "Rohan_Hadvani_Resume.pdf"; // Optional custom file name
      document.body.appendChild(link); // Append <a> to the DOM
      link.click(); // Trigger the download
      document.body.removeChild(link); // Clean up by removing the <a> element
  
      // Success toast
      toast.success("Resume downloaded successfully!", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
      });
    } catch (err) {
      console.error("Failed to download resume: ", err);
  
      // Error toast
      toast.error("Failed to download resume", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
      });
    }
  };
  

  return (
    <div className={`row-span-7 col-span-9 ${themeClasses[theme].bg}`}>
      <div className="w-full h-full grid grid-rows-7 grid-cols-9 gap-4 box-border
      mobile:inline-block tablet:grid">

        <div className={`${themeClasses[theme].light} row-span-3 col-span-2 basic ${load ? 'moving-p1' : ''} transition-opacity duration-1000 ease ${isContentVisible ? 'opacity-100' : 'opacity-0'} order-1
        mobile:mt-4 mobile:py-8 tablet:mt-0 tablet:py-0`}>
          <div className='text-black font-gilroy w-full h-full'>
            <div className='flex flex-col place-items-center text-center w-full h-full'>
              <div className='h-3/5 w-4/5 text-4xl flex items-center'>
                Download My Latest Resume!
              </div>
              <div className='h-2/5 flex items-center mobile:mt-10 tablet:mt-0'>
                <img 
                  src={Download} 
                  alt="Download" 
                  className='h-12 hover:cursor-pointer hover:border-[0.5px] hover:border-black' 
                  onClick={downloadResume} 
                />
              </div>
            </div>
          </div>
        </div>

        <div className={`${themeClasses[theme].dark} row-span-1 col-span-5 basic ${load ? 'moving-p3' : ''} transition-opacity duration-1000 ease ${isContentVisible ? 'opacity-100' : 'opacity-0'} order-2
        mobile:mt-4 mobile:p-4 tablet:mt-0 tablet:p-0`}>
          <div className='w-full h-full flex text-center items-center justify-center text-4xl font-gilroy text-black'>
            Feel Free To Contact Me!
          </div>
        </div>

        <div className={`${themeClasses[theme].light} row-span-6 col-span-5 basic ${load ? 'moving-p4' : ''} transition-opacity duration-1000 ease ${isContentVisible ? 'opacity-100' : 'opacity-0'} order-4
        mobile:mt-4 tablet:mt-0`}>
          <div className='text-black font-gilroy w-full h-full flex items-center justify-center'>
            <div className='flex flex-col justify-center h-full py-8'> 
              <ul className='grid grid-cols-2 w-full items-center justify-items-center
              mobile:inline-block tablet:grid tablet:gap-y-[95px] tablet:gap-x-[95px] desktop:gap-y-[200px] desktop:gap-x-[200px]'>
                <li className='flex justify-center items-center'>
                  <a href="mailto:rohan.hadvani0@gmail.com" target="_blank" rel="noopener noreferrer">
                    <img src={Email} alt="Email" className="h-[125px] w-[125px]
                    mobile:scale-75 tablet:scale-[0.7] desktop:scale-100" />
                  </a>
                </li>
                <li className='flex justify-center items-center'>
                  <a href="https://www.instagram.com/rohanhadvani/" target="_blank" rel="noopener noreferrer">
                    <img src={insta} alt="Instagram" className="h-[100px] w-[100px]
                    mobile:scale-75 tablet:scale-[0.7] desktop:scale-100" />
                  </a>
                </li>
                <li className='flex justify-center items-center'>
                  <a href="https://www.linkedin.com/in/rohan-hadvani-aa159b229/" target="_blank" rel="noopener noreferrer">
                    <img src={LI} alt="LinkedIn" className="h-[140px] w-[140px]
                    mobile:scale-75 tablet:scale-[0.7] desktop:scale-100" />
                  </a>
                </li>
                <li className='flex justify-center items-center font-light hover:underline'>
                  <a href="https://github.com/rohan27hadvani" target='_blank' rel="noopener noreferrer">
                    <img src={GH} alt="GitHub" className="h-[100px] w-[100px]
                    mobile:scale-75 tablet:scale-[0.7] desktop:scale-100" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={`${themeClasses[theme].dark} row-span-4 col-span-2 basic ${load ? 'moving-p2' : ''} transition-opacity duration-1000 ease ${isContentVisible ? 'opacity-100' : 'opacity-0'} order-5
        mobile:mt-4 mobile:pb-8 tablet:mt-0 tablet:pb-0`}>
          <div className='text-black font-gilroy w-full h-full'>
            <div className='flex flex-col place-items-center text-center w-full h-full'>
              <div className='w-full h-1/4 pr-6 pt-8 flex justify-end mobile:justify-center tablet:justify-end'>
                <img 
                  src={share} 
                  alt="Share" 
                  className='h-12 hover:cursor-pointer hover:border-[0.5px] hover:border-black' 
                  onClick={copyLinkToClipboard}
                />
              </div>
              <div className='w-3/4 h-3/4 text-4xl flex items-center
              mobile:mt-8 tablet:mt-0'>
                Share Portfolio with others!
              </div>
            </div>
          </div>
        </div>

        <div className={`${themeClasses[theme].dark} row-span-7 col-span-2 basic ${load ? 'moving-p5' : ''} transition-opacity duration-1000 ease ${isContentVisible ? 'opacity-100' : 'opacity-0'} order-3
        mobile:mt-4 mobile:py-8 tablet:mt-0 tablet:py-0`}>
          <div className='text-black font-gilroy w-full h-full'>
            <div className='flex flex-col px-5 w-full h-full text-center items-center justify-center'>
              <div className='w-full pt-4 text-left text-5xl tablet:pt-8'>
                Quote of the week:-
              </div>
              <div className='w-full text-justify text-3xl pt-8'>
              &lsquo;You don&apos;t have to see the whole staircase, just take the first step&quot;.
              </div>
              <div className='text-right text-3xl font-semibold pt-8'>
               -Martin Luther King Jr
              </div>
            </div>
          </div>
        </div>

      </div> 
      <ToastContainer />
    </div> 
  );
}

export default Contact;
