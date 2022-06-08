import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
  return (
    <div className="navigation-bar">
        <div className="logo">
          <h2>ANENUE SOUND</h2>
        </div>

        <div className="nav-links">
          <div className="home">
            <Link to="/">Home</Link>
          </div>
          <div className="services">
            <Link to="#">Services</Link>
          </div>
          <div className="contact">
          <Link to="#">Contact</Link>
          </div>
          <div className="About">
          <Link to="#">About</Link>
          </div>
          <div className="join">
          <Link to="/register">Join Now</Link>
          </div>
        </div>
    </div>
  )
}

export default Navigation