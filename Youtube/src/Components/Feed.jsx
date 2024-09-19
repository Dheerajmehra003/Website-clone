import React from 'react'
import { ButtonList } from './ButtonList'
import { VideoConatiner } from './VideoConatiner'
import { useSelector } from 'react-redux';

const Feed = () => {
  const open = useSelector((store)=>store.app.open)
  return (
    <div className={`${open?'absolute w-[82%] left-[235px] z-0 mt-[58px]': 'absolute w-[90%] left-[100px]  z-0 mt-[58px]'}`}>
    <ButtonList/>
    <VideoConatiner/>
    </div>
  )
}

export default Feed