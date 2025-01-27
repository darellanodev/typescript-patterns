export interface GameObserver {
  update: (score: number) => void
}

export class GameScoreTracker {
  observers: GameObserver[] = []

  subscribe(observer: GameObserver) {
    this.observers.push(observer)
  }
}
