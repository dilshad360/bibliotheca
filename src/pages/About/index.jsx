import React from "react";
import styles from "./styles.module.css";
function About() {
  return (
    <div className={styles.about}>

      <div className={styles.quote}>
      <blockquote>
      A writer is working when he’s staring out of the window.
      </blockquote>
      <cite>Burton Rascoe</cite>
      </div>

      <p>
        <b>Bibliotheca</b> is a platform that molds the ideas and experiences of
        mature writers by contributing a space where they can excel and showcase
        themselves. It mainly focuses on incorporating works of different genres
        so that a person can witness them with just a click. This venture
        remains exclusively for the students of EMEA College of Arts and
        Science. We intend to open a door of innovation by stepping forward to
        the digital platform. Writers can publish their work through a digital
        setup which is seen as convenient in today's world.
      </p>

      <p>
        This blog comes up with an earnest collaboration with Connect EMEA.
        Connect community aims on uplifting students by paving a path where they
        can be independent in all aspects. By combining with Bibliotheca Connect
        EMEA has opened a wide section of opportunities.
      </p>
    </div>
  );
}

export default About;
