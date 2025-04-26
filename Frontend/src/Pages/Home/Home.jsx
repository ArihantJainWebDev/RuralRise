import React from 'react'
import './Home.css'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

const Home = () => {
  return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }} 
        exit={{ opacity: 0, y: -50 }}  
        transition={{ duration: 0.5 }}  
      >
        <h1>Home Page</h1>
        <p>Welcome to the Home page!</p>
      </motion.div>
  )
}

export default Home
