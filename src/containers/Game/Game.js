import React, { Component } from 'react';
import Frames from '../../components/Frames/Frames';
import Lane from '../../components/Lane/Lane';
import './Game.css';

class Game extends Component {
  render() {
    return (
      <div className="game">
        <Frames />
        <Lane />
      </div>
    );
  }
}

export default Game;
