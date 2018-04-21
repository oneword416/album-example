import React from "react";

import "./Jumbotron.css";
import Button from "components/Button.jsx";

export default class Jumbotron extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="jumbotron text-center">
        <div className="container">
          <h1>Album example</h1>
          <p>
            Something short and leading about the collection below—its contents,
            the creator, etc. Make it short and sweet, but not too short so
            folks don't simply skip over it entirely.
          </p>
          <p>
            <Button type="primary" text="Main call to action" />
            &nbsp;
            <Button text="Secondary action" />
          </p>
        </div>
      </div>
    );
  }
}
