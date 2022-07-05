import React from "react";
import ArtistItem from "../ArtistItem";

export default function ArtistList({ artists, setArtist }) {
  return (
    <>
      <div className="title">Artists</div>
      <ul className="text">
        {artists.map((artist) => (
          <ArtistItem artist={artist} />
        ))}
      </ul>
    </>
  );
}
