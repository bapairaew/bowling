import React, { Component, PropTypes } from 'react';
import Frame from '../Frame/Frame';
import LineBreaker from '../LineBreaker/LineBreaker';
import Score from '../Score/Score';
import { getScore, isStrike, isSpare } from '../../utility';
import './Frames.css';

class Frames extends Component {
  // TODO: simplify this
  // calculate cummulative score from frame 0 to n
  calculateScore(frames, n) {
    let score = 0;
    for (let i = 0; i <= n; i++) {
      const frame = frames[i];
      if (i === frames.length - 1) {
        score += getScore(frame[0]) + getScore(frame[1]) + getScore(frame[2]);
      } else if (i < frames.length - 1) {
        // strike / spare bonus
        const nextFrame = frames[i + 1];
        // check if next frame is already rolled
        if (nextFrame && nextFrame[0] !== null) {
          if (isSpare(frame)) {
            score += getScore(nextFrame[0]);
          } else if (isStrike(frame)) {
            score += getScore(nextFrame[0]);
            if (!isStrike(nextFrame) || i === frames.length - 2) {
              score += getScore(nextFrame[1]);
            } else if (i + 2 < frames.length) {
              score += getScore(frames[i + 2][0]);
            }
          }
        }

        // pin scores
        score += Math.min(getScore(frame[0]) + getScore(frame[1]), 10);
      }
    }
    return score;
  }

  renderFrames(start, end, frames, currentFrameIndex) {
    const frameElements = [];
    for (let i = start; i <= end; i++) {
      // show score frames before current frame and the current frame if there is a first roll
      const showScore = i <= currentFrameIndex && frames[i][0] !== null;
      frameElements.push(
        <Frame key={i} frame={frames[i]} score={this.calculateScore(frames, i)} showScore={showScore} isLast={i === frames.length - 1} />
      );
    }
    return frameElements;
  }

  render() {
    const { frames, currentFrame } = this.props;
    return (
      <div className="frames">
        { this.renderFrames(0, 5, frames, currentFrame) }
        <LineBreaker />
        { this.renderFrames(6, 9, frames, currentFrame) }
        <Score score={this.calculateScore(frames, currentFrame)} />
      </div>
    );
  }
}

Frames.propTypes = {
  frames: PropTypes.array.isRequired,
  currentFrame: PropTypes.number.isRequired
};

export default Frames;
