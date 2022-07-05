import React from "react";
import { useState } from "react";
import SongItem from "../SongItem";

export default function SongList({ songs, setSong }) {
  return (
    <>
      <div>Songs</div>
      <ul>
        {songs.map((song) => (
          <SongItem song={song} key={song.id} />
        ))}
      </ul>
    </>
  );
}