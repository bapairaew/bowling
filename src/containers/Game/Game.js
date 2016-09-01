import React, { Component, PropTypes } from 'react';
import Frames from '../../components/Frames/Frames';
import Lane from '../../components/Lane/Lane';
import { connect } from 'react-redux'
import { roll, reset } from '../../actions'
import { getScore } from '../../utility';
import './Game.css';

class Game extends Component {
  getPins(frame) {
    return 10 - getScore(frame[0]) - getScore(frame[1]);
  }

  render() {
    const { dispatch, frames, currentFrame } = this.props;
    return (
      <div className="game">
        <Frames frames={frames} currentFrame={currentFrame} />
        <Lane onRoll={(e, s) => { dispatch(roll(s)) }} onReset={() => { dispatch(reset()) }} pins={this.getPins(frames[currentFrame])} />
      </div>
    );
  }
}

Game.propTypes = {
  frames: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect(state => state)(Game);
