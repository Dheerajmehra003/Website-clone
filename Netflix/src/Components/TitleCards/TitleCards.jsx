import React, { useEffect, useRef } from 'react'
import './TitleCards.css'
import card_data from '../../assets/cards/Cards_data'


const TitleCards = ({title,category}) => {

  const cardsRef = useRef()

const handleWheel = (event) => {
  event.preventDefault();
  cardsRef.current.scrollLeft += event.deltaY;
}

useEffect(()=>{
  cardsRef.current.addEventListener('wheel', handleWheel)
},[])

  return (
    <div className="titleCards">
      <h2>{title ? title : 'Popular on Netflix'}</h2>
      <div className="cardList" ref={cardsRef}>
        {
          card_data.map((item,index)=>{
            return(
              <div className="card" key={index}>
                <img src={item.image} alt="" />
                <p>{item.name}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default TitleCards