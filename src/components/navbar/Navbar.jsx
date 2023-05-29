import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='contents'>
            <Link to='/' className='heading'>eventbrite</Link>
            <div className='links'>
            <Link style={{ color: '#3d64ff'}} to='/createvent'>Create an event</Link>
            <Link to='/login'>Log In</Link>
            <Link to='/signup'>Sign Up</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar