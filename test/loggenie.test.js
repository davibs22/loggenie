const { Logger, logLevels } = require("../src/loggenie");

// Test suite for the LogGenie module
describe("LogGenie", () => {
  // Instance of the logger class
  let logger;

  // Create a new logger instance before each test
  beforeEach(() => {
    logger = new Logger(logLevels.DEBUG);
  });

  // Test case to verify error message logging
  it("should log an error message with the correct log level", () => {
    // Create a spy to capture console.log calls
    const spy = jest.spyOn(console, "log");
    // Error message to log
    const message = "This is an error message";

    // Call the error log method
    logger.error(message);

    // Verify that the spy was called with the correct arguments
    expect(spy).toHaveBeenCalledWith(expect.stringContaining(message));
    expect(spy).toHaveBeenCalledWith(expect.stringContaining(`[ERROR]`));

    // Reset and restore the spy
    spy.mockReset();
    spy.mockRestore();
  });

  // Test case to verify warning message logging
  it("should log a warning message with the correct log level", () => {
    // Create a spy to capture console.log calls
    const spy = jest.spyOn(console, "log");
    // Warning message to log
    const message = "This is a warning message";

    // Call the warning log method
    logger.warn(message);

    // Verify that the spy was called with the correct arguments
    expect(spy).toHaveBeenCalledWith(expect.stringContaining(message));
    expect(spy).toHaveBeenCalledWith(expect.stringContaining(`[WARN]`));

    // Reset and restore the spy
    spy.mockReset();
    spy.mockRestore();
  });

  // Test case to verify info message logging
  it("should log an info message with the correct log level", () => {
    // Create a spy to capture console.log calls
    const spy = jest.spyOn(console, "log");
    // Info message to log
    const message = "This is an info message";

    // Call the info log method
    logger.info(message);

    // Verify that the spy was called with the correct arguments
    expect(spy).toHaveBeenCalledWith(expect.stringContaining(message));
    expect(spy).toHaveBeenCalledWith(expect.stringContaining(`[INFO]`));

    // Reset and restore the spy
    spy.mockReset();
    spy.mockRestore();
  });

  // Test case to verify debug message logging
  it("should log a debug message with the correct log level", () => {
    // Create a spy to capture console.log calls
    const spy = jest.spyOn(console, "log");
    // Debug message to log
    const message = "This is a debug message";

    // Call the debug log method
    logger.debug(message);

    // Verify that the spy was called with the correct arguments
    expect(spy).toHaveBeenCalledWith(expect.stringContaining(message));
    expect(spy).toHaveBeenCalledWith(expect.stringContaining(`[DEBUG]`));

    // Reset and restore the spy
    spy.mockReset();
    spy.mockRestore();
  });
});
