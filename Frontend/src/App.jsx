import React from 'react'
import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Marketplace from './Pages/Marketplace/Marketplace'
import News from './Pages/News/News'
import Reference from './Pages/Reference/Reference'
import Technologies from './Pages/Technologies/Technologies'
import Chatbot from './Components/Chatbot/Chatbot'
import Footer from './Components/Footer/Footer'
import { AnimatePresence } from 'framer-motion';

const App = () => {
  const location = useLocation();

  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="body">
        <AnimatePresence mode='wait'>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/news" element={<News />} />
            <Route path="/reference" element={<Reference />} />
            <Route path="/technologies" element={<Technologies />} />
          </Routes>
        </AnimatePresence>
        <div className="chatbot">
          <Chatbot />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
