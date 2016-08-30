import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Game from './containers/Game/Game';
import bowlingApp from './reducers'
import './index.css';

let store = createStore(bowlingApp)

ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root')
);
