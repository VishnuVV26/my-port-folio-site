import React, { useEffect, useState } from 'react'
import menu_icon from '../Images/menu.png'
const Navbar = () => {

    const[sticky,setSticky]=useState(false);
const[open,setOpen]=useState(false);
    const menuLinks=[
        { name:"HOME",link:'#home'},
        { name:"ABOUT",link:'#about'},
        { name:"SKILLS",link:'#skills'},
        { name:"CONTACT",link:'#contact'},

    ]

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            const nav=document.querySelector('nav');
            console.log(nav)
            window.scrollY > 0 ? setSticky(true):setSticky(false);
        })
    },[])

  return (
    <nav className={`fixed  w-full left-0 top-0 z-[999] ${sticky?"bg-white/60":"text-black"}`}>
    <div className='flex items-center justify-between'>
        <div className='mx-7'>
            <h4 className='text-4xl uppercase font-bold'>Vishnu <span className='text-yellow-400'>Vardhanan</span></h4>
        </div>
        <div className={` ${sticky?'md:bg-white/0 bg-white':'bg-white'} md:block hidden px-7 py-2 font-medium bg-white rounded-bl-full`}>
            <ul className='flex items-center gap-1 py-2 text-lg font-serif '>
           {menuLinks.map((links,index)=>(
            <li key={index} className='px-6 hover:text-yellow-400'>
                <a href={links?.link}>{links?.name}</a>
            </li>
           ))}
            </ul>
        </div>
        <div onClick={()=>setOpen(!open)} className={`${open ? "text-black":'text-gray-300'} z-[999] text-3xl md:hidden m-5`}>
            <img src={menu_icon} alt='menu'className=''/>
        </div>
        <div className={`${open ? 'right-0':'right-[100%]'} duration-300 md:hidden absolute w-2/3 h-screen px-7 py-2 font-medium bg-cyan-300 top-0 right-0`}>
            <ul className='flex flex-col h-full gap-10 py-20 text-lg text-black'>
                    {
                        menuLinks?.map((menu,i)=>(
                            <li onClick={()=>{setOpen(false)}} key={i} className='px-6 hover:text-yellow-400'>
                                <a href={menu?.link}>{menu?.name}</a>
                            </li>
                        ))
                    }
            
            </ul>
        </div>
    </div>
    </nav>
  )
}

export default Navbar