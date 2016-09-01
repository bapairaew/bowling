import * as types from '../constants/ActionTypes';

export const roll = (score) => {
  return { type: types.ROLL, score };
};

export const reset = () => {
  return { type: types.RESET };
};
