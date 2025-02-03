import { describe, it, expect } from 'vitest'
import { SimpleCoffee, MilkDecorator } from './drink'

describe('Drink', () => {
  it('should create a simple coffee', () => {
    const coffee = new SimpleCoffee()
    expect(coffee.getDescription()).toBe('Simple Coffee')
    expect(coffee.getCost()).toBe(1.0)
  })
})

describe('Drink decorators', () => {
  it('should add milk to the coffee', () => {
    const coffee = new SimpleCoffee()
    const coffeeWithMilk = new MilkDecorator(coffee)

    expect(coffeeWithMilk.getDescription()).toBe('Simple Coffee with Milk')
    expect(coffeeWithMilk.getCost()).toBe(1.5) // Assuming milk costs 0.5
  })
})
