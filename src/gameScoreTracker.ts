export interface GameObserver {
  update: (score: number) => void
}

export class GameScoreTracker {
  observers: GameObserver[] = []
  currentScore: number = 0

  subscribe(observer: GameObserver) {
    this.observers.push(observer)
  }

  setScore(score: number) {
    this.currentScore = score
    this.notifyObservers()
  }

  private notifyObservers() {
    this.observers.forEach((observer) => observer.update(this.currentScore))
  }
}
