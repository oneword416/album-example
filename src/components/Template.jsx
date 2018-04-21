import React from "react";

import Header from "components/Header.jsx";
import Jumbotron from "components/Jumbotron.jsx";
import Main from "components/Main.jsx";
import Footer from "components/Footer.jsx";

export default class Template extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <Jumbotron />
        <Main />
        <Footer />
      </div>
    );
  }
}
