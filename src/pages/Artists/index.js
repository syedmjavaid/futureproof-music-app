import React from 'react';
import {ArtistList} from '../../components';
import { useState } from 'react';

const Artists = () => {

    const [artists, setArtist] = useState([
        { name: "Drake", like: false, id: Math.random() * 1000 },
        { name: "Bill Withers", like: false, id: Math.random() * 1000 },
        { name: "Pop Smoke", like: false, id: Math.random() * 1000 },
        { name: "Beyonce", like: false, id: Math.random() * 1000 },
        { name: "Rihanna", like: false, id: Math.random() * 1000 },
      ]);

    return (
        <>
        <h1>Artists page</h1>
        <ArtistList artists={artists} setArtist={setArtist} />
        </>
    )
}

export default Artists;
