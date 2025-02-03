import { describe, it, expect } from 'vitest'
import { SimpleCoffee } from './drink'

describe('Drink', () => {
  it('should create a simple coffee', () => {
    const coffee = new SimpleCoffee()
    expect(coffee.getDescription()).toBe('Simple Coffee')
    expect(coffee.getCost()).toBe(1.0)
  })
})
