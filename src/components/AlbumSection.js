import React, { useEffect, useState } from "react";
import AlbumCard from "./AlbumCard";
import styles from "./AlbumSection.module.css";
import axios from "axios";

const AlbumSection = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    // Fetch data from API
    axios
      .get("https://qtify-backend-labs.crio.do/albums/top")
      .then((response) => {
        setAlbums(response.data);
      })
      .catch((error) => {
        console.error("Error fetching the albums:", error);
      });
  }, []);

  console.log(albums, "albums");

  return (
    <section className={styles.albumSection}>
      <div className={styles.header}>
        <h2>Top Albums</h2>
        <button className={styles.collapseButton}>Collapse</button>
      </div>
      <div className={styles.albumGrid}>
        {albums.map((album) => (
          <AlbumCard
            key={album.id}
            albumImage={album.image}
            albumName={album.title}
            follows={album.follows}
          />
        ))}
      </div>
    </section>
  );
};

export default AlbumSection;
