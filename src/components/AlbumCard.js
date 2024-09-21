import React from "react";
import { Chip } from "@mui/material";
import { Tooltip } from "@mui/material";
import styles from "./AlbumCard.module.css";

const AlbumCard = ({ albumImage, albumName, follows, isSong, songs }) => {
  const numberOfSongs = songs?.length;
  console.log(numberOfSongs, "numberOfSongs");

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div className={styles.card}>
        {isSong ? (
          <img src={albumImage} alt={albumName} className={styles.albumImage} />
        ) : (
          <Tooltip title={`${numberOfSongs} songs`} arrow placement="top">
            <img
              src={albumImage}
              alt={albumName}
              className={styles.albumImage}
            />
          </Tooltip>
        )}

        <div className={styles.cardContent}>
          <Chip
            label={`${follows} ${isSong ? "Likes" : "Follows"}`} // Conditional chip label
            className={styles.chip}
            sx={{ backgroundColor: "black", color: "white" }}
          />
        </div>
      </div>
      <h3 className={styles.albumName}>{albumName}</h3>
    </div>
  );
};

export default AlbumCard;
