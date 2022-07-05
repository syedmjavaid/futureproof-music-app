import React from "react";
import { useState } from "react";
import SongItem from "../SongItem";

export default function SongList({ songs, setSong, setSongLyric }) {
  return (
    <>
      <div>Songs</div>
      <ul>
        {songs.map((song) => (
          <SongItem
            song={song}
            songs={songs}
            setSong={setSong}
            setSongLyric={setSongLyric}
            key={song.id}
          />
        ))}
      </ul>
    </>
  );
}
