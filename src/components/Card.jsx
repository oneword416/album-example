import React from "react";

import "./Card.css";

export default class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-sm-6 col-md-4">
        <div className="thumbnail">
          <img src={`images/thumbnail.svg`} />
          <div className="caption">
            <h3>Thumbnail label</h3>
            <p>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <div className="action">
              <div className="btn-group" role="group">
                <button type="button" className="btn btn-default">
                  View
                </button>
                <button type="button" className="btn btn-default">
                  Edit
                </button>
              </div>
              <div className="updateTime">9 mins</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
