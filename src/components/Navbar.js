import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../assets/css/Navbar.css'

const Navbar = () => {

  const [click, setClick] = useState(false)

  const handleClick2 = () => setClick(!click)

  return (
    <>
      <link href="https://cdn.jsdelivr.net/npm/remixicon@4.1.0/fonts/remixicon.css" rel="stylesheet" />
      <div className="main-navbar">
        <div className="navbar-container">
          <div className="menu-bar" onClick={handleClick2}>
            {click ? (
              <i class="ri-close-line"></i>
            ) : (
              <i class="ri-menu-line"></i>
            )}
          </div>

          <div className="logo">
            <NavLink to='/'><h2 className='logo-name'>Travor.com</h2></NavLink>
          </div>
          <div className="lists">
            <ul className={click ? 'nav-links active' : 'nav-links'}>
              <li>
                <NavLink to='/' className="nav-link"
                  activeClassName="active">Home</NavLink>
              </li>
              <li>
                <NavLink to='/packages' className="nav-link" activeClassName="active">Packages</NavLink>
              </li>
              <li>
                <NavLink to='/hotels' className="nav-link" activeClassName="active">Hotels</NavLink>
              </li>
              {/* <li>
                <NavLink to='/places' className="nav-link" activeClassName="active">Places</NavLink>
              </li> */}
              <li>
                <NavLink to='/about' className="nav-link"
                  activeClassName="active">About Us</NavLink>
              </li>
            </ul>

          </div>

          <div className="login-btn">
            <button><NavLink to='/login' className="nav-link"
              activeClassName="active">Login/SignUp</NavLink></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
