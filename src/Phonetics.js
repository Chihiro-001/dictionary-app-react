import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <span className="Phonetics">
      {props.phonetic.text}
      <a
        href={props.phonetic.audio}
        target="_blank"
        rel="noreferrer"
        className="phonetics-text ms-2"
      >
        Listen 🔊
      </a>
    </span>
  );
}
