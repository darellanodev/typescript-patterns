import { describe, it, expect } from 'vitest'
import { SimpleCoffee, MilkDecorator, ChocolateDecorator } from './drink'

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
  it('should add chocolate to the coffee', () => {
    const coffee = new SimpleCoffee()
    const coffeeWithChocolate = new ChocolateDecorator(coffee)

    expect(coffeeWithChocolate.getDescription()).toBe(
      'Simple Coffee with Chocolate'
    )
    expect(coffeeWithChocolate.getCost()).toBe(1.2) // Assuming chocolate costs 0.2
  })
})
