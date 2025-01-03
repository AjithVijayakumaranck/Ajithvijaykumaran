import React from 'react'
import wave from  '../assets/svgs/orange-fill.svg'
import auto from  '../assets/svgs/autograph.svg'
import arrow2 from  '../assets/svgs/arrow2.svg'

const Footer = () => {
  return (
    <footer className='md:h-96 bg-primary  mt-14 md:mt-32 max-md:pt-14  overflow-hidden bg-wave relative flex max-md:flex-col '>
            <img src={wave} alt="wave" className='max-md:hidden absolute'/>
            <div className='relative flex md:gap-4 gap-2 justify-center flex-col items-center md:items-start md:px-32  h-full md:w-1/2 w-full'>
            <img src={auto} alt="autograph" className='w-56 md:w-80 '/>
            <p>Give me a shoutout on my <span className='text-primaryOrange text-2xl font-semibold'>socials</span></p>
            <div className='flex gap-4 text-sm'>
            <p className='test-start'>//Instagram</p>
             <p className=' test-start'>//Linkedin</p>
             <p className=' test-start'>//Github</p>
          </div>
            </div>

            <div className='relative flex md:justify-end justify-center max-md:py-10  items-center gap-4 text-start md:px-32  h-full md:w-1/2 w-full'>
          <div className='flex md:-rotate-90  gap-4 group/footer cursor-pointer bg-white py-2 px-5 rounded-full hover:shadow-xl'>
          <h1 className=''>Stright To The top</h1>
          <svg className='fill-primaryOrange rotate-45 group-hover/footer:rotate-0 md:group-hover/footer:rotate-90 transition-all   w-6 h-6' xmlns="http://www.w3.org/2000/svg" id="arrow-circle-down" viewBox="0 0 24 24" width="512" height="512">   <path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,23c-6.065,0-11-4.935-11-11S5.935,1,12,1s11,4.935,11,11-4.935,11-11,11Z"/><path d="M14.475,7.39c-.198-.198-.5-.475-.818-.756-.944-.837-2.368-.835-3.312,0-.318,.282-.621,.559-.815,.753l-2.879,2.828c-.197,.193-.2,.51-.006,.707,.193,.197,.51,.199,.708,.006l2.882-2.831c.187-.187,.473-.448,.774-.715,.148-.131,.316-.224,.493-.286v10.404c0,.276,.224,.5,.5,.5s.5-.224,.5-.5V7.096c.177,.063,.345,.155,.493,.286,.301,.266,.587,.527,.777,.717l2.879,2.828c.098,.096,.224,.144,.351,.144,.129,0,.259-.05,.357-.149,.193-.197,.19-.514-.006-.707l-2.876-2.825Z"/></svg>
           
            </div>

            </div>
    </footer>
  )
}

export default Footer 