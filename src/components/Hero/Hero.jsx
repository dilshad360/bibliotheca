import React from "react";
import styles from "./styles.module.css";

function Hero() {
  return (
    <div className={styles.hero}>
        <h1 className={styles.mainHeader}>Stay curious.</h1>
        <h2>
          Discover stories, thinking, and expertise from writers on any topic.
        </h2>
    </div>
  );
}

export default Hero;
