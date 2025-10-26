import { ERROR } from '../constants.js';

const validateEachName = (name, duplicate) => {
  const hasWhiteSpace = name.trim() !== name;
  const invalidateLength = name.length <= 0 || name.length > 5;
  const duplicated = duplicate.has(name);

  return !hasWhiteSpace && !invalidateLength && !duplicated;
};

export const validateNameInput = (input) => {
  const nameArray = input.split(',');
  const duplicate = new Set();

  for (const name of nameArray) {
    if (!validateEachName(name, duplicate)) {
      throw new Error(ERROR.WRONG_NAME_FORMAT);
    }
    duplicate.add(name);
  }

  return true;
};

export const validateNumberInput = (input) => {
  const isEmpty = input === '';
  const hasWhiteSpace = input.trim() !== input;
  const notNumber = isNaN(input);
  const isNegative = !notNumber && Number(input) < 0;

  const flag = isEmpty || hasWhiteSpace || notNumber || isNegative;

  if (flag) {
    throw new Error(ERROR.WRONG_NUM_FORMAT);
  }
  return !flag;
};
