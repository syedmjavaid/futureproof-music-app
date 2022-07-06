// import { useState } from "react";
import "./App.css";
// import { ArtistList, SongList, Lyric } from "./components";
import { Routes, Route } from "react-router-dom";
import { AboutPage, Artists, Songs } from "./pages";
import Layout from "./layouts";
import { ArtistProvider } from "./contexts/ArtistContext";
import { SongProvider } from "./contexts/SongContext";

function App() {
  return (
    <>
      <SongProvider>
        <ArtistProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<AboutPage />} />
              <Route path="artists" element={<Artists />} />
              <Route path="songs" element={<Songs />} />
            </Route>
          </Routes>
        </ArtistProvider>
      </SongProvider>
    </>
  );
}

export default App;
