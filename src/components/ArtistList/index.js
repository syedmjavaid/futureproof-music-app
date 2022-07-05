import React from "react";
import ArtistItem from "../ArtistItem";

export default function ArtistList({ artists, setArtist }) {
  return (
    <>
      <div>Artists</div>
      <ul>
        {artists.map((artist) => (
          <ArtistItem artist={artist} />
        ))}
      </ul>
    </>
  );
}