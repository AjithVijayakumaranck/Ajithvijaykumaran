import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import auto from '../assets/svgs/autograph.svg'

const Navbar = ({isScrolled}) => {
  const [copied,setCopied] = useState(false)


 const socials = [
    { name: '/ Linkedin', link: 'https://www.linkedin.com/in/ajithvijayakumaran/' },
    { name: '/ Instagram', link: 'https://www.instagram.com/ajithvijayakumaran_/' },
    { name: '/ Github', link: 'https://github.com/AjithVijayakumaranck' },
  ]
 
  const copyEmail = (()=>{
    const emailText = document.getElementById("email-text").innerText;
    navigator.clipboard.writeText(emailText).then(() => {
      setCopied(true)
    setTimeout(()=>{
      setCopied(false)
    },3000)
    });
  })

  return (
    <nav className='max-md:hidden  rounded-b-[100px]  fixed z-10 flex w-full min-h-20 b justify-between text-sm font-regular item-center px-24'>
        <div className='flex justify-around items-center gap-4 rounded-b-3xl bg-primaryOrange text-white px-10'>
        <p id="email-text">aji001ajith@gmail.com</p>
        <button onClick={copyEmail} className='px-4 bg-white text-black transition-all duration-300 rounded-full text-[11px] py-1' >{copied ? "Copied" : "Copy"}</button>
        <a href="mailto:aji001ajith@gmail.com"className='px-4 bg-white text-black rounded-full text-[11px] py-1'>Compose</a>
        </div>
        <img className={isScrolled ? "opacity-0" : "opacity-100 transition-all"} src={auto} alt="auto" />
        <div className={`flex justify-around items-center gap-6 bg-primary px-24 rounded-b-3xl ${isScrolled ? "bg-opacity-100 transition-all duration-200 " : "  bg-opacity-0"}`}>
            {
                socials.map((item,index) => {
                    return(
               
                     <Link className='hover:text-primaryOrange' to={item.link} key={index} target={"_blank"}>{item.name}</Link>
                
                )
                } )
            }
        </div>
    </nav>
  )
}

export default Navbar