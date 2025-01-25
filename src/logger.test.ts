import { describe, it, expect } from 'vitest'
import Logger from './logger'

describe('logger', () => {
  it('should return the same instance', () => {
    const logger1 = Logger.getInstance()
    const logger2 = Logger.getInstance()
    expect(logger1).toBe(logger2)
  })
  it('should log a message', () => {
    const logger = Logger.getInstance()
    logger.log('Test log message')
    expect(logger.getLogs()).toContain('Test log message')
  })
})
