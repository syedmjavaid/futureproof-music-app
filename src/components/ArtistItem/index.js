import React from "react";

function ArtistItem({ artist, setArtist, artists }) {
  function handleLike() {
    setArtist(
      artists.map((el) => {
        if (el.id === artist.id) {
          return { ...el, like: !el.like };
        }
        return el;
      })
    );
  }
  return (
    <>
      <li className={`artist-item ${artist.like ? "like" : ""}`}>
        {artist.name}
      </li>
      <button className='like-button' onClick={handleLike}>Like</button>
    </>
  );
}

export default ArtistItem;
