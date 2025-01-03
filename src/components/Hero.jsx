import React from 'react'
import hero from '../assets/hero.jpg'
import wave from  '../assets/svgs/strok-gray.svg'

const Hero = () => {
  return (
    <div className={`${
        window.innerHeight > 1000
          ? `h-[800px] max-h-[800px]`
          : `h-screen ` 
      } w-full flex shadow-lg bg-primary flex-col gap-7 justify-center items-center relative  overflow-hidden rounded-b-[100px]`}>
        <img src={wave} alt=""  className='absolute w-[1000px]  animate-spin-slow -right-[550px] top-52 max-md:hidden'/>
        <img src={wave} alt=""  className='absolute w-[1000px] animate-spin-slow -bottom-[300px] md:-left-[500px] md:-top-[500px] '/>
        <div className='relative flex flex-col  border-white border-[5px] justify-center items-center aspect-square  h:30  md:h-60 rounded-full  text-white'>
            <div className='h-60 rounded-full overflow-hidden aspect-square'>
            <img src={hero} alt="" />
            </div>
            <p className='absolute bg-white px-8 py-1 rounded-full text-black -right-20 top-[160px] -rotate-6 font-semibold '>Ajith Vijaykumaran</p>
          
        </div>
        <h1 className='font-secondary relative text-[30px] md:text-[60px] text-secondary leading-none '>Fullstack Developer</h1>
        <p className='font-secondary relative text-secondary text-md text-clip text-center px-10   leading-none'>MERN Stack Developer from Kerala, India, creating robust web applications</p>
        
            <button className='relative group bg-primaryOrange text-white px-10 rounded-full py-4 flex justify-center gap-5'>Resume

    <svg className='fill-white rotate-180 w-6 h-6 group-hover:rotate-45 transition-all' xmlns="http://www.w3.org/2000/svg" id="arrow-circle-down" viewBox="0 0 24 24" width="512" height="512"><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,23c-6.065,0-11-4.935-11-11S5.935,1,12,1s11,4.935,11,11-4.935,11-11,11Z"/><path d="M14.475,7.39c-.198-.198-.5-.475-.818-.756-.944-.837-2.368-.835-3.312,0-.318,.282-.621,.559-.815,.753l-2.879,2.828c-.197,.193-.2,.51-.006,.707,.193,.197,.51,.199,.708,.006l2.882-2.831c.187-.187,.473-.448,.774-.715,.148-.131,.316-.224,.493-.286v10.404c0,.276,.224,.5,.5,.5s.5-.224,.5-.5V7.096c.177,.063,.345,.155,.493,.286,.301,.266,.587,.527,.777,.717l2.879,2.828c.098,.096,.224,.144,.351,.144,.129,0,.259-.05,.357-.149,.193-.197,.19-.514-.006-.707l-2.876-2.825Z"/></svg>


            </button>
        <div>
        </div>
    </div>
  )
}

export default Hero