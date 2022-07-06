import React from 'react';
import {SongList, Lyric} from '../../components'
import { useState } from 'react';

const Songs = () => {

    const [songs, setSong] = useState([
        {
          name: "In my feelings",
          artist: "Drake",
          like: false,
          id: Math.random() * 1000,
        },
        {
          name: "Ain't No Sunshine",
          artist: "Bill Withers",
          like: false,
          id: Math.random() * 1000,
        },
        {
          name: "Dior",
          artist: "Pop Smoke",
          like: false,
          id: Math.random() * 1000,
        },
        {
          name: "Crazy in love",
          artist: "Beyonce",
          like: false,
          id: Math.random() * 1000,
        },
        {
          name: "Umbrella",
          artist: "Rihanna",
          like: false,
          id: Math.random() * 1000,
        },
      ]);
      
    const [songLyric, setSongLyric] = useState([]);
    return (

        <>
        <h1>Songs page</h1>
        <SongList  songs={songs} setSong={setSong} setSongLyric={setSongLyric} />
        <Lyric songLyric={songLyric} />
        </>
    )
}

export default Songs;
