import React, { Component } from 'react';
import Frame from '../Frame/Frame';
import LineBreaker from '../LineBreaker/LineBreaker';
import Score from '../Score/Score';
import './Frames.css';

class Frames extends Component {
  renderFrames(n) {
    let frames = [];
    for (let i = 0; i < n; i++) {
      frames.push(
        <Frame key={i} />
      );
    }
    return frames;
  }

  render() {
    return (
      <div className="frames">
        { this.renderFrames(6) }
        <LineBreaker />
        { this.renderFrames(4) }
        <Score />
      </div>
    );
  }
}

export default Frames;
