import React from "react";
import styles from "./SearchBar.module.css";
import searchIcon from "../assets/Search icon.svg"; // Adjust the path as needed

const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        placeholder="Search a song of your choice"
        className={styles.input}
      />

      <button className={styles.searchButton}>
        <img src={searchIcon} alt="Search" className={styles.searchIcon} />
      </button>
    </div>
  );
};

export default SearchBar;
