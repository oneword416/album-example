import React from "react";

export default class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.type === "primary") {
      return (
        <button type="button" className="btn btn-primary">
          {this.props.text}
        </button>
      );
    }
    return (
      <button type="button" className="btn btn-default">
        {this.props.text}
      </button>
    );
  }
}
