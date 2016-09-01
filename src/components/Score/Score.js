import React, { Component, PropTypes } from 'react';
import './Score.css';

class Score extends Component {
  render() {
    const {score} = this.props;
    return (
      <div className="score">
        <div className="score__text">Total</div>
        <div className="score__text score__text--highlight">{score}</div>
      </div>
    );
  }
}

Score.propTypes = {
  score: PropTypes.number.isRequired
};

export default Score;
