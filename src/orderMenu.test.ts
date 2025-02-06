import { describe, it, expect } from 'vitest'
import { MenuItem } from './orderMenu'

describe('MenuItem', () => {
  it('should create a menu item', () => {
    const menuItem = new MenuItem('New Order')
    expect(menuItem.name).toBe('New Order')
  })

  it('should add items and count them', () => {
    const orderMenu = new MenuItem('New Order')
    orderMenu.addChild(new MenuItem('Add Burger'))
    orderMenu.addChild(new MenuItem('Add Fries'))
    expect(orderMenu.getChildCount()).toBe(2)
  })

  it('should process a food order', () => {
    const orderMenu = new MenuItem('New Order')
    const addBurger = new MenuItem('Add Burger')
    const addFries = new MenuItem('Add Fries')
    const addDrink = new MenuItem('Add Drink')

    orderMenu.addChild(addBurger)
    orderMenu.addChild(addFries)
    orderMenu.addChild(addDrink)

    const order = {
      items: [] as string[],
      total: 0,
    }

    orderMenu.execute = () => {
      order.items.push('Order Started')
    }
    addBurger.execute = () => {
      order.items.push('Burger')
      order.total += 5.99
    }
    addFries.execute = () => {
      order.items.push('Fries')
      order.total += 2.49
    }
    addDrink.execute = () => {
      order.items.push('Drink')
      order.total += 1.99
    }

    orderMenu.executeAll()

    expect(order.items).toEqual(['Order Started', 'Burger', 'Fries', 'Drink'])
    expect(order.total).toBeCloseTo(10.47)
  })
})
