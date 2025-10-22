import { INPUT_QUESTION_1, INPUT_QUESTION_2 } from './constants.js';
import { Console, Random } from '@woowacourse/mission-utils';
import { validateNameInput, validateNumberInput } from './utils/validates.js';

class App {
  async run() {
    try {
      const input1 = await Console.readLineAsync(INPUT_QUESTION_1);
      validateNameInput(input1);
      const input2 = await Console.readLineAsync(INPUT_QUESTION_2);
      validateNumberInput(input2);
    } catch (error) {}
    Console.print(error.message);
    throw error;
  }
}

export default App;
