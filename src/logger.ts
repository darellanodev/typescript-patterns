class Logger {
  private static instance: Logger

  // private constructor to prevent instantiation
  private constructor() {}

  private logStore: string[] = []

  public log(message: string): void {
    this.logStore.push(message)
  }

  public getLogs(): string[] {
    return this.logStore
  }

  // static method to get the instance
  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger()
    }
    return Logger.instance
  }
}

export default Logger
