import { describe, it, expect, vi } from 'vitest'
import { GameScoreTracker, GameObserver } from './gameScoreTracker'

describe('GameScoreTracker', () => {
  it('should allow an observer to subscribe to the gameScoreTracker', () => {
    const gameScoreTracker = new GameScoreTracker()
    const observer: GameObserver = { update: (score: number) => {} }

    gameScoreTracker.subscribe(observer)

    expect(gameScoreTracker.observers).toContain(observer)
  })
  it('should notify the observers when the score changes', () => {
    const gameScoreTracker = new GameScoreTracker()
    const observer: GameObserver = { update: vi.fn() }
    gameScoreTracker.subscribe(observer)

    gameScoreTracker.setScore(100)

    expect(observer.update).toHaveBeenCalledWith(100)
  })
  it('should allow an observer to unsubscribe', () => {
    const gameScoreTracker = new GameScoreTracker()
    const observer: GameObserver = { update: vi.fn() }
    gameScoreTracker.subscribe(observer)
    expect(gameScoreTracker.observers).contains(observer)
    gameScoreTracker.unsubscribe(observer)
    expect(gameScoreTracker.observers).not.contains(observer)
  })
})
