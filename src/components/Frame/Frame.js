import React, { Component } from 'react';
import './Frame.css';

class Frame extends Component {
  render() {
    return (
      <div className="frame">
        <div className="frame__roll">
          <div className="frame__text">1</div>
        </div>
        <div className="frame__roll frame__roll--last">
          <div className="frame__text">2</div>
        </div>
        <div className="frame__score">
          <div className="frame__text">20</div>
        </div>
      </div>
    );
  }
}

export default Frame;
