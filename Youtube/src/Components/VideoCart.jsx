import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BsPerson } from "react-icons/bs";
import { useSelector } from 'react-redux';
import { API_KEY } from '../Constant/Youtube';

const VideoCart = ({item}) => {
    const open = useSelector((store)=>store.app.open)
    const [ytIcon,setYtIcon] = useState("")

    const getYoutubeChannelName = async() =>{
      try {
        const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${item.snippet.channelId}&key=${API_KEY}`)
        console.log(res)
        setYtIcon(res.data.items[0].snippet.thumbnails.high.url)
      } catch (error) {
      console.log(error)
      }
    }

    useEffect(()=>{
      getYoutubeChannelName()
    },[])

  return (
    <div className='flex flex-col gap-2 mb-6'>
        <img className={`${open ?'w-full rounded-lg': 'w-full rounded-lg'}`} src={item.snippet.thumbnails.high.url} alt="Yt video" />
        <div className='flex gap-2'>
            <div className='pt-1  w-[70px]'>
            <img className='w-[40px] h-[30px] rounded-full' src={ytIcon} alt="channelIcon" />
            </div>
            <div>
            <h1 className='font-semibold'>{item.snippet.title}</h1>
             <p className='text-gray-500'>{item.snippet.channelTitle}</p>
            </div>
        </div>
    </div>
  )
}

export default VideoCart;