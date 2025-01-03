import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import auto from '../assets/svgs/autograph.svg'

const Navbar = ({isScrolled}) => {



 const socials = [
    { name: '/ Linkedin', link: '/' },
    { name: '/ Instagram', link: '/about' },
    { name: '/ Github', link: '/contact' },
  ]
 

  return (
    <nav className='max-md:hidden  rounded-b-[100px]  fixed z-10 flex w-full min-h-20 b justify-between text-sm font-regular item-center px-24'>
        <div className='flex justify-around items-center gap-4 rounded-b-3xl bg-primaryOrange text-white px-10'>
        <p className=''>aji001ajith@gmail.com</p>
        <button className='px-4 bg-white text-black rounded-full text-[11px] py-1' >Copy</button>
        <button className='px-4 bg-white text-black rounded-full text-[11px] py-1'>Compose</button>
        </div>
        <img className={isScrolled ? "opacity-0" : "opacity-100 transition-all"} src={auto} alt="auto" />
        <div className={`flex justify-around items-center gap-6 bg-primary px-24 rounded-b-3xl ${isScrolled ? "bg-opacity-100 transition-all duration-200 " : "  bg-opacity-0"}`}>
            {
                socials.map((item,index) => {
                    return(
               
                     <Link className='hover:text-primaryOrange' to={item.link} key={index} >{item.name}</Link>
                
                )
                } )
            }
        </div>
    </nav>
  )
}

export default Navbar