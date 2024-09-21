import React, { useEffect, useState } from "react";
import AlbumCard from "./AlbumCard";
import Carousel from "./Carousel";
import styles from "./AlbumSection.module.css";
import axios from "axios";

const AlbumSection = ({ title, apiUrl }) => {
  const [albums, setAlbums] = useState([]);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    // Fetch data from API
    axios
      .get(apiUrl)
      .then((response) => {
        setAlbums(response.data);
      })
      .catch((error) => {
        console.error("Error fetching the albums:", error);
      });
  }, [apiUrl]);

  const toggleCollapse = () => {
    setIsCollapsed((prev) => !prev);
  };

  console.log(albums, "albums");

  return (
    <section className={styles.albumSection}>
      <div className={styles.header}>
        <h2>{title}</h2>
        <button className={styles.collapseButton} onClick={toggleCollapse}>
          {!isCollapsed ? "Show All" : "Collapse"}
        </button>
      </div>
      {!isCollapsed ? (
        <Carousel
          items={albums.map((album) => (
            <AlbumCard
              key={album.id}
              albumImage={album.image}
              albumName={album.title}
              follows={album.follows}
              songs={album.songs}
            />
          ))}
        />
      ) : (
        <div className={styles.albumGrid}>
          {albums.map((album) => (
            <>
              <AlbumCard
                key={album.id}
                albumImage={album.image}
                albumName={album.title}
                follows={album.follows}
                songs={album.songs}
              />
            </>
          ))}
        </div>
      )}
      <hr className={styles.divider} /> {/* Horizontal divider */}
    </section>
  );
};

export default AlbumSection;
