import { Link } from "react-router-dom"
import React from 'react'
import { motion } from "framer-motion"


export default function Navigation () {

  return (
    
    <nav className='navbar'>
    <ul className='navbar'>
<h1>Mint man Records</h1>



    <motion.div
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}>
      <li>
        <Link to="/">Home</Link>
      </li>
      </motion.div>
      <motion.div
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}>
      <li>
        <Link to="/about">About</Link>
      </li>
      </motion.div>

      <motion.div
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      </motion.div>
    </ul>
  </nav>
  )

}

