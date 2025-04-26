import React from 'react'
import './Technologies.css'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

const Technologies = () => {
  return (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }} 
        exit={{ opacity: 0, y: -50 }}  
        transition={{ duration: 0.5 }}  
      >
        <h1>Technologies Page</h1>
        <p>Welcome to the Technologies page!</p>
      </motion.div>
  )
}

export default Technologies
