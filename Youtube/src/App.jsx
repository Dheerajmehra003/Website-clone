import { useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import {Route, Routes} from 'react-router-dom'
import Watch from './Pages/Watch'


function App() {

  return (
    <>
      <div>
       <Navbar/>
       <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/watch/:videoId' element={<Watch/>}/>

       </Routes>
       
      </div>
    </>
  )
}

export default App
