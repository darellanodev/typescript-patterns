export class MenuItem {
  #children: MenuItem[] = []
  name: string
  constructor(name: string) {
    this.name = name
  }
  addChild(child: MenuItem) {
    this.#children.push(child)
  }
  getChildCount(): number {
    return this.#children.length
  }
}
