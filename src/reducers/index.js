import * as types from '../constants/ActionTypes';
import { isStrike } from '../utility';

const FRAME_NUMBER = 10;

const createFrames = (n) => {
  const frames = [];
  for (let i = 0; i < n; i++) {
    frames.push([null, null]);
  }
  return frames;
};

const initialState = {
  currentFrame: 0,
  frames: createFrames(FRAME_NUMBER)
};

// update the current roll in the frame
const roll = (frame, score) => {
  return frame[0] === null ? [score, null] : [frame[0], score];
};

const bowling = (state = initialState, action) => {
  switch (action.type) {
    case types.ROLL:
      if (state.currentFrame === FRAME_NUMBER) {
        return state;
      }

      // update only the current frame
      const frames = state.frames.map((f, i) => (i === state.currentFrame) ? roll(f, action.score) : f);
      const currentFrame = frames[state.currentFrame];
      return {
        frames: frames,
        // if 2 rolled or strike, move to next frame
        currentFrame: currentFrame[1] !== null || isStrike(currentFrame) ? state.currentFrame + 1 : state.currentFrame
      };
    case types.RESET:
      return {
        currentFrame: 0,
        frames: state.frames.map(f => [null, null])
      };
    default:
      return state;
  }
}

export default bowling;
