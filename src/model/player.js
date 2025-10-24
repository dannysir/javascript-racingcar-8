import { Random } from '@woowacourse/mission-utils';

export class Player {
  #name;
  #value;
  constructor(name) {
    this.#name = name;
    this.#value = 0;
  }

  move() {
    const num = Random.pickNumberInRange(0, 9);
    if (num >= 4) {
      this.#value++;
    }
  }

  getName() {
    return this.#name;
  }

  getValue() {
    return this.#value;
  }
}
