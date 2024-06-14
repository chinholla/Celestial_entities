import React from 'react'
import video from '../assets/home.mp4';
import  '../Login.css';
import Nav from '../components/Nav';
import image1 from '../assets/aurora.jpg'
import image2 from '../assets/moonphase.jpg'
import image3 from '../assets/nebula.jpg'
import image4 from '../assets/stars.jpg'
function Home() {
  return (
    <div>
     <video src={video} autoPlay loop muted playsInline className="bg" style={{height:"1260px"}}/>
    <Nav/>
    <div className='mainholder'>
      <h1>Introduction</h1>
      <div className='left'>
      <img src={image3} className= "images" />
      <p>A nebula is a distinct luminescent part of interstellar medium, which can consist of ionized, neutral, or molecular hydrogen and also cosmic dust. Nebulae are often star-forming regions, such as in the "Pillars of Creation" in the Eagle Nebula. In these regions, the formations of gas, dust, and other materials "clump" together to form denser regions, which attract further matter and eventually become dense enough to form stars.</p>
    </div>
    <div className='right'>
      <img src={image2} className= "images" />
      <p>A lunar phase or Moon phase is the apparent shape of the Moon's directly sunlit portion as viewed from the Earth. In common usage, the four major phases are the new moon, the first quarter, the full moon and the last quarter; the four minor phases are waxing crescent, waxing gibbous, waning gibbous, and waning crescent.</p>
    </div>
    <div className='leftdown'>
      <img src={image1} className= "images" />
      <p>Auroras display dynamic patterns of brilliant lights that appear as curtains, rays, spirals, or dynamic flickers covering the entire sky.Auroras are the result of disturbances in the magnetosphere caused by the solar wind. Major disturbances result from enhancements in the speed of the solar wind from coronal holes and coronal mass ejections. These disturbances alter the trajectories of charged particles in the magnetospheric plasma.</p>
    </div>
    <div className='rightdown'>
      <img src={image4} className= "images" />
      <p>A star is a luminous spheroid of plasma held together by self-gravity. The nearest star to Earth is the Sun. Many other stars are visible to the naked eye at night; their immense distances from Earth make them appear as fixed points of light. The most prominent stars have been categorised into constellations and asterisms, and many of the brightest stars have proper names.</p>
    </div>
    </div>
    </div>
    )
  }
  
  export default Home