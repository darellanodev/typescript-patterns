import { test, expect } from 'vitest'
import { sum } from './sum'

test('sum function', () => {
  const result = sum(2, 3)
  expect(result).toBe(5)
})
