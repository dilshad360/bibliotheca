import React from 'react'
import { Link } from "react-router-dom";
import styles from "./styles.module.css"

function NavBar() {
  return (
    <nav className={styles.nav}>
        <Link to={`/bibliotheca`}><h1>Bibliotheca</h1></Link>
        <ul>
        <Link to={`/bibliotheca/about`}><li>About</li></Link>
        <a href='https://airtable.com/shrLDbv7qBXp7t4a0' target="_blank" rel="noreferrer" ><li>Write</li></a>
        </ul>
      
    </nav>
  )
}

export default NavBar