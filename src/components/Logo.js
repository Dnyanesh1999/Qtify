import React from "react";
import styles from "./Logo.module.css";
import logo from "../assets/QTifyLogo.png";

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <img src={logo} alt="QTify logo" className={styles.logo} />
    </div>
  );
};

export default Logo;
