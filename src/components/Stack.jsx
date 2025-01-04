import React from 'react'

import express  from '../assets/svgs/express.svg'
import next  from '../assets/svgs/next.svg'
import node  from '../assets/svgs/node.svg'
import js  from '../assets/svgs/js.svg'
import mongo  from '../assets/svgs/mongo.svg'
import react  from '../assets/svgs/react.svg'
import typescript from '../assets/svgs/typescript.svg'
import socketio  from '../assets/svgs/socketio.svg'
const Stack = () => {
  return (
    <div className='flex flex-col items-center pb-24  bg-white text-secondary py-10 pt-24'>
      <h1 className='text-4xl font-bold px-10  text-center'>
      My Techstack
      </h1>
        <div className='flex flex-wrap justify-center pt-14 items-center gap-10 md:gap-14 w-full   rounded-b-[100px]'>
        <img src={express} alt="" />
        <img src={next} alt="" />
        <img src={node} alt="" />
        <img src={js} alt="" />
        <img src={mongo} alt="" />
        <img src={react} alt="" />
        <img src={typescript} alt="" />
        <img src={socketio} alt="" />
        </div>
    </div>
  )
}

export default Stack