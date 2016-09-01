import React, { Component } from 'react';
import './Score.css';

class Score extends Component {
  render() {
    return (
      <div className="score">
        <div className="score__text">Total score</div>
        <div className="score__text score__text--highlight">400</div>
      </div>
    );
  }
}

export default Score;
