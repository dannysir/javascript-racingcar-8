import App from '../src/App.js';
import { getLogSpy, mockQuestions, mockRandoms } from '../__mocks__/mocks.js';
import { INPUT_QUESTION_1, INPUT_QUESTION_2 } from '../src/constants.js';

describe('통합 테스트', () => {
  test('기능 테스트', async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ['pobi,woni', '1'];
    const logs = ['pobi : -', 'woni : ', '최종 우승자 : pobi'];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([MOVING_FORWARD, STOP]);

    // when
    const app = new App();
    await app.run();

    // then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('입력 문자열 출력 테스트', async () => {
    const inputs = ['san', '1'];
    const QUESTIONS = [INPUT_QUESTION_1, INPUT_QUESTION_2];

    mockQuestions(inputs);

    const app = new App();
    await app.run();

    QUESTIONS.forEach((questionString) => {
      expect(MissionUtils.Console.readLineAsync).toHaveBeenCalledWith(
        expect.stringContaining(questionString)
      );
    });
  });

  test.each(['dannysir', 'seo, san, dannysir', '', '     ,san', '!!!,san', '@@@@@'])(
    '[예외 테스트] 참가자 테스트 - 입력 : %s',
    async (input) => {
      mockQuestions(input);

      const app = new App();
      await expect(app.run()).reject.toThrow('[ERROR]');
    }
  );
});
