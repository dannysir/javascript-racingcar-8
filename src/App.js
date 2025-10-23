import { INPUT_QUESTION_1, INPUT_QUESTION_2, OUTPUT_WINNER } from './constants.js';
import { Console, Random } from '@woowacourse/mission-utils';
import { validateNameInput, validateNumberInput } from './utils/validates.js';
import { Game } from './model/game.js';

class App {
  async run() {
    try {
      const input1 = await Console.readLineAsync(INPUT_QUESTION_1);
      validateNameInput(input1);
      const cars = input1.split(',');

      const input2 = await Console.readLineAsync(INPUT_QUESTION_2);
      validateNumberInput(input2);
      const n = Number(input2);

      const game = new Game();
      game.addPlayers(cars);
      game.play(n);

      Console.print(OUTPUT_WINNER + game.getWinner());
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }
}

export default App;
