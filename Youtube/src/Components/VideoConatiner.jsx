import React, { useEffect, useState } from 'react'
import axios from "axios";
import { API_KEY } from '../Constant/Youtube';
import { YOUTUBE_VIDEO_API } from '../Constant/Youtube';
import VideoCart from './VideoCart';

export const VideoConatiner = () => {
  const [video , setvideo] = useState([])
  
  const fetchingYoutubeVideo = async () => {
    try {
      const res = await axios.get(`${YOUTUBE_VIDEO_API}`);
      console.log(res?.data?.items);
      setvideo(res?.data?.items);
      
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
  fetchingYoutubeVideo();
  },[])

  return (
    <>
    <div className='relative top-[65px] grid grid-cols-3 gap-4 p-5'>
    {
      video.map((item) => {
      return(
        <div >
        <VideoCart key={item.id} item={item} />
        </div>
      )
    })
  }
  </div>
  </>
  )
}
