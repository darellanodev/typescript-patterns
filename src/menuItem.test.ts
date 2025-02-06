import { describe, it, expect } from 'vitest'
import { MenuItem } from './menuItem'

describe('MenuItem', () => {
  it('should create a menu item', () => {
    const menuItem = new MenuItem('File')
    expect(menuItem.name).toBe('File')
  })
})
