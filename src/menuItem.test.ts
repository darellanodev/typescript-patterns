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
  it('should execute action on both simple and composite items', () => {
    const fileMenu = new MenuItem('File')
    const openItem = new MenuItem('Open')
    const newItem = new MenuItem('New')

    fileMenu.addChild(openItem)
    fileMenu.addChild(newItem)

    const executionOrder: string[] = []

    fileMenu.execute = () => executionOrder.push('File')
    openItem.execute = () => executionOrder.push('Open')
    newItem.execute = () => executionOrder.push('New')

    fileMenu.executeAll()

    expect(executionOrder).toEqual(['File', 'Open', 'New'])
  })
})
