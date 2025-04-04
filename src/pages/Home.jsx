import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import logo "/logos-removebg-preview.png"

const Home = () => {

  return (
    <div className='container mt-5 p-5  text-light'>

      <center><h2 className="mt-4">Welcome to <span className='text-primary'>E</span>lopy<span className='text-warning'>S</span>age AI models</h2>
      <div>
        <img src={logo} width="200px" height="200px"/>
      </div>
      </center>

    </div>
  )
}

export default Home
