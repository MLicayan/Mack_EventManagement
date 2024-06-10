import React from 'react'
import './Home.css'

export const Home = () => {
  return (
    <div className='appcon'>
      <h2>Dashboard</h2>
      <div className='row'>
        <div className='column' style={{backgroundColor:"#FF9A62", border: "solid 1.5px black", borderRadius: "20px"}}>
          <h2 className='eh2'>Events</h2>
          <h1 className='eh1'>5</h1>
        </div>
        <div className='column' style={{backgroundColor:"#78E7FF", border: "solid 1.5px black", borderRadius: "20px"}}>
          <h2 className='eh2'>Completed Events</h2>
          <h1 className='eh1'>0</h1>
        </div>
        <div className='column' style={{backgroundColor:"#F6BDFF", border: "solid 1.5px black", borderRadius: "20px"}}>
          <h2 className='eh2'>RSVP</h2>
          <h1 className='eh1'>4</h1>
        </div>
      </div>
      <p className='phara'>Welcome to our homepage, where we transform your dreams into unforgettable moments! As event planners, we specialize in crafting bespoke experiences tailored to your every desire. With meticulous attention to detail and a flair for creativity, we bring your vision to life, whether it's a corporate affair, a luxurious wedding, or a community celebration. Trust us to exceed your expectations and create memories that will last a lifetime. Welcome to a world where every occasion is an extraordinary adventure!</p>
    </div>
    
  )
}
