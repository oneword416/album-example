import React from "react";
import ReactDOM from "react-dom";

import Template from "components/Template.jsx";

window.onload = function() {
  ReactDOM.render(
    <Template/>,
    document.getElementById("root")
  ); // JSX, no quotes
};
