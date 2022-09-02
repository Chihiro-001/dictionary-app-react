import React from "react";

export default function Example(props) {
  if (props.examples) {
    return (
      <div className="Examples">
        <em className="text-muted">{props.examples}</em>
      </div>
    );
  } else {
    return null;
  }
}
