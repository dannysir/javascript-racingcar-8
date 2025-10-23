import { ERROR } from '../constants.js';

const validateEachName = (name, duplicate) => {
  if (name.trim() !== name) {
    return false;
  }

  if (name.length <= 0 || name.length > 5) {
    return false;
  }

  return !duplicate.has(name);
};

export const validateNameInput = (input) => {
  let flag = true;

  const nameArray = input.split(',');
  const duplicate = new Set();

  for (const name of nameArray) {
    if (!validateEachName(name, duplicate)) {
      flag = false;
      break;
    }
    duplicate.add(name);
  }

  if (!flag) {
    throw new Error(ERROR.WRONG_NAME_FORMAT);
  }

  return flag;
};

export const validateNumberInput = (input) => {
  let flag = !isNaN(input);

  if (input === '' || input.trim() !== input) flag = false;
  if (flag) {
    const n = Number(input);
    if (n < 0) flag = false;
  }

  if (!flag) {
    throw new Error(ERROR.WRONG_NUM_FORMAT);
  }
  return flag;
};
