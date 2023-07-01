const logLevels = {
  GENERAL: 0,
  WARNING: 1,
  ERROR: 2,
  INFO: 3,
  SUCCESS: 4,
  DEBUG: 5,
  MIN_LEVEL: 0,
  MAX_LEVEL: 5,
  getLabel(level) {
    switch (level) {
      case 0:
        return "GENERAL";
      case 1:
        return "WARNING";
      case 2:
        return "ERROR";
      case 3:
        return "INFO";
      case 4:
        return "SUCCESS";
      case 5:
        return "DEBUG";
      default:
        return "UNKNOWN";
    }
  },
};

export default logLevels;
