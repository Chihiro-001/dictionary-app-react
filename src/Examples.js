import React from "react";

export default function Example(props) {
  if (props.examples) {
    return (
      <div className="Examples">
        <strong>Example: </strong>
        <br />
        {props.examples};
      </div>
    );
  } else {
    return null;
  }
}
