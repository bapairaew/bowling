import React, { Component, PropTypes } from 'react';
import './Lane.css';
import LineBreaker from '../LineBreaker/LineBreaker';

class Lane extends Component {

  render() {
    const { onReset, onRoll } = this.props;
    return (
      <div className="lane">
        <div className="lane__screen">
          <h1 className="lane__screen__header">Bowling Challenge</h1>
        </div>
        <div className="lane__controller">
          <button className="lane__controller__button" onClick={e => onRoll(e, Math.floor(Math.random() * 11))}>Roll</button>
          <button className="lane__controller__button lane__controller__button--highlight" onClick={() => onReset()}>New Game</button>
        </div>
      </div>
    );
  }
}

Lane.propTypes = {
  onRoll: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired
}

export default Lane;
