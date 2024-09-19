import React from "react";
import styles from "./Hero.module.css";
import headphones from "../assets/heroImage.png"; // Adjust the path if needed

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <div className={styles.heroImage}>
        <img src={headphones} alt="Headphones" />
      </div>
    </section>
  );
};

export default Hero;
