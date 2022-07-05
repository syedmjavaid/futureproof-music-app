import React, { useEffect, useState } from "react";
import handleLyric from "../API";

function Lyric({ songLyric }) {
  const [lyric, setLyric] = useState("");
  useEffect(() => {
    async function fetchData() {
      const data = await handleLyric(songLyric[0].song, songLyric[0].artist);
      console.log(data);
      setLyric(data.lyrics);
    }
    fetchData();
  }, [songLyric]);
  return <p>{lyric}</p>;
}

export default Lyric;
