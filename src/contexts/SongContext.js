import { useState, createContext } from "react";
import React from "react";

const songData = [
  {
    name: "In my feelings",
    artist: "Drake",
    like: false,
    id: Math.random() * 1000,
  },
  {
    name: "Ain't No Sunshine",
    artist: "Bill Withers",
    like: false,
    id: Math.random() * 1000,
  },
  {
    name: "Dior",
    artist: "Pop Smoke",
    like: false,
    id: Math.random() * 1000,
  },
  {
    name: "Crazy in love",
    artist: "Beyonce",
    like: false,
    id: Math.random() * 1000,
  },
  {
    name: "Umbrella",
    artist: "Rihanna",
    like: false,
    id: Math.random() * 1000,
  },
];

export const SongContext = createContext();

export const SongProvider = (props) => {
  const [songs, setSong] = useState(songData);

  return (
    <SongContext.Provider value={[songs, setSong]}>
      {props.children}
    </SongContext.Provider>
  );
};
