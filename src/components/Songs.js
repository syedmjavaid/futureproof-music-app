import React from "react";
import { useState } from "react";

export default function Songs() {
  const [like, setLike] = useState("Like");
  const [like2, setLike2] = useState("Like");
  const [like3, setLike3] = useState("Like");
  const [like4, setLike4] = useState("Like");

  function handleLike(e) {
    // setLike("Liked");
    if (e.target.innerText === "Liked") {
      e.target.innerText = "Like";
    } else {
      e.target.innerText = "Liked";
    }
  }

  return (
    <>
      <div>Songs</div>
      <ul>
        <li>
          In my feelings
          <button onClick={handleLike}>{like}</button>
        </li>
        <li>
          Ain't no sunshine when shes gone
          <button onClick={handleLike}>Like</button>
        </li>
        <li>
          Dior
          <button onClick={handleLike}>Like</button>
        </li>
        <li>
          Crazy in love
          <button onClick={handleLike}>Like</button>
        </li>
        <li>
          Umbrella
          <button onClick={handleLike}>Like</button>
        </li>
      </ul>
    </>
  );
}
