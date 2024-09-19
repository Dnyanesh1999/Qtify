import React from "react";
import styles from "./AlbumCard.module.css";
import { Chip } from "@mui/material";

const AlbumCard = ({ albumImage, albumName, follows }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div className={styles.card}>
        <img src={albumImage} alt={albumName} className={styles.albumImage} />
        <div className={styles.cardContent}>
          <Chip
            label={`${follows} Follows`}
            className={styles.followChip}
            sx={{
              backgroundColor: "black",
              color: "white",
              fontSize: "12px",
              padding: "5px",
            }}
          />
        </div>
      </div>
      <h3 className={styles.albumName}>{albumName}</h3>
    </div>
  );
};

export default AlbumCard;
