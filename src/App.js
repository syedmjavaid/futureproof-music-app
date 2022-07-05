import { useState } from "react";
import "./App.css";
import { ArtistList, SongList } from "./components";

function App() {
  const [artists, setArtist] = useState([
    { name: "Drake", like: false, id: Math.random() * 1000 },
    { name: "Bill Withers", like: false, id: Math.random() * 1000 },
    { name: "Pop Smoke", like: false, id: Math.random() * 1000 },
    { name: "Beyonce", like: false, id: Math.random() * 1000 },
    { name: "Rihanna", like: false, id: Math.random() * 1000 },
  ]);

  const [songs, setSong] = useState([
    { name: "In my feelings", like: false, id: Math.random() * 1000 },
    {
      name: "Ain't no sunshine when shes gone",
      like: false,
      id: Math.random() * 1000,
    },
    { name: "Dior", like: false, id: Math.random() * 1000 },
    { name: "Crazy in love", like: false, id: Math.random() * 1000 },
    { name: "Umbrella", like: false, id: Math.random() * 1000 },
  ]);

  return (
    <div className="App">
      <h1>Music App</h1>
      <ArtistList artists={artists} setArtist={setArtist} />
      <SongList songs={songs} setSong={setSong} />
    </div>
  );
}

export default App;
