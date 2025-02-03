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
