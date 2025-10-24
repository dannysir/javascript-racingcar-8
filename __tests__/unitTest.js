import { ERROR } from '../src/constants.js';
import { validateNameInput, validateNumberInput } from '../src/utils/validates.js';
import { Game } from '../src/model/game.js';
import { Player } from '../src/model/player.js';
import { getLogSpy, mockRandoms } from '../__mocks__/mocks.js';

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
      const result = validateNumberInput(input);
      expect(result).toBe(true);
    });
  });

  describe('validateNumberInput - 비정상 입력', () => {
    test.each(['-1', 'dannysir', '', '     '])('validateNumberInput - 비정상 : %s', (input) => {
      expect(() => validateNumberInput(input)).toThrow(ERROR.WRONG_NUM_FORMAT);
    });
  });
});

describe('Model', () => {
  describe('Game 모델', () => {
    let game;

    beforeEach(() => {
      game = new Game();
    });

    test('addPlayers - 플레이어 추가', () => {
      const players = ['pobi', 'crong', 'honux'];

      game.addPlayers(players);

      players.forEach((name, index) => {
        expect(game.getPlayers()[index]).toBeInstanceOf(Player);
        expect(game.getPlayers()[index].getName()).toBe(name);
      });
    });

    test('play - 게임 진행', () => {
      const players = ['pobi', 'crong', 'honux'];
      const N = 2;
      const GO = 4;
      const STOP = 3;
      const logs = ['pobi : -', 'crong : -', 'honux : ', 'pobi : -', 'crong : --', 'honux : '];
      const logSpy = getLogSpy();

      game.addPlayers(players);
      mockRandoms([GO, GO, STOP, STOP, GO, STOP]);
      game.play(N);

      logs.forEach((log) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
      });
    });

    test('getWinner - 우승자 발표', () => {
      const players = ['pobi', 'crong', 'honux'];
      const N = 2;
      const GO = 4;
      const STOP = 3;

      game.addPlayers(players);
      mockRandoms([GO, GO, STOP, STOP, GO, STOP]);
      game.play(N);
      const winner = game.getWinner();

      expect(winner).toEqual([players[1]]);
    });
  });

  describe('Player 모델', () => {
    let player;

    beforeEach(() => {
      player = new Player('dannysir');
    });

    test('move - 랜덤하게 움식임 결정', () => {
      const GO = 4;
      const STOP = 3;
      const result = [1, 1, 2];
      mockRandoms([GO, STOP, GO]);

      result.forEach((value) => {
        player.move();
        expect(player.getValue()).toBe(value);
      });
    });
  });
});
