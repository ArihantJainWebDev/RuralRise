import React from 'react'
import './Navbar.css'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()

  const handleLogoClick = () => {
    navigate('/')
  }

  return (
    <>
      <div className="navbar">
        <div className="navbar_logo" onClick={handleLogoClick}>RuralRise</div>
        <div className="navbar_links">
          <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            <img src="./src/assets/icons/home_738873.png"/>Home
          </NavLink>
          <NavLink to="/news" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            <img src="./src/assets/icons/newspaper_15747169.png"/>News
          </NavLink>
          <NavLink to="/reference" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            <img src="./src/assets/icons/research_5526469.png"/>Reference
          </NavLink>
          <NavLink to="/marketplace" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            <img src="./src/assets/icons/commerce_14680170.png"/>Marketplace
          </NavLink>
          <NavLink to="/technologies" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            <img src="./src/assets/icons/technology_4365271.png"/>Technologies
          </NavLink>
        </div>
        <div className="login">
          <button className="login_button">Login</button>
          <button className="signup_button">Sign Up</button>
        </div>
      </div>
    </>
  )
}

export default Navbar
