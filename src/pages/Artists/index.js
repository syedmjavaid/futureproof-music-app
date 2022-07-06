import React, { useContext } from "react";
import { ArtistList } from "../../components";
import { ArtistContext } from "../../contexts/ArtistContext";

const Artists = () => {
  const [artists, setArtist] = useContext(ArtistContext);

  return (
    <>
      <h1>Artists page</h1>
      <ArtistList artists={artists} setArtist={setArtist} />
    </>
  );
};

export default Artists;
