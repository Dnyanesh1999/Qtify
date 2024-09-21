import Navbar from "./components/Navbar";
import "./App.css";
import Hero from "./components/Hero";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import AlbumSection from "./components/AlbumSection";
import SongsSection from "./components/SongsSection";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Navbar />
        <Hero />
        {/* Top Albums Section */}
        <AlbumSection
          title="Top Albums"
          apiUrl="https://qtify-backend-labs.crio.do/albums/top"
        />

        {/* New Albums Section */}
        <AlbumSection
          title="New Albums"
          apiUrl="https://qtify-backend-labs.crio.do/albums/new"
        />

        <SongsSection />
      </div>
    </ThemeProvider>
  );
}

export default App;
