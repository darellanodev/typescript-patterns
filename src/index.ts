import Logger from './logger'
import { ExporterFactory, Task } from './exporter'

const logger = Logger.getInstance()

logger.log('Starting the application')
logger.log('Application started')
logger.log('Application finished')

const exporterFactory = new ExporterFactory()
const exporter = exporterFactory.create('txt')
const tasks: Task[] = [
  { name: 'Task 1', creationDate: new Date(), status: 'completed' },
  { name: 'Task 2', creationDate: new Date(), status: 'completed' },
]
const data = exporter.getData(tasks)

console.log(logger.getLogs().join('\n'))
console.log(data)
