import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import {useParams} from 'react-router-dom'
import { API_KEY } from '../Constant/Youtube';
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { PiShareFatThin } from "react-icons/pi";
import { LiaDownloadSolid } from "react-icons/lia";
import { PiDotsThreeBold } from "react-icons/pi";


const Watch = () => {
    const open = useSelector((store)=>store.app.open)
    const [singleVideo,setSingleVideo] = useState("")
    const {videoId} = useParams();
    

    const getSingleVideo = async() =>{
      try {
        const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`)
        console.log(res)
        setSingleVideo(res?.data?.items[0])
      } catch (error) {
        console.log(error)
      }
      
    }

    useEffect(()=>{
      getSingleVideo();
    },[])

  return (
    <div className='pt-[60px] flex'>
        <div className='flex flex-col gap-3 ml-7 w-[880px] '>
        <iframe className='rounded-2xl mt-5 mr-5'
         width="880" height="450"
         src={`https://www.youtube.com/embed/${videoId}?&autoplay=1`}
         title="YouTube video player" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
          </iframe>
          <h1 className='font-bold text-xl w-[880px]'>{singleVideo?.snippet?.title}</h1>
          <div className='flex justify-between w-[880px]'>
            {/* channel info */}
            <div className='flex gap-2'>
            <div className='flex gap-2'>
            <div className='pt-1  w-[50px]'>
            <img className='w-[40px] h-[30px] rounded-full' src={singleVideo?.snippet?.thumbnails?.high?.url} alt="channelIcon" />
            </div>
            <div className='flex flex-col whitespace-nowrap'>
              <h1 className='text-base font-semibold'>{singleVideo?.snippet?.channelTitle}</h1>
              <h1 className='text-gray-600'>subscriber</h1>
            </div>
            </div>
            <div className='flex gap-2 p-2 items-start'>
              <button className='pl-[15px] pr-[15px] pt-[8px]  pb-[8px] rounded-3xl bg-gray-100 font-semibold hover:bg-gray-200'>Join</button>
              <button  className='pl-[12px] pr-[12px]  pt-[8px]  pb-[8px]  rounded-3xl bg-black font-semibold text-white hover:bg-gray-800'>Subscribe</button>
            </div>
            </div>
            <div className='flex  flex-wrap'>
              <div className='flex items-center pt-2 pb-2 pl-2'>
              <div className='flex pl-[10px] pr-[10px] pt-[8px] pb-[8px] rounded-l-3xl border-r-2 bg-gray-100 items-center gap-2 hover:bg-gray-200 cursor-pointer '>
              <AiOutlineLike className='h-6 w-7' />
              <p className='font-semibold'>
              {singleVideo?.statistics?.likeCount}
              </p>
              </div>
              <div className=' pl-[10px] pr-[10px] pt-[11px] pb-[5px]  rounded-r-3xl bg-gray-100  hover:bg-gray-200 cursor-pointer   '>
                {/* dislike */}
                <AiOutlineDislike className='h-6 w-7' />
              </div>
              </div>
              <div className='flex items-center pt-2 pb-2 pl-2'>
              <div className='flex items-center  pl-[10px] pr-[10px] pt-[5px] pb-[6px] rounded-3xl bg-gray-100  gap-2 hover:bg-gray-200 cursor-pointer '>
                {/* share */}
                <PiShareFatThin className='h-7 w-8'  />
                <p className='font-semibold'>
                  share
                </p>
              </div>
              </div>
              <div className='flex items-center pt-2 pb-2 pl-2'>
              <div className='flex items-center  pl-[10px] pr-[10px] pt-[5px] pb-[6px] rounded-3xl bg-gray-100  gap-2 hover:bg-gray-200 cursor-pointer '>
                {/* share */}
                <LiaDownloadSolid className='h-7 w-8'  />
                <p className='font-semibold'>
                  Download
                </p>
              </div>
              </div>
              <div className='flex items-center pt-2 pb-2 pl-2'>
              <div className='flex items-center  pl-[5px] pr-[5px] pt-[5px] pb-[5px] rounded-full bg-gray-100  gap-2 hover:bg-gray-200 cursor-pointer '>
                {/* share */}
                <PiDotsThreeBold className='h-7 w-8'  />
              </div>
              </div>
            </div>
          </div>
          <div>
            {/* views description */}
            <p>this is description</p>
          </div>
          <div>
            {/* comments */}
          </div>
          
         </div>
         <div>

         </div>
     
    </div>
  )
}

export default Watch