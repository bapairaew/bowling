import React, { Component, PropTypes } from 'react';
import './Lane.css';
import LineBreaker from '../LineBreaker/LineBreaker';

class Lane extends Component {
  renderControllerButtons(start, end) {
    const { onRoll } = this.props;
    const buttons = [];
    for (let i = start; i <= end; i++) {
      buttons.push(
        <button key={i} className="lane__controller__button" onClick={e => onRoll(e, i)}>{i}</button>
      );
    }
    return buttons;
  }

  render() {
    const { onReset } = this.props;
    return (
      <div className="lane">
        <div className="lane__screen">
          <h1 className="lane__screen__header">Bowling Challenge</h1>
        </div>
        <div className="lane__controller">
          <h1 className="lane__controller__header">Please click the number of pins knocked down</h1>
          { this.renderControllerButtons(0, 6) }
          <LineBreaker />
          { this.renderControllerButtons(7, 10) }
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
