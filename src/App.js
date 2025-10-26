import {
  INPUT_QUESTION_1,
  INPUT_QUESTION_2,
  OUTPUT_PROCESS_RESULT,
  OUTPUT_WINNER,
} from './constants.js';
import { Console, Random } from '@woowacourse/mission-utils';
import { validateNameInput, validateNumberInput } from './utils/validates.js';
import { Game } from './model/game.js';

class App {
  async run() {
    try {
      const game = new Game();

      const input1 = await Console.readLineAsync(INPUT_QUESTION_1);
      validateNameInput(input1);
      game.addPlayers(input1);

      const input2 = await Console.readLineAsync(INPUT_QUESTION_2);
      validateNumberInput(input2);

      Console.print(OUTPUT_PROCESS_RESULT);
      game.play(input2);

      const winners = game.getWinner();
      Console.print(OUTPUT_WINNER + winners.join(', '));
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }
}

export default App;
