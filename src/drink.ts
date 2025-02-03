export interface Drink {
  getDescription(): string
  getCost(): number
}

export class SimpleCoffee implements Drink {
  getDescription(): string {
    return 'Simple Coffee'
  }

  getCost(): number {
    return 1.0
  }
}

export class MilkDecorator implements Drink {
  #drink: Drink
  constructor(drink: Drink) {
    this.#drink = drink
  }
  getDescription(): string {
    return `${this.#drink.getDescription()} with Milk`
  }
  getCost(): number {
    return this.#drink.getCost() + 0.5
  }
}
