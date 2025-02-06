export class MenuItem {
  #children: MenuItem[] = []
  name: string
  execute: () => void = () => {}

  constructor(name: string) {
    this.name = name
  }

  addChild(child: MenuItem) {
    this.#children.push(child)
  }

  getChildCount(): number {
    return this.#children.length
  }

  executeAll(): void {
    this.execute()
    this.#children.forEach((child) => child.executeAll())
  }
}
