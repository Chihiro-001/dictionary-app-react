import React from "react";

export default function Example(props) {
  if (props.examples) {
    return (
      <div className="Examples">
        <strong>Example: </strong>
        <br />
        <em>{props.examples}</em>
      </div>
    );
  } else {
    return null;
  }
}
