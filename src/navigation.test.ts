import { describe, it, expect } from 'vitest'
import { NavigationSystem, WalkingStrategy } from './navigation.ts'

describe('NavigationSystem', () => {
  it('should calculate route for walking', () => {
    const navigation = new NavigationSystem(new WalkingStrategy())
    const route = navigation.calculateRoute('A', 'B')
    expect(route).toBe('Walk from A to B')
  })
})
