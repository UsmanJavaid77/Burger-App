class Item {
  constructor (id, name, price, div) {
    this.id = id
    this.name = name
    this.price = price
    this.count = 0
    this.piece = div
  }

  add = () => {
    this.count += 1
  }

  remove = () => {
    if (this.count > 0) {
      this.count -= 1
    }
  }
}
export default Item
