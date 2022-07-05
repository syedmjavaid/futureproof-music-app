import React from "react";

function SongItem({ song, setSong, songs, setSongLyric }) {
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
  function handleLyricButton() {
    setSongLyric([{ artist: song.artist, song: song.name }]);
  }
  return (
    <>
      <li className={`song-item ${song.like ? "like" : ""}`}>{song.name}</li>
      <button className="like-button" onClick={handleLike}>
        like
      </button>
      <button className="like-button" onClick={handleLyricButton}>
        Lyric
      </button>
    </>
  );
}

export default SongItem;
