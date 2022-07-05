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
      <div className="display">
      <li className={`song-item ${song.like ? "like" : ""}`}>{song.name}</li>
      <button className='like-button' onClick={handleLike}>Like</button>
      </div>
    </>
  );
}

export default SongItem;
