import React from 'react'

const Hireme = () => {
  return (
    <section id='hireme' className='py-10 px-3 text-white'>
    <div className='text-center'>
        <h3 className='text-4xl font-semibold'>Hire <span className='text-yellow-300'>Me</span>
        </h3>
        <p className='text-white/65 mt-3 text-lg'>Do you have any work?</p>
        <div className='bg-cyan-600 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center'>
<div>
    <h2 className='text-2xl font-semibold'>Do you have any work?</h2>
    <p className='lg:text-left text-justify max-w-lg text-sm mt-4 text-white/65 leading-6'>
    Enthusiastic and results-driven computer science student with a strong foundation in React, JavaScript, and modern web development technologies. Seeking a challenging position where I can leverage my technical skills to contribute innovative solutions, collaborate with cross-functional teams, and continuously learn and grow in a dynamic and evolving industry.  
    </p>
    <button className='btn-primary mt-1'>Say Hello</button>
</div>
        </div>
    </div>
    
    </section>
  )
}

export default Hireme