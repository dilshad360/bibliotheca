import React from "react";
import styles from "./styles.module.css"

function Loader() {
  return (
    <div className={styles.container}>
      <div className={styles.sbl}></div>
    </div>
  );
}

export default Loader;
