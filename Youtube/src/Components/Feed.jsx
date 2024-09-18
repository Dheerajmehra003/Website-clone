import React from 'react'
import { ButtonList } from './ButtonList'
import { VideoConatiner } from './VideoConatiner'

const Feed = () => {
  return (
    <div className=' flex flex-col mt-[58px]'>
    <ButtonList/>
    <VideoConatiner/>
    </div>
  )
}

export default Feed