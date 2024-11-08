import React from 'react'
import './Footer.css'
import youtubeIcon from '../../assets/youtube_icon.png'
import twitterIcon from '../../assets/twitter_icon.png'
import instagramIcon from '../../assets/instagram_icon.png'
import facebookIcon from '../../assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerIcons">
        <img src={facebookIcon} alt="" />
        <img src={instagramIcon} alt="" />
        <img src={twitterIcon} alt="" />
        <img src={youtubeIcon} alt="" />
      </div>
       <ul>
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Invester Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Prefences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
       </ul>
       <div className="copyrightText">
         &#169; 1997-2023 Netflix, Inc
       </div>
    </div>
  )
}

export default Footer