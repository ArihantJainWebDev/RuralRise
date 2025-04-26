import React from 'react'
import './News.css'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

const News = () => {
  return (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }} 
        exit={{ opacity: 0, y: -50 }}  
        transition={{ duration: 0.5 }}  
      >
        <h1>News Page</h1>
        <p>Welcome to the News page!</p>
      </motion.div>
  )
}

export default News
