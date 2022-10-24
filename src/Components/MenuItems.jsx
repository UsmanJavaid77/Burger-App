import Item from './Item'
import '../assets/styling/Items.css'
import '../assets/styling/Header.css'
import { v1 } from 'uuid'
const Lectuce = <div className='Lectuce row' />
const Bacon = <div className='Bacon row' />
const Cheese = <div className='Cheese row' />
const Meat = <div className='Meat row' />

const MenuItems = [new Item(v1(), 'Lectuce', 0.5, Lectuce),
  new Item(v1(), 'Bacon', 0.7, Bacon),
  new Item(v1(), 'Cheese', 0.4, Cheese),
  new Item(v1(), 'Meat', 1.3, Meat)
]

export default MenuItems
