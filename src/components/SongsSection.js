import React, { useState, useEffect } from "react";
import AlbumCard from "./AlbumCard";
import Carousel from "./Carousel";
import { Tabs, Tab } from "@mui/material";
import axios from "axios";
import styles from "./SongsSection.module.css";

const SongsSection = () => {
  const [songs, setSongs] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("All");

  useEffect(() => {
    // Fetch songs data
    axios
      .get("https://qtify-backend-labs.crio.do/songs")
      .then((response) => {
        setSongs(response.data);
        setFilteredSongs(response.data); // Default to all songs
      })
      .catch((error) => {
        console.error("Error fetching the songs:", error);
      });

    // Fetch genres data
    axios
      .get("https://qtify-backend-labs.crio.do/genres")
      .then((response) => {
        setGenres(["All", ...response.data.data.map((genre) => genre.label)]); // Access data property
      })
      .catch((error) => {
        console.error("Error fetching the genres:", error);
      });
  }, []);

  const handleTabChange = (event, newValue) => {
    setSelectedGenre(newValue);
    if (newValue === "All") {
      setFilteredSongs(songs);
    } else {
      setFilteredSongs(
        songs.filter((song) => song.genre === newValue.toLowerCase())
      );
    }
  };

  return (
    <section className={styles.songsSection}>
      <div className={styles.header}>
        <h2>Songs</h2>
        <Tabs
          value={selectedGenre}
          onChange={handleTabChange}
          className={styles.genreTabs}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="songs genre tabs"
        >
          {genres.map((genre, index) => (
            <Tab
              key={index}
              label={genre}
              value={genre}
              sx={{ color: "white" }}
            />
          ))}
        </Tabs>
      </div>

      <Carousel
        items={filteredSongs.map((song) => (
          <AlbumCard
            key={song.id}
            albumImage={song.image}
            albumName={song.title}
            follows={song.likes} // Use likes instead of follows for the chip
            isSong={true}
            // A prop to distinguish between album and song cards
          />
        ))}
      />
    </section>
  );
};

export default SongsSection;
