import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Marketplace from './Pages/Marketplace/Marketplace'
import News from './Pages/News/News'
import Reference from './Pages/Reference/Reference'
import Technologies from './Pages/Technologies/Technologies'
import Chatbot from './Components/Chatbot/Chatbot'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/news" element={<News />} />
          <Route path="/reference" element={<Reference />} />
          <Route path="/technologies" element={<Technologies />} />
        </Routes>
      </Router>
      <div className="cahtbot">
        <Chatbot />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  )
}

export default App
