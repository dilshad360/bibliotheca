import React from "react";
import styles from "./styles.module.css"

function Loader() {
  return (
    <div>
      <div className={styles.bubblingG}>
        <span id={styles.bubblingG_1}></span>
        <span id={styles.bubblingG_2}></span>
        <span id={styles.bubblingG_3}></span>
      </div>
    </div>
  );
}

export default Loader;
