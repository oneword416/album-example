import React from "react";
import ReactDOM from "react-dom";

window.onload = function() {
  let name = "Evan";
  ReactDOM.render(
    <h1>Hello {name}</h1>, // JSX, no quotes
    document.getElementById("root")
  );
};
