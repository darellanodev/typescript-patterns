interface RouteStrategy {
  calculateRoute(from: string, to: string): string
}

export class WalkingStrategy implements RouteStrategy {
  calculateRoute(from: string, to: string): string {
    return `Walk from ${from} to ${to}`
  }
}

export class NavigationSystem {
  constructor(private strategy: RouteStrategy) {}

  calculateRoute(from: string, to: string): string {
    return this.strategy.calculateRoute(from, to)
  }
}
