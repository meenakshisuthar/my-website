import React from 'react'
import '../styles/About.css'
import AboutPizza from "../assets/multiplePizzas.jpeg"

const About = () => {
  return (
    <div className='about'>
      <div className="aboutTop" style={{backgroundImage: `url(${AboutPizza})`}}>
      </div>
      <div className="aboutBottom">
        <h1>ABOUT US</h1>
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo est temporibus voluptate 
            sapiente voluptatibus ducimus nobis dolor at distinctio corrupti. Sequi molestiae cumque 
            quam voluptates omnis eaque consequatur necessitatibus? Vero repellat, adipisci inventore 
            ratione ducimus sed numquam enim ipsum totam. Obcaecati necessitatibus ab nihil illum, sequi 
            quasi fugit aliquid dolor, aspernatur voluptas, accusantium sed. Quo voluptatum voluptatibus 
            fugit itaque tenetur.</p>
      </div>

    </div>
  )
}

export default About
