import React, { Component, PropTypes } from 'react';
import './Lane.css';
import Pins from '../Pins/Pins';

class Lane extends Component {
  randomVisibilities(n) {
    const visibilities = [];
    while (visibilities.length < n) {
      const x = Math.floor(Math.random() * 10)
      if (visibilities.indexOf(x) === -1) {
        visibilities.push(x);
      }
    }
    return visibilities;
  }

  render() {
    const { onReset, onRoll, pins } = this.props;
    const visibilities = this.randomVisibilities(pins);
    return (
      <div className="lane">
        <div className="lane__screen">
          <Pins pins={pins} visibilities={visibilities} />
          <div className="bowling"></div>
        </div>
        <div className="lane__controller">
          <button className="lane__controller__button" onClick={e => onRoll(e, Math.floor(Math.random() * 11))}>Roll</button>
          <button className="lane__controller__button lane__controller__button--highlight" onClick={e => onReset(e)}>New Game</button>
        </div>
      </div>
    );
  }
}

Lane.propTypes = {
  onRoll: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  pins: PropTypes.number.isRequired
}

export default Lane;
