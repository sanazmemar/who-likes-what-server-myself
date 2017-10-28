let winston = require('winston');

module.exports = (function() {

  const LOGS_BASE_URL = './logs/';

  return new (winston.Logger)({
    transports: [
      new winston.transports.Console({
        colorize: true
      }),
      new winston.transports.File({
        name: 'info-file',
        filename: LOGS_BASE_URL + 'filelog-info.log',
        level: 'info'
      }),
      new winston.transports.File({
        name: 'error-file',
        filename: LOGS_BASE_URL + 'filelog-error.log',
        level: 'error'
      })
    ]
  });

})();
