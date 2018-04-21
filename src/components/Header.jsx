import React from "react";

import "./Header.css";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">
              <i className="fas fa-camera" />
              <strong>Album</strong>
            </a>
          </div>
        </div>
      </nav>
    );
  }
}
