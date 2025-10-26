export const INPUT_QUESTION_1 = '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n';

export const INPUT_QUESTION_2 = '시도할 횟수는 몇 회인가요?\n';

export const OUTPUT_PROCESS_RESULT = '\n실행 결과';

export const OUTPUT_WINNER = '최종 우승자 : ';

const E_HEADER = '[ERROR] ';

export const ERROR = {
  WRONG_NAME_FORMAT: E_HEADER + '잘못된 이름 형식입니다.',
  WRONG_NUM_FORMAT: E_HEADER + '숫자만 입력해주세요.',
};

export const PROGRESS_BAR = '-';

export const GO = 4;

export const [RANDOM_RANGE_START, RANDOM_RANGE_END] = [0, 9];

export const [NAME_RANGE_MIN, NAME_RANGE_MAX] = [0, 5];

export const DEFAULT_VALUE = 0;

export const NAME_DELIMITER = ',';

export const OUTPUT_WINNER_DELIMITER = ', ';
