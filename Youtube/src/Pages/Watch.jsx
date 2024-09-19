import React from 'react'
import { useSelector } from 'react-redux';
import {useParams} from 'react-router-dom'


const Watch = () => {
    const open = useSelector((store)=>store.app.open)
    const {videoId} = useParams();
   console.log(videoId)
  return (
    <div className='pt-[60px]'>
        <div>
        <iframe width="560" height="315"
         src={`https://www.youtube.com/embed/${videoId}?si=oYieWdy3_DZVCGGy `}
         title="YouTube video player" frameborder="0" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
          </iframe>
          
         </div>
     
    </div>
  )
}

export default Watch