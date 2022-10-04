import React from 'react'
import styles from './styles.module.css'
import connectLogo from '../../assets/connect_logo.svg'

function Footer() {
  return (
    <footer className={styles.footer}>
        <a href='https://connectemea.in/'><img className={styles.footerLogo} src={connectLogo} alt=''></img></a>
    </footer>
  )
}

export default Footer