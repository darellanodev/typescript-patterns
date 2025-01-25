class Logger {
  private static instance: Logger

  // private constructor to prevent instantiation
  private constructor() {}

  // static method to get the instance
  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger()
    }
    return Logger.instance
  }
}

export default Logger
