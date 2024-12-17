import React from 'react'
import Navbar from '../Navbar/Navbas'
import Footer from '../Footer/Footer'
import Slider from './Slider/Slider'
import './Home.css'
import Container1 from './Container/Container1'

function Home() {
  return (
    <div>
          <Navbar />
      <Slider />
      <div className="content">
        <h1>All the skills you need in one place</h1>
        <p>From critical skills to technical topics, Udemy supports your professional development.</p>
      </div>
      <Container1/>
          <Footer/>
    </div>
  )
}

export default Home
