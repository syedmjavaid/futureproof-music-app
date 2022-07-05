async function handleLyric(song, artist) {
  console.log("fetch lyric", song, artist);
  const fetchAPI = `https://api.lyrics.ovh/v1/${artist}/${song}`;
  console.log(fetchAPI);
  try {
    const result = await fetch(fetchAPI);
    const data = await result.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

export default handleLyric;
