import Logger from '../../logger';

describe('Check and Validate Logger', () => {
  test('Logger: Validate getPrefix Method', () => {
    expect(typeof Logger.getPrefix).toBe('function');
  });
});
