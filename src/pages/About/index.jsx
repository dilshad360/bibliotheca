import React from "react";
import styles from "./styles.module.css";

function About() {
  return (
    <div className={styles.about}>
      <p>
        What if there exist an ideal opportunity to hightlight the intangible
        thoughts linering in your mind?
      </p>
      <p>
        <b>Connect EMEA</b> Provides a golden opportunity to imprint your
        impressions and showcase it to the world.
      </p>
      <ul>
        <li>Writings of any language are permitted </li>
        <li>It can be both academic or non-academic style. </li>
        <li>No word limit. </li>
        <li>
          Could be any genre (poems, essays, stories, articles, anecdotes){" "}
        </li>
      </ul>
    </div>
  );
}

export default About;
