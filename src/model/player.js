import { Random } from '@woowacourse/mission-utils';
import { DEFAULT_VALUE, GO, RANDOM_RANGE_END, RANDOM_RANGE_START } from '../constants.js';

export class Player {
  #name;
  #value;
  constructor(name) {
    this.#name = name;
    this.#value = DEFAULT_VALUE;
  }

  move() {
    const num = Random.pickNumberInRange(RANDOM_RANGE_START, RANDOM_RANGE_END);
    if (num >= GO) {
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
