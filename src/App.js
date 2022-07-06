// import { useState } from "react";
import "./App.css";
// import { ArtistList, SongList, Lyric } from "./components";
import {Routes, Route} from 'react-router-dom';
import {AboutPage, Artists, Songs} from './pages';
import Layout from "./layouts";

function App() {
  // const [artists, setArtist] = useState([
  //   { name: "Drake", like: false, id: Math.random() * 1000 },
  //   { name: "Bill Withers", like: false, id: Math.random() * 1000 },
  //   { name: "Pop Smoke", like: false, id: Math.random() * 1000 },
  //   { name: "Beyonce", like: false, id: Math.random() * 1000 },
  //   { name: "Rihanna", like: false, id: Math.random() * 1000 },
  // ]);

  // const [songs, setSong] = useState([
  //   {
  //     name: "In my feelings",
  //     artist: "Drake",
  //     like: false,
  //     id: Math.random() * 1000,
  //   },
  //   {
  //     name: "Ain't No Sunshine",
  //     artist: "Bill Withers",
  //     like: false,
  //     id: Math.random() * 1000,
  //   },
  //   {
  //     name: "Dior",
  //     artist: "Pop Smoke",
  //     like: false,
  //     id: Math.random() * 1000,
  //   },
  //   {
  //     name: "Crazy in love",
  //     artist: "Beyonce",
  //     like: false,
  //     id: Math.random() * 1000,
  //   },
  //   {
  //     name: "Umbrella",
  //     artist: "Rihanna",
  //     like: false,
  //     id: Math.random() * 1000,
  //   },
  // ]);

  // const [songLyric, setSongLyric] = useState([]);

  return (
    <>
    {/* <div className="App">
      <h1>Music App</h1>
      <ArtistList artists={artists} setArtist={setArtist} />
      <SongList songs={songs} setSong={setSong} setSongLyric={setSongLyric} />
      <Lyric songLyric={songLyric} />
    </div> */}
   
    <Routes>
      <Route path='/' element={<Layout/>}>
          <Route path='/' element={<AboutPage />}/>
          <Route path='artists' element={<Artists  />}/>
          <Route path='songs' element={<Songs />}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;
