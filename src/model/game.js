import { Player } from './player.js';
import { PROGRESS_BAR } from '../constants.js';
import { Console } from '@woowacourse/mission-utils';

export class Game {
  #players;
  #max;
  constructor() {
    this.#players = [];
    this.#max = null;
  }

  addPlayers(input) {
    const cars = input.split(',');
    cars.forEach((name) => {
      this.#players.push(new Player(name));
    });
  }

  play(n) {
    for (let i = 0; i < +n; i++) {
      this.#players.forEach((player) => {
        player.move();
        this.#max = Math.max(this.#max, player.getValue());
      });
      this.#print();
    }
  }

  getWinner() {
    const winner = [];
    this.#players.forEach((player) => {
      if (player.getValue() === this.#max) {
        winner.push(player.getName());
      }
    });

    return winner;
  }

  getPlayers() {
    return this.#players;
  }

  #print() {
    const result = [];

    this.#players.forEach((players) => {
      const value = players.getValue();
      result.push(`${players.getName()} : ${PROGRESS_BAR.repeat(value)}`);
    });

    Console.print(result.join('\n') + '\n');
  }
}
