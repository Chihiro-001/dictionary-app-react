import React from "react";

export default function Example(props) {
  if (props.examples) {
    return (
      <ul className="Examples">
        {props.examples.map(function (example, index) {
          return <li key={index}>{example}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
