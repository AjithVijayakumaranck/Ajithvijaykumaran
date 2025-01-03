import React from 'react'
import orange from '../assets/svgs/orange-fill.svg'

const Experience = () => {
  return (
    <div className='text-black  py-10 md:rounded-[100px] relative overflow-hidden'>
      <img src={orange} alt="" className='absolute top-32 max-md:hidden animate-spin-reverse' />
        <div className='flex flex-col items-center  pb-24  text-secondary relative '>
            <h1 className='text-4xl font-bold px-10 pb-10 text-center'>What <span className='text-primaryOrange'>Experience</span> i have?</h1>
            <div className='flex flex-col items-center gap-10 pt-10'>
          <div className='flex max-md:flex-col  justify-center items-center gap-10  max-md:px-10'>
          <div className='hover:scale-110 transition-all flex flex-col md:items-end items-center gap-4 px-10  min-w-[500px]  bg-primary text-secondary  rounded-lg py-10'>
                <h2 className='text-2xl font-bold  font-secondary '>Full Stack Developer</h2>
                <p className='text-lg'>Intutive soft corporation </p>
                <p className='text-lg'>2023 - Present</p>
            </div>
            <div className='hover:scale-110 transition-all flex flex-col items-center md:items-start  min-w-[500px] px-10  gap-4   bg-primary text-secondary  rounded-lg py-10'>
                <h2 className='text-2xl font-bold  font-secondary '>MERN stack intern</h2>
                <p className='text-lg'>Brototype</p>
                <p className='text-lg'>2022 - 2023</p>
            </div>
          </div>
        <div className='hover:scale-110 transition-all flex justify-center items-center gap-10 w-full flex-wrap max-md:px-10'>
        <div className=' flex flex-col items-center gap-4 w-full bg-primary px-24 rounded-lg py-10'>
                <h2 className='text-2xl font-bold'>Freelance</h2>
                <p className='text-lg'>2020 - 2022</p>
            </div>
        </div>
            </div>
        </div>
    </div>
  )
}

export default Experience