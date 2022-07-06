import React, { useContext } from "react";
import { SongList, Lyric } from "../../components";
import { useState } from "react";
import { SongContext } from "../../contexts/SongContext";

const Songs = () => {
  const [songs, setSong] = useContext(SongContext);

  const [songLyric, setSongLyric] = useState([]);
  return (
    <>
      <h1>Songs page</h1>
      <SongList songs={songs} setSong={setSong} setSongLyric={setSongLyric} />
      <Lyric songLyric={songLyric} />
    </>
  );
};

export default Songs;
