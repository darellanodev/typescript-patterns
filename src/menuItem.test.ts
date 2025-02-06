import { describe, it, expect } from 'vitest'
import { MenuItem } from './menuItem'

describe('MenuItem', () => {
  it('should create a menu item', () => {
    const menuItem = new MenuItem('File')
    expect(menuItem.name).toBe('File')
  })
  it('should add items and count them', () => {
    const fileMenu = new MenuItem('File')
    fileMenu.addChild(new MenuItem('Open'))
    fileMenu.addChild(new MenuItem('New'))
    expect(fileMenu.getChildCount()).toBe(2)
  })
})
