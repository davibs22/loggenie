// Import the Logger and logLevels modules from the loggenie file
const { Logger, logLevels } = require("./loggenie");

// Create a new instance of the Logger with log level set to DEBUG
const logger = new Logger(logLevels.DEBUG);

// Log an error message with the log level "ERROR"
logger.error("Critical Error");

// Log a warning message with the log level "WARNING"
logger.warn("Attention: Something strange is happening");

// Log an informational message with the log level "INFO"
logger.info("Important information");

// Log a debug message with the log level "DEBUG"
logger.debug("Details for debugging");
