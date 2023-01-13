/**
 * Contains the constants required by the app/lib/server/script.
 */

/**
 * This constants will be used in Logger
 * @constant {Object} CONSOLE
 * @property {string} info
 * @property {string} warn
 * @property {string} error
 * @property {string} debug
 */
export const CONSOLE = {
  info: 'INFO',
  warn: 'WARN',
  error: 'ERROR',
  debug: 'DEBUG',
};

/**
 * This we can enhance as we start using it, in case of server.
 * @constant {Object} RESPONSE_STATUS_CODE
 * @property {number} SUCCESS
 * @property {number} NOT_FOUND
 * @property {number} ERROR
 */
export const RESPONSE_STATUS_CODE = {
  SUCCESS: 200,
  NOT_FOUND: 404,
  ERROR: 500,
};
