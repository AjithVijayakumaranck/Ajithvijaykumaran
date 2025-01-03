import React from 'react'

import express  from '../assets/svgs/express.svg'
import next  from '../assets/svgs/next.svg'
import node  from '../assets/svgs/node.svg'
import js  from '../assets/svgs/js.svg'
import mongo  from '../assets/svgs/mongo.svg'
import react  from '../assets/svgs/react.svg'
import type  from '../assets/svgs/typescript.svg'
const Stack = () => {
  return (
    <div className='flex flex-col items-center pb-24  bg-white text-secondary '>
        <div className='flex flex-wrap justify-center pt-20 items-center gap-10 md:gap-14 w-full   rounded-b-[100px]'>
        <img src={express} alt="" />
        <img src={next} alt="" />
        <img src={node} alt="" />
        <img src={js} alt="" />
        <img src={mongo} alt="" />
        <img src={react} alt="" />
        <img src={type} alt="" />
        </div>
    </div>
  )
}

export default Stack