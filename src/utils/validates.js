import { ERROR } from '../constants.js';

export const validateNameInput = (input) => {
  let flag = true;

  if (!flag) {
    throw new Error(ERROR.WRONG_NAME_FORMAT);
  }

  return flag;
};

export const validateNumberInput = (input) => {
  let flag = true;

  if (!flag) {
    throw new Error(ERROR.WRONG_NUM_FORMAT);
  }
  return flag;
};
