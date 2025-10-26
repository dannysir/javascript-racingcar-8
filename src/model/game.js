import { Player } from './player.js';
import { NAME_DELIMITER, OUTPUT_WINNER_DELIMITER, PROGRESS_BAR } from '../constants.js';
import { Console } from '@woowacourse/mission-utils';

export class Game {
  #players;
  constructor() {
    this.#players = [];
  }

  addPlayers(input) {
    const cars = input.split(NAME_DELIMITER);
    cars.forEach((name) => {
      this.#players.push(new Player(name));
    });
  }

  play(n) {
    for (let i = 0; i < n; i++) {
      this.#players.forEach((player) => {
        player.move();
      });
      this.#print();
    }
  }

  getWinner() {
    const maxValue = Math.max(...this.#players.map((p) => p.getValue()));

    const winners = this.#players.filter((p) => p.getValue() === maxValue).map((p) => p.getName());
    return winners.join(OUTPUT_WINNER_DELIMITER);
  }

  #print() {
    const result = this.#players.map((player) => {
      const value = player.getValue();
      return `${player.getName()} : ${PROGRESS_BAR.repeat(value)}`;
    });

    Console.print(result.join('\n') + '\n');
  }
}
