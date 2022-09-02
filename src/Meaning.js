import React from "react";
import "./Meaning.css";
import Examples from "./Examples";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  // console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {/* If there are multiple definitions and examples you can loop through */}
      <section className="meaning-section">
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <p>
                <strong>Definition: </strong>
                <br />
                {definition.definition}
                <br />
              </p>
              <Examples examples={definition.example} />
              <Synonyms synonyms={definition.synonyms} />
            </div>
          );
        })}
      </section>
    </div>
  );
}
