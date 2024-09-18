import React, { useState } from 'react'
import { CiMenuBurger } from "react-icons/ci";
import Youtube from '../assets/youtube.png';
import { CiSearch } from "react-icons/ci";
import { IoMicSharp } from "react-icons/io5";
import { GoDeviceCameraVideo } from "react-icons/go";
import { BsBell } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";

const Navbar = () => {
  const [isOpen,setIsOpen] = useState(false)
  const handleClick = () =>{
    setIsOpen(!isOpen)
  }
  console.log(isOpen)
  return (
    <div className=' fixed flex justify-between items-center py-2 pl-4 pr-8 w-full bg-white' >
        <div className='flex items-center gap-4'>
        <CiMenuBurger onClick={handleClick} className=' w-6 h-5  '  />
        <img className=' w-[100px]' src={Youtube} alt="" />
        </div>
        <div className='flex  gap-10'>
            <div>
            <input className='border-2 rounded-3xl h-[40px] w-[500px] pl-3 ' type="text" placeholder='Search' />
            <div className='absolute right-[450px] top-2 w-[64px] h-[40px] border-2 rounded-r-3xl  bg-slate-50'>
            <CiSearch className='absolute left-3 w-7 h-9 py-1 ' />
            </div>
            </div>
            <div className='rounded-full w-10  bg-gray-100 ' >
            <IoMicSharp className=' w-9 h-9 py-2 ' />
            </div>
        </div>
        <div className='flex items-center gap-5'>
        <GoDeviceCameraVideo className=' w-9 h-9 py-2 ' />
        <BsBell className=' w-9 h-9 py-2 ' />
        <div className='rounded-full w-10  bg-gray-100 ' >
        <BsPerson className=' w-9 h-9 py-2 ' />
        </div>
        </div>
    </div>
  )
}

export default Navbar