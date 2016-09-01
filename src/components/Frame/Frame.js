import React, { Component, PropTypes } from 'react';
import './Frame.css';

class Frame extends Component {
  render() {
    const { frame } = this.props;
    return (
      <div className="frame">
        <div className="frame__roll">
          <div className="frame__text">{frame[0]}</div>
        </div>
        <div className="frame__roll frame__roll--last">
          <div className="frame__text">{frame[1]}</div>
        </div>
        <div className="frame__score">
          <div className="frame__text">20</div>
        </div>
      </div>
    );
  }
}

Frame.propTypes = {
  frame: PropTypes.array.isRequired
};

export default Frame;
