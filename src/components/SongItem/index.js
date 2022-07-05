import React from "react";

function SongItem({ song, setSong, songs }) {
  function handleLike() {
    setSong(
      songs.map((el) => {
        if (el.id === song.id) {
          return { ...el, like: !el.like };
        }
        return el;
      })
    );
  }
  return (
    <>
      <li className={`song-item ${song.like ? "like" : ""}`}>{song.name}</li>
      <button onClick={handleLike}>like</button>
    </>
  );
}

export default SongItem;
