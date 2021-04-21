import { Link } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";
import logoImg from "../Assets/Images/mint-logo.png";
// import img1 from "../Assets/Images/test/2.webp";

export default function Navigation() {
  return (
    <nav className="navbar">
      <ul className="navbar outerList">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <div className="centerDiv">
            <img className="logoImg" src={logoImg} alt="Logo"></img>
          </div>
          <Link className="logo" to="/Mint-Man-Records">
            Mint man
            <br />
            Records
          </Link>
        </motion.div>
        <ul className="navbar innerList">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link to="/Releases">Releases</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <li>
              <Link to="/Artists">Artists</Link>
            </li>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <li>
              <Link to="/Videos">Videos</Link>
            </li>
          </motion.div>{" "}
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <li>
              <Link to="/info">Info</Link>
            </li>
          </motion.div>
        </ul>
      </ul>
    </nav>
  );
}
