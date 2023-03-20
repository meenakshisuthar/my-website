import React from 'react'
import '../styles/Home.css'
import { Link } from 'react-router-dom'
import BannerImage from '../assets/pizza.jpeg'

const Home = () => {
  return (
    <div className='home'  style={{backgroundImage: `url(${BannerImage})`}}>
      <div className="headerContainer">
        <h1>Pizzeriaa</h1>
        <p>PIZZA THAT FITS YOUR TASTE</p>
        <Link to='/menu'>
         <button>Order Now</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
