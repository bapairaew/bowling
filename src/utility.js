export const getScore = score => score ? score : 0;
export const isStrike = frame => getScore(frame[0]) === 10;
export const isSpare = frame => getScore(frame[0]) < 10 && getScore(frame[0]) + getScore(frame[1]) >= 10;
