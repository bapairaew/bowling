import React, { Component, PropTypes } from 'react';
import { isStrike, isSpare } from '../../utility';
import './Frame.css';

class Frame extends Component {
  render() {
    const { frame, score, showScore } = this.props;
    return (
      <div className="frame">
        <div className="frame__roll">
          <div className="frame__text">{ isStrike(frame) ? '' : frame[0]}</div>
        </div>
        <div className="frame__roll frame__roll--last">
          <div className="frame__text">{ isStrike(frame) ? 'x' : isSpare(frame) ? '/' : frame[1]}</div>
        </div>
        <div className="frame__score">
          <div className="frame__text">{showScore ? score : ''}</div>
        </div>
      </div>
    );
  }
}

Frame.propTypes = {
  frame: PropTypes.array.isRequired,
  score: PropTypes.number.isRequired,
  showScore: PropTypes.bool.isRequired
};

export default Frame;
