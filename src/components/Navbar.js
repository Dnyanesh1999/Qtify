import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Button from "./Button";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Logo />
      <SearchBar />
      <Button text="Give Feedback" />
    </div>
  );
};

export default Navbar;
