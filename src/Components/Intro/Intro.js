import React from 'react'
import man_image from '../Images/intro.png'
import gmail from '../Images/gmail (1).png'
import linkedin from '../Images/ln.png'
import whatsapp from '../Images/whtsp.png'
const Intro = () => {
    const social_media=[
       {icon:gmail,alt:'gmail'},
       {icon:linkedin,alt:"linkedin"},
       {icon:whatsapp,alt:'whatsapp'}
    ]
  return (
    <section id='home' className='min-h-screen flex py-10 md:flex-row flex-col items-center'>
    <div className='flex-1 flex items-center justify-center h-full mt-10 md:mt-0'>
        <img src={man_image} alt='' className='md:w-16/12 h-full object-cover'/>
    </div>
    <div className='flex-1 md:text-left text-center'>
<h1 className='md:text-4xl text-2xl md:leading-normal leading-10 text-white font-bold'>
    <span className='text-yellow-300 md:text-6xl text-5xl'>
        Hello!
        <br/>
    </span>
    My Name is <span>Vishnu Vardhanan</span>
</h1>
<h4 className='md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-800'>
    Web Developer
</h4>
<button className='btn-primary mt-8'>Contact Me</button>
<div className='mt-8 text-3xl flex items-center md:justify-start justify-center gap-5'>
    
{
    social_media.map((items,index)=>(
    <img key={index} src={items.icon} alt={items.alt} className='w-6 hover:scale-105 duration-75 cursor-pointer'/>
    ))
}
</div>
    </div>
    </section>
  )
}

export default Intro