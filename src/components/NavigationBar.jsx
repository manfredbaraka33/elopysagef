import React from 'react'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <div style={{backgroundColor:"#021526"}} className='pt-1  fixed-top'>
       <center>
        <div className='mx-3'><Link to="/"
        style={{
            color:"black",
            textDecoration:"none",
            fontSize:"x-large",
            fontWeight:"bold"
        }}
        > <span className='text-primary'>E</span><span className='text-success'>lopy</span><span className='text-warning'>S</span><span className='text-light'>age</span></Link></div>
        </center>
        
       <div className='p-3'>
        <center>
       
            <span  className="mx-2 border rounded p-2"><Link style={{color:"#21E6C1",textDecoration:"none",fontWeight:"bold"}} to="/medcost">Medical cost </Link></span>
            <span className="mx-2 border rounded p-2"><Link style={{color:"#21E6C1",textDecoration:"none",fontWeight:"bold"}} to="/energy">Energy consumption </Link></span>
           
        </center>
       </div>
    </div>
  )
}

export default NavigationBar