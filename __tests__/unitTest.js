import { ERROR } from '../src/constants.js';
import { validateNameInput } from '../src/utils/validates.js';

describe('유효성', () => {
  describe('validateNameInput - 정상 입력', () => {
    test.each(['seo,san', 'danny,sanE', 'san!,san!!', '@@@@@'])(
      'validateNameInput - 정상 : %s',
      (input) => {
        const result = validateNameInput(input);
        expect(result).toBe(true);
      }
    );
  });

  describe('validateNameInput - 비정상 입력', () => {
    test.each(['dannysir', 'seo, san, dannysir', '', '     ,san', 'san,san'])(
      'validateNameInput - 비정상 : %s',
      (input) => {
        expect(() => validateNameInput(input)).toThrow(ERROR.WRONG_NAME_FORMAT);
      }
    );
  });

  describe('validateNumberInput - 정상 입력', () => {
    test.each(['1', '0', '111'])('validateNumberInput - 정상 : %s', (input) => {
      const result = validateNameInput(input);
      expect(result).toBe(true);
    });
  });

  describe('validateNumberInput - 비정상 입력', () => {
    test.each(['-1', 'dannysir', '', '     '])('validateNumberInput - 비정상 : %s', (input) => {
      expect(() => validateNameInput(input)).toThrow(ERROR.WRONG_NUM_FORMAT);
    });
  });
});
