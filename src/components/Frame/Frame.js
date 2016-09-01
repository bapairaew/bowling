import React, { Component, PropTypes } from 'react';
import { isStrike, isSpare } from '../../utility';
import './Frame.css';

class Frame extends Component {
  renderFrame() {
    const { frame, score, showScore } = this.props;
    return (
      <div className="frame">
        <div className="frame__roll">
          <div className="frame__text">{ isStrike(frame) ? '' : frame[0]}</div>
        </div>
        <div className="frame__roll frame__roll--last">
          <div className="frame__text">{ isStrike(frame) ? 'x' : isSpare(frame) ? '/' : frame[1] }</div>
        </div>
        <div className="frame__score">
          <div className="frame__text">{showScore ? score : ''}</div>
        </div>
      </div>
    );
  }

  renderLastFrame(props) {
    const { frame, score, showScore } = this.props;
    return (
      <div className="frame frame--last">
        <div className="frame__roll">
          <div className="frame__text">{ isStrike(frame) ? 'x' : frame[0]}</div>
        </div>
        <div className="frame__roll">
          <div className="frame__text">{ isSpare(frame) ? '/' : frame[1] === 10 ? 'x' : frame[1] }</div>
        </div>
        <div className="frame__roll frame__roll--last">
          <div className="frame__text">{ frame[2] === 10 ? 'x' : frame[2] }</div>
        </div>
        <div className="frame__score">
          <div className="frame__text">{showScore ? score : ''}</div>
        </div>
      </div>
    );
  }

  render() {
    const { isLast } = this.props;
    return !isLast ? this.renderFrame() : this.renderLastFrame()
  }
}

Frame.propTypes = {
  frame: PropTypes.array.isRequired,
  score: PropTypes.number.isRequired,
  showScore: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired
};

export default Frame;
