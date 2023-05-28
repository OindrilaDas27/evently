import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='contents'>
            <h2 className='heading'>eventbrite</h2>
            <div className='links'>
            <Link style={{ color: '#3d64ff'}}>Create an event</Link>
            <Link>Log In</Link>
            <Link>Sign Up</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar