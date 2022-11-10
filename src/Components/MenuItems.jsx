import '../assets/styling/Items.css'
import '../assets/styling/Header.css'
import { v1 } from 'uuid'
const Lectuce = <div className='Lectuce row' />
const Bacon = <div className='Bacon row' />
const Cheese = <div className='Cheese row' />
const Meat = <div className='Meat row' />

const MenuItems = [
  {id: v1(), name: 'Lectuce', price: 0.5, piece: Lectuce},
  {id: v1(), name: 'Bacon', price: 0.7, piece: Bacon},
  {id: v1(), name: 'Cheese', price: 0.4, piece: Cheese},
  {id: v1(), name: 'Meat', price: 1.3, piece: Meat}
]

export default MenuItems
