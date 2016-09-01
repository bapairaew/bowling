import React, { Component, PropTypes } from 'react';
import Frames from '../../components/Frames/Frames';
import Lane from '../../components/Lane/Lane';
import { connect } from 'react-redux'
import { roll, reset } from '../../actions'
import './Game.css';

class Game extends Component {
  render() {
    const { dispatch, frames } = this.props;
    return (
      <div className="game">
        <Frames frames={frames} />
        <Lane onRoll={(e, s) => { dispatch(roll(s)) }} onReset={() => { dispatch(reset()) }} />
      </div>
    );
  }
}

Game.propTypes = {
  frames: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect(state => { return { frames: state.frames }; })(Game);
