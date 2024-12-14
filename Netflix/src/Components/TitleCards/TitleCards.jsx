import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import card_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom'


const TitleCards = ({title,category}) => {

  const [apiData, setApiData] = useState([])
  const cardsRef = useRef()

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNDdhMTY0NDYwYzkzNmFmZDRjNTM4YmYzMGU5NjAyZiIsIm5iZiI6MTczMTA1MTQ2OC41ODk2NDE2LCJzdWIiOiI2NzJkYmUzZjZjMTA5MzlhNTE1MTYxOTUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.4-r1oYxW8kx63KQUlFwSQX6KoAnAZDiNF9Hm5baAQuk'
    }
  };
  


const handleWheel = (event) => {
  event.preventDefault();
  cardsRef.current.scrollLeft += event.deltaY;
}

useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/movie/${category?category:'now_playing'}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));
  cardsRef.current.addEventListener('wheel', handleWheel)
},[])

  return (
    <div className="titleCards">
      <h2>{title ? title : 'Popular on Netflix'}</h2>
      <div className="cardList" ref={cardsRef}>
        {
          apiData.map((item,index)=>{
            return(
              <Link to={`/player/${item.id}`} className="card" key={index}>
                <img src={`https://image.tmdb.org/t/p/w500`+item.backdrop_path} alt="" />
                <p>{item.original_title}</p>
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}

export default TitleCards