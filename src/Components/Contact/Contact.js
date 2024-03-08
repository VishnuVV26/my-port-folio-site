import React from 'react'
import gmail from '../Images/gmail (2).png'
import whatsapp from '../Images/whatsapp.png'
import location from '../Images/location.png'
const Contact = () => {
  return (
    <section id='contact' className='py-19 px-3 text-white'>
         <div className='text-center mt-8'>
<h3 className='text-4xl font-semibold'>Contact <span className='text-yellow-300'>Me</span></h3>
<p className='text-white/65 mt-3 text-lg'>Get in touch</p>
<div className='mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-cyan-600 md:p-6 p-6 rounded-lg mx-auto'>
    <form className='flex flex-col flex-1 gap-5 '>
<input type='text' placeholder='Your Name'/>
<input type='Email' placeholder='Your Email Address'/>
<textarea placeholder='Your Message' rows={10}/>
<button className='btn-primary w-fit'>Send Message</button>
    </form>
    <div className='flex flex-col gap-7'>
        <div className='flex gap-4 w-fit items-center'>
            <div className='min-w-[3.5rem] min-h-[3.5rem] flex items-center justify-center text-white rounded-full bg-cyan-800'>
                <img src={gmail} alt='gmail' className='w-10'/>
            </div>
            <p className='text-lg'>+91 9047085998</p>

        </div>
        <div className='flex gap-4 w-fit items-center'>
            <div className='min-w-[3.5rem] min-h-[3.5rem] flex items-center justify-center text-white rounded-full bg-cyan-800'>
                <img src={whatsapp} alt='gmail' className='w-10'/>
            </div>
            <p className='text-lg'>No.3, Kongu Nagar, Ramanathapuram, Coimbatore</p>

        </div>
        <div className='flex gap-4 w-fit items-center'>
            <div className='min-w-[3.5rem] min-h-[3.5rem] flex items-center justify-center text-white rounded-full bg-cyan-800'>
                <img src={location} alt='gmail' className='w-10'/>
            </div>
            <p className='text-lg'>vishnusparrow26@gmail.com</p>

        </div>


    </div>
</div>
         </div>
    </section>
   
  )
}

export default Contact