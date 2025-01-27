import { describe, it, expect } from 'vitest'
import { GameScoreTracker, GameObserver } from './gameScoreTracker'

describe('GameScoreTracker', () => {
  it('should allow an observer to subscribe to the gameScoreTracker', () => {
    const gameScoreTracker = new GameScoreTracker()
    const observer: GameObserver = { update: (score: number) => {} }

    gameScoreTracker.subscribe(observer)

    expect(gameScoreTracker.observers).toContain(observer)
  })
})
