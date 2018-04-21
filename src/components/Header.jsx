import React from "react";

import "./Header.css";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <i className="fas fa-camera" />
            <strong>Album</strong>
          </div>
        </div>
      </nav>
    );
  }
}
