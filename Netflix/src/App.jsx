import React, { useEffect } from 'react'
import Home from './Pages/Home/Home'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Login from './Pages/Login/Login'
import Player from './Pages/Player/Player'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './Firebase'

const App = () => {

  const navigate = useNavigate();

  useEffect(()=>{
    onAuthStateChanged(auth, async(user)=>{
      if(user){
         console.log("Logged In")
         navigate('/')
      }else{
        console.log("Logged Out")
        navigate('/login')
      }
    })
  },[])
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/player/:id' element={<Player />}/>
    </Routes>
    </>
  )
}

export default App