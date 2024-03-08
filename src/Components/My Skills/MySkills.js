import React from 'react'
import html from '../Images/html.png'
import css from '../Images/css.png'
import js from '../Images/js.png'
import react from '../Images/react.png'
const MySkills = () => {
    return (
        <section id='skills' className='py-10 bg-gray-800 relative'>
            <div className='mt-8 text-gray-100 text-center'>
                <h3 className='text-4xl font-semibold'>
                    My <span className='text-cyan-600'>Skills</span>
                </h3>
                <p className='text-gray-400 mt-3 text-lg'> My knowledge</p>
                <div className='flex items-center justify-center mt-12 gap-10 flex-wrap'>
                    <div className='border-2 border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl'>
                        <div style={{ background: `conic-gradient(rgb(8,145,170) 86%,#ddd 86%)` }} className='w-32 h-32 flex items-center justify-center rounded-full'>
                            <div className='text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center'>
                                <img src={html} alt='html' className='bg-white rounded-full' />
                            </div>
                        </div>
                        <p className='text-xl mt-5'>Advance</p>
                    </div>
                    <div className='border-2 border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl'>
                        <div style={{ background: `conic-gradient(rgb(8,145,170) 86%,#ddd 86%)` }} className='w-32 h-32 flex items-center justify-center rounded-full'>
                            <div className='text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center'>
                                <img src={css} alt='html' className='bg-white rounded-full' />
                            </div>
                        </div>
                        <p className='text-xl mt-5'>Advance</p>
                    </div>
                    <div className='border-2 border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl'>
                        <div style={{ background: `conic-gradient(rgb(8,145,170) 66%,#ddd 66%)` }} className='w-32 h-32 flex items-center justify-center rounded-full'>
                            <div className='text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center'>
                                <img src={js} alt='html' className='bg-white rounded-full ' />
                            </div>
                        </div>
                        <p className='text-xl mt-5'>Intermediate</p>
                    </div>
                    <div className='border-2 border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl'>
                        <div style={{ background: `conic-gradient(rgb(8,145,170) 50%,#ddd 50%)` }} className='w-32 h-32 flex items-center justify-center rounded-full'>
                            <div className='text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center'>
                                <img src={react} alt='html' className='bg-white rounded-full' />
                            </div>
                        </div>
                        <p className='text-xl mt-5'>Beginner</p>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default MySkills