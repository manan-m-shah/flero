import chalk from "chalk";
import logLevels from "./logLevels.js";

const log = (message, level = logLevels.GENERAL) => {
  let logFunction;

  switch (level) {
    case logLevels.WARNING:
      message = chalk.yellow(message);
      logFunction = console.warn;
      break;
    case logLevels.ERROR:
      message = chalk.red(message);
      logFunction = console.error;
      break;
    case logLevels.INFO:
      message = chalk.blue(message);
      logFunction = console.info;
      break;
    case logLevels.SUCCESS:
      message = chalk.green(message);
      logFunction = console.log;
      break;
    case logLevels.DEBUG:
      message = chalk.gray(message);
      logFunction = console.debug;
      break;
    default:
      message = chalk.white(message);
      logFunction = console.log;
  }

  logFunction(message);
};

const logWarning = (message) => {
  log(message, logLevels.WARNING);
};

const logError = (message) => {
  log(message, logLevels.ERROR);
};

const logInfo = (message) => {
  log(message, logLevels.INFO);
};

const logSuccess = (message) => {
  log(message, logLevels.SUCCESS);
};

const logDebug = (message) => {
  log(message, logLevels.DEBUG);
};

export { logWarning, logError, logInfo, logSuccess, logDebug };

export default log;
