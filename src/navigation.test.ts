import { describe, it, expect } from 'vitest'
import {
  NavigationSystem,
  WalkingStrategy,
  DrivingStrategy,
} from './navigation'

describe('NavigationSystem', () => {
  it('should calculate route for walking', () => {
    const navigation = new NavigationSystem(new WalkingStrategy())
    const route = navigation.calculateRoute('A', 'B')
    expect(route).toBe('Walk from A to B')
  })
  it('should calculate route for driving', () => {
    const navigation = new NavigationSystem(new DrivingStrategy())
    const route = navigation.calculateRoute('A', 'B')
    expect(route).toBe('Drive from A to B')
  })
  it('should replace the route method in run time', () => {
    const navigation = new NavigationSystem(new WalkingStrategy())
    let route = navigation.calculateRoute('A', 'B')
    expect(route).toBe('Walk from A to B')

    navigation.setStrategy(new DrivingStrategy())
    route = navigation.calculateRoute('A', 'B')
    expect(route).toBe('Drive from A to B')
  })
})
