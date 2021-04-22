import { Link } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";
import logoImg from "../Assets/Images/mint-logo.png";
// import img1 from "../Assets/Images/test/2.webp";

export default function Navigation() {
  return (
    <nav className="navbar">
      <ul className="navbar outerList">
          {/* <div className="centerDiv"> */}
            <img className="logoImg" src={logoImg} alt="Logo"></img>
          {/* </div> */}
          <Link className="logo" to="/Mint-Man-Records">
            Mint man
            <br />
            Records
          </Link>
      
        <ul className="innerList">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link to="/Releases">Releases</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link to="/Artists">Artists</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link to="/Videos">Videos</Link>
          </motion.div>{" "}
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link to="/info">Info</Link>
          </motion.div>
        </ul>
      </ul>
    </nav>
  );
}
