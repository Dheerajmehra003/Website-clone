import React from 'react'
import { GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdSubscriptions } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { BsPersonSquare } from "react-icons/bs";
import { MdHistory } from "react-icons/md";
import { CgPlayList } from "react-icons/cg";
import { RiVideoLine } from "react-icons/ri";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { FaFireAlt } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { MdMusicNote } from "react-icons/md";
import { PiFilmSlateLight } from "react-icons/pi";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { SiYoutubegaming } from "react-icons/si";
import { FaRegFileAlt } from "react-icons/fa";
import { GoTrophy } from "react-icons/go";
import { PiLightbulb } from "react-icons/pi";
import { GiHanger } from "react-icons/gi";
import { RiSignalTowerLine } from "react-icons/ri";
import { useSelector } from 'react-redux';

const Sidebar = () => {

 const sideBarItem = [
    {
       title:'Home',
       icon: <GoHomeFill className=' w-8 h-6 '   />
    },
    {
       title:'Shorts',
       icon: <SiYoutubeshorts className=' w-8 h-6   '   />
    },
    {
        title:'Subscriptions',
        icon: <MdSubscriptions  className='w-8 h-6  '   /> 
    },
   

 ]
 const sideBarYouItem = [
    {
        title:'Your Channel',
        icon: <BsPersonSquare className='w-8 h-6  '   /> 
    },
    {
        title:'History',
        icon: <MdHistory  className='w-8 h-6  '   /> 
    },
    {
        title:'Playlists',
        icon: <CgPlayList   className='w-8 h-6  '   /> 
    },
    {
        title:'Your Videos',
        icon: <RiVideoLine   className='w-8 h-6  '   /> 
    },
    {
        title:'Watch Later',
        icon: <MdOutlineWatchLater  className='w-8 h-6  '   /> 
    },
    {
        title:'Liked Videos',
        icon: <AiOutlineLike  className='w-8 h-6  '   /> 
    },
 ]

 const sideBarExploreItem = [
    {
        title:'Trending',
        icon: <FaFireAlt  className='w-8 h-6  '   /> 
    },
    {
        title:'Shopping',
        icon: <MdOutlineShoppingBag  className='w-8 h-6  '   /> 
    },
    {
        title:'Music',
        icon: <MdMusicNote  className='w-8 h-6  '   /> 
    },
    {
        title:'Films',
        icon: <PiFilmSlateLight  className='w-8 h-6  '   /> 
    },
    {
        title:'Live',
        icon: <HiOutlineStatusOnline  className='w-8 h-6  '   /> 
    },
    {
        title:'Gaming',
        icon: <SiYoutubegaming  className='w-8 h-6  '   /> 
    },
    {
        title:'News',
        icon: <FaRegFileAlt  className='w-8 h-6  '   /> 
    },
    {
        title:'Sport',
        icon: <GoTrophy className='w-8 h-6  '   /> 
    },
    {
        title:'Courses',
        icon: <PiLightbulb  className='w-8 h-6  '   /> 
    },
    {
        title:'Fashion & beauty',
        icon: <GiHanger  className='w-8 h-6  '   /> 
    },
    {
        title:'Podcasts',
        icon: <RiSignalTowerLine  className='w-8 h-6  '   /> 
    },
 ]

 const open = useSelector((store)=>store.app.open)

  return (
    <div className={`${open?'flex flex-col gap-y-2  mt-[58px]  fixed left-0 bottom-0 top-[1px] h-full  w-[20%]] bg-white overflow-y-scroll ': ' fixed  mt-[58px] overflow-hidden'}`}>
        <div className='mt-5 pr-2 ml-2'>
        {
            sideBarItem.map((item,index)=>{
                return (
                    <div key={index} className={`${open ? 'flex items-center gap-5 hover:bg-slate-200 pt-2 pb-2 pl-2 hover:rounded-lg w-[200px]  cursor-pointer ': 'flex flex-col items-center justify-center hover:rounded-lg hover:bg-slate-200 pt-[10px] pb-[20px] cursor-pointer'}`}>
                      <p className={`${open ? '': ''}`}> {item.icon}</p>
                     <p className={` ${open ? "" : ' text-xs'}`}>{item.title}</p>
                     {/* <p className='hidden'>{item.title}</p> */}
                    </div>

                )
            })
        }
        </div>
         <p className={`${open ?'border-b-2  w-[96%] border-gray-200 ml-2':'hidden'}`}></p>
         <div className={`${open ?'mt-1 pr-2 ml-2':'hidden'}`}>
         <div className='flex items-center gap-3 hover:bg-slate-200 pt-2 pb-2 pl-3 hover:rounded-lg w-[200px] cursor-pointer '>
            <p className='font-semibold'>You</p>
            <IoIosArrowForward  />
            </div>
        {
            sideBarYouItem.map((item,index)=>{
                return (
                    <div key={index} className='flex items-center gap-5 hover:bg-slate-200 pt-2 pb-2 pl-2 hover:rounded-lg w-[200px] cursor-pointer '>
                     {item.icon}
                     <p>{item.title}</p>
                    </div>

                )
            })
        }
        </div>
        <p className={`${open ?'border-b-2  w-[96%] border-gray-200 ml-2':'hidden'}`}></p>
        <div className={`${open ?'mt-1 pr-2 ml-2':'hidden'}`}>
         <div className='flex items-center gap-3 hover:bg-slate-200 pt-2 pb-2 pl-3 hover:rounded-lg w-[200px] cursor-pointer '>
            <p className='font-semibold'>Explore</p>
            </div>
         {
            sideBarExploreItem.map((item,index)=>{
                return (
                    <div key={index} className='flex items-center gap-5 hover:bg-slate-200 pt-2 pb-2 pl-2 hover:rounded-lg w-[200px] cursor-pointer '>
                     {item.icon}
                     <p>{item.title}</p>
                    </div>

                )
            })
        }
        </div>
        </div>
  )
}

export default Sidebar