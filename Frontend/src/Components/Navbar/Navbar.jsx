import React from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar__logo">RuralRise</div>
        <div className="navbar__links">
          <button id="home" onClick={() => handleNavigate("/")}>Home</button>
          <button id="News" onClick={() => handleNavigate("/news")}>News</button>
          <button id="Reference" onClick={() => handleNavigate("/reference")}>Reference</button>
          <button id="Marketplace" onClick={() => handleNavigate("/marketplace")}>Marketplace</button>
          <button id="Technologies" onClick={() => handleNavigate("/technologies")}>Technologies</button>
        </div>
        <div className="login">
          <button className="login__button">Login</button>
        </div>
      </div>
    </>
  )
}

export default Navbar
