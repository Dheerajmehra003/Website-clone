import React, { useEffect, useRef } from 'react'
import './NavBar.css'
import logo from '../../assets/logo.png'
import searchIcon from '../../assets/search_icon.svg'
import bellIcon from '../../assets/bell_icon.svg'
import profileIcon from '../../assets/profile_img.png'
import caretIcon from '../../assets/caret_icon.svg'
import { logout } from '../../Firebase'


const NavigationBar = () => {
  const navRef = useRef();

  useEffect(()=>{
      window.addEventListener('scroll', ()=>{
        if(window.scrollY >= 80){
         navRef.current.classList.add('navDark')
        }
        else{
          navRef.current.classList.remove('navDark')
        }
      })
  },[])
  return (
    <div ref={navRef} className='navbar'>
       <div className="navbarLeft">
         <img src={logo} alt="Netflix lofo" />
         <ul>
           <li>Home</li>
           <li>TV Shows</li>
           <li>Movies</li>
           <li>New & Popular</li>
           <li>My List</li>
           <li>Browse by Language</li>
         </ul>
       </div>
       <div className="navbarRight">
         <img src={searchIcon} alt="" className='icons' />
         <p>Children</p>
         <img src={bellIcon} alt="" className='icons' />
         <div className="navbarProfile">
         <img src={profileIcon} alt="" className='profile' />
         <img src={caretIcon} alt=""  />
         <div className="dropdown">
          <p onClick={()=>{logout()}}>Sign out of Netflix</p>
         </div>
         </div>
       </div>
    </div>
  )
}

export default NavigationBar