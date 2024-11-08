import React from 'react'
import './Home.css'
import NavigationBar from '../../Components/NavBar/NavigationBar'
import heroBanner from '../../../public/hero_banner.jpg'
import heroTitle from '../../assets/hero_title.png'
import info from '../../assets/info_icon.png'
import play from '../../assets/play_icon.png'
import TitleCards from '../../Components/TitleCards/TitleCards'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  return (
    <>
    <div className='home'>
      <NavigationBar />
      <div className="hero">
        <img src={heroBanner} alt="" className='bannerImage' />
        <div className="heroCaption">
          <img src={heroTitle} alt="" className='captionImage' />
          <p>Discovering his ties to a secret ancient order, a young man 
            living in modern Istanbul embarks on a quest to save the 
            city from  an immortal enemy.
          </p>
          <div className="herobtns">
            <button className='btn'><img src={play} alt="" />Play</button>
            <button className='btn darkbtn'><img src={info} alt="" />More Info</button>
          </div>
          <TitleCards  />
        </div>
      </div>
    </div>
    <div className="moreCards">
      <TitleCards  title={'BlockBuster Movies'} />
      <TitleCards  title={'Only on Netflix'} />
      <TitleCards  title={'Upcoming'} />
      <TitleCards  title={'Top Picks for You'} />
    </div>
    <Footer />
    </>
  )
}

export default Home