import {CONSOLE, RESPONSE_STATUS_CODE} from '../../constants';

describe('Check and Validate Constants --> CONSOLE', () => {
  test('CONSOLE: CHECK DEBUG', () => {
    expect(CONSOLE.debug).toEqual('DEBUG');
  });
  test('CONSOLE: CHECK INFO', () => {
    expect(CONSOLE.info).toEqual('INFO');
  });
  test('CONSOLE: CHECK WARN', () => {
    expect(CONSOLE.warn).toEqual('WARN');
  });
  test('CONSOLE: CHECK ERROR', () => {
    expect(CONSOLE.error).toEqual('ERROR');
  });
});

describe('Check and Validate Constants --> RESPONSE_STATUS_CODE', () => {
  test('RESPONSE_STATUS_CODE: CHECK SUCCESS', () => {
    expect(RESPONSE_STATUS_CODE.SUCCESS).toEqual(200);
  });
  test('RESPONSE_STATUS_CODE: CHECK ERROR', () => {
    expect(RESPONSE_STATUS_CODE.ERROR).toEqual(500);
  });
  test('RESPONSE_STATUS_CODE: CHECK NOT_FOUND', () => {
    expect(RESPONSE_STATUS_CODE.NOT_FOUND).toEqual(404);
  });
});
