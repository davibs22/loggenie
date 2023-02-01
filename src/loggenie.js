const logLevels = {
  ERROR: 3,
  WARN: 2,
  INFO: 1,
  DEBUG: 0,
};

class Logger {
  constructor(logLevel = logLevels.INFO) {
    this.logLevel = logLevel;
  }

  log(level, message) {
    if (level >= this.logLevel) {
      console.log(
        `[${new Date().toISOString()}][${Object.keys(logLevels).find(
          (key) => logLevels[key] === level
        )}] ${message}`
      );
    }
  }

  error(message) {
    this.log(logLevels.ERROR, message);
  }

  warn(message) {
    this.log(logLevels.WARN, message);
  }

  info(message) {
    this.log(logLevels.INFO, message);
  }

  debug(message) {
    this.log(logLevels.DEBUG, message);
  }
}

module.exports = {
  Logger,
  logLevels,
};
