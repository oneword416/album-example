import React from "react";

import "./Main.css";
import Card from "components/Card.jsx";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row bg-light">
        <div className="container">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    );
  }
}
