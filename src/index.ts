import Logger from './logger'

const logger = Logger.getInstance()

logger.log('Starting the application')
logger.log('Application started')
logger.log('Application finished')

console.log(logger.getLogs().join('\n'))
