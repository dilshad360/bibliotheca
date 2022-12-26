import React from 'react'
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import logo from "../../assets/bloglogo.svg";

function NavBar() {
  return (
    <nav className={styles.nav}>
        <Link to={`/`}><img className={styles.logo} src={logo} alt="" /></Link>
        <ul>
        <Link to={`/about`}><li>About</li></Link>
        <Link to={`/write`}><li>Write</li></Link>
        </ul>
    </nav>
  )
}

export default NavBar