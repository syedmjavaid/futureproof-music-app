import React from "react";

function SongItem({ song }) {
  console.log(song);
  return <li>{song.name}</li>;
}

export default SongItem;
