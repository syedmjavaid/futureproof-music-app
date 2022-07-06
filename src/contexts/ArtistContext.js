import { useState, createContext } from "react";
import React from "react";

const artistData = [
  { name: "Drake", like: false, id: Math.random() * 1000 },
  { name: "Bill Withers", like: false, id: Math.random() * 1000 },
  { name: "Pop Smoke", like: false, id: Math.random() * 1000 },
  { name: "Beyonce", like: false, id: Math.random() * 1000 },
  { name: "Rihanna", like: false, id: Math.random() * 1000 },
];

export const ArtistContext = createContext();

export const ArtistProvider = (props) => {
  const [artists, setArtist] = useState(artistData);

  return (
    <ArtistContext.Provider value={[artists, setArtist]}>
      {props.children}
    </ArtistContext.Provider>
  );
};
