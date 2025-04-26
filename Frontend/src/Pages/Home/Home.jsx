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
      <div className="home-page">
        Home
      </div>
    </motion.div>
  )
}

export default Home
