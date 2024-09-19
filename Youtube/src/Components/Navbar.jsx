import React, { useState } from 'react'
import { CiMenuBurger } from "react-icons/ci";
import Youtube from '../assets/youtube.png';
import { CiSearch } from "react-icons/ci";
import { IoMicSharp } from "react-icons/io5";
import { GoDeviceCameraVideo } from "react-icons/go";
import { BsBell } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { toggleSideBar } from '../Store/AppSlice';


const Navbar = () => {
  const disPatch = useDispatch()
  const handleClick = () =>{
    disPatch(toggleSideBar());
  }
  return (
    <div className=' fixed flex justify-between items-center py-2 pl-4 pr-8 w-full bg-white z-10' >
        <div className='flex items-center gap-4'>
        <CiMenuBurger onClick={handleClick} className=' size-[40px] p-2 cursor-pointer hover:bg-slate-200 hover:rounded-full '  />
        <img className=' w-[100px]' src={Youtube} alt="" />
        </div>
        <div className='flex  gap-8'>
            <div>
            <input className='border-2 rounded-3xl h-[45px] w-[600px] pl-3 ' type="text" placeholder='Search' />
            <div className='absolute right-[420px] top-2 w-[75px] h-[45px] border-2 rounded-r-3xl  bg-slate-50'>
            <CiSearch className='absolute left-5 top-1 w-7 h-9 py-1 ' />
            </div>
            </div>
            <div className='rounded-full w-10  bg-gray-100 ' >
            <IoMicSharp className=' size-[40px] p-[8px] cursor-pointer hover:bg-slate-200 hover:rounded-full ' />
            </div>
        </div>
        <div className='flex items-center gap-5'>
        <GoDeviceCameraVideo className=' size-[40px] p-2 cursor-pointer hover:bg-slate-200 hover:rounded-full '/>
        <BsBell className=' size-[40px] p-2 cursor-pointer hover:bg-slate-200 hover:rounded-full ' />
        <div className='rounded-full w-10  bg-gray-100 ' >
        <BsPerson className=' w-9 h-9 py-2 ' />
        </div>
        </div>
    </div>
  )
}

export default Navbar