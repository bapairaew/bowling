import * as types from '../constants/ActionTypes';
import { isStrike, isSpare } from '../utility';

const FRAME_NUMBER = 10;

const createFrames = (n) => {
  const frames = [];
  for (let i = 0; i < n; i++) {
    frames.push(i < n - 1 ? [null, null] : [null, null, null]);
  }
  return frames;
};

const initialState = {
  currentFrame: 0,
  frames: createFrames(FRAME_NUMBER)
};

// update the current roll in the frame
const roll = (frame, score) => {
  return frame[0] === null ?
    [score, null] :
    [frame[0], Math.min(score, 10 - frame[0])]; // not allow knocking down more than ten pins
};

// update the current roll for last frame
const rollLastFrame = (frame, score) => {
  if (frame[0] === null) {
    // first roll
    return [score, null, null];
  } else if (frame[1] === null) {
    // second roll
    return [frame[0],
      isStrike(frame) ? score : Math.min(score, 10 - frame[0]),  // not allow knocking down more than ten pins unless it is a strike
      null];
  } else if (isStrike(frame) || isSpare(frame)) {
    // third row
    // allow additional roll if strike or spare
    return [frame[0], frame[1],
      isSpare(frame) || frame[1] === 10 ? score : Math.min(score, 10 - frame[1])];  // not allow knocking down more than ten pins unless it is a spare or second strike
  } else {
    // not allow third row if not strike or spare
    return [frame[0], frame[1], null];
  }
};

const bowling = (state = initialState, action) => {
  switch (action.type) {
    case types.ROLL:
      if (state.currentFrame === FRAME_NUMBER) {
        return state;
      }

      // update only the current frame
      const frames = state.frames.map((f, i) => (i === state.currentFrame) ?
        state.currentFrame === FRAME_NUMBER - 1 ? rollLastFrame(f, action.score) : roll(f, action.score) : f);
      const currentFrame = frames[state.currentFrame];
      return {
        frames: frames,
        // if 2 rolled or strike, move to next frame
        // dont move if it is the last frame
        currentFrame: (currentFrame[1] !== null || isStrike(currentFrame)) && state.currentFrame < FRAME_NUMBER - 1 ?
          state.currentFrame + 1 : state.currentFrame
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
