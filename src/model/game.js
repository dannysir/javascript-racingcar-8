import { Player } from './player.js';

export class Game {
  constructor() {
    this.cars = [];
  }

  addPlayers(cars) {
    cars.forEach((name) => {
      this.cars.push(new Player(name));
    });
  }

  play(n) {
    for (let i = 0; i < this.n; i++) {
      // 게임 진행.
      this.#print();
    }
  }

  //게임 결과
  #print() {}

  //우승자
  getWinner() {}
}
