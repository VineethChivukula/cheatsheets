import React from "react";
import Link from "@docusaurus/Link";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Vineeth's Cheat Sheets</h1>
        <p className={styles.subtitle}>
          The only stuff you need for quick revision of CS concepts.
        </p>
        <div className={styles.buttonContainer}>
          <Link to="/docs/" className={styles.primaryButton}>
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
