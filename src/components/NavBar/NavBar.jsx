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
        <a href='https://airtable.com/shrLDbv7qBXp7t4a0' target="_blank" rel="noreferrer" ><li>Write</li></a>
        </ul>
    </nav>
  )
}

export default NavBar