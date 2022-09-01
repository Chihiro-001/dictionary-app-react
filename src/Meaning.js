import React from "react";
// import Examples from "./Examples";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  // console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {/* If there are multiple definitions and examples you can loop through */}
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <strong>Definition: </strong>
              {definition.definition}
              <br />
              {/* Not all words have examples and synonyms, 
              so thinking of making a component just for Example.*/}
              {/* <Examples examples={definition.example} /> */}
              <strong>Example: </strong>
              <em>{definition.example}</em>
            </p>
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
