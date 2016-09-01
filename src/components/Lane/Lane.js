import React, { Component } from 'react';
import './Lane.css';
import LineBreaker from '../LineBreaker/LineBreaker';

class Lane extends Component {
  render() {
    return (
      <div className="lane">
        <div className="lane__screen">
          <h1 className="lane__screen__header">Bowling Challenge</h1>
        </div>
        <div className="lane__controller">
          <h1 className="lane__controller__header">Please click the number of pins knocked down</h1>
          <button className="lane__controller__button">0</button>
          <button className="lane__controller__button">1</button>
          <button className="lane__controller__button">2</button>
          <button className="lane__controller__button">3</button>
          <button className="lane__controller__button">4</button>
          <button className="lane__controller__button">5</button>
          <LineBreaker />
          <button className="lane__controller__button">6</button>
          <button className="lane__controller__button">7</button>
          <button className="lane__controller__button">8</button>
          <button className="lane__controller__button">9</button>
          <button className="lane__controller__button lane__controller__button--highlight">Reset</button>
        </div>
      </div>
    );
  }
}

export default Lane;
