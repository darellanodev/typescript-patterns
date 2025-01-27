import Logger from './logger'
import { ExporterFactory, Task } from './exporter'
import { GameScoreTracker, GameObserver } from './gameScoreTracker'

const logger = Logger.getInstance()

logger.log('Starting the application')
logger.log('Application started')
logger.log('Application finished')

const exporterFactory = new ExporterFactory()
const exporter1 = exporterFactory.create('txt')
const exporter2 = exporterFactory.create('json')
const tasks: Task[] = [
  { name: 'Task 1', creationDate: new Date(), status: 'completed' },
  { name: 'Task 2', creationDate: new Date(), status: 'completed' },
]
const data1 = exporter1.getData(tasks)
const data2 = exporter2.getData(tasks)

console.log(logger.getLogs().join('\n'))

console.log(data1)
console.log(data2)

// test gameScoreTracker
const gameScoreTracker = new GameScoreTracker()
const observer1: GameObserver = {
  update: (score: number) => console.log(`I'm the observer 1: ${score}`),
}
const observer2: GameObserver = {
  update: (score: number) => console.log(`I'm the observer 2: ${score}`),
}
gameScoreTracker.subscribe(observer1)
gameScoreTracker.subscribe(observer2)

gameScoreTracker.setScore(100)
