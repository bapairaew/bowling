import React, { Component, PropTypes } from 'react';
import Frame from '../Frame/Frame';
import LineBreaker from '../LineBreaker/LineBreaker';
import Score from '../Score/Score';
import './Frames.css';

class Frames extends Component {
  renderFrames(start, end, frames) {
    const frameElements = [];
    for (let i = start; i <= end; i++) {
      frameElements.push(
        <Frame key={i} frame={frames[i - 1]} />
      );
    }
    return frameElements;
  }

  render() {
    const { frames } = this.props;
    return (
      <div className="frames">
        { this.renderFrames(1, 6, frames) }
        <LineBreaker />
        { this.renderFrames(7, 10, frames) }
        <Score />
      </div>
    );
  }
}

Frames.propTypes = {
  frames: PropTypes.array.isRequired
};

export default Frames;
