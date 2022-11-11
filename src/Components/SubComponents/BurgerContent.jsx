import burgerTop from '../../assets/images/burger-top.jpeg'
import burgerBottom from '../../assets/images/burger-bottom.jpeg'
import '../../assets/styling/BurgerContent.css'
import '../../assets/styling/Items.css'
import { v1 } from 'uuid'

const InnerContent = MenuItems => {
  const ItemDiv = []
  for (let i = 0; i < MenuItems.length; i++) {
    for (let index = 0; index < MenuItems[i].count; index++) {
      ItemDiv.push(<div key={v1()} className={`row ${MenuItems[i].name} my-2`} />)
    }
  }
  if (ItemDiv.length === 0) {
    ItemDiv.push(
      <div key={v1()} className='py-1 d-flex justify-content-center'>
        <b>No ingrediants Added</b>
      </div>
    )
  }
  return ItemDiv
}

const BurgerContent = props => {
  const { MenuItems } = props
  return (
    <>
      <div className=' pt-2 pb-3 d-flex justify-content-center'>
        <div className='burger-div p-5'>
          <div className='mb-2'>
            <img src={burgerTop} className='burger-image burger-top' alt='Burger-Top' />
          </div>
          {InnerContent(MenuItems)}
          <div>
            <img src={burgerBottom} className='burger-image burger-bottom' alt='Burger-Top' />
          </div>
        </div>
      </div>
    </>
  )
}

export default BurgerContent
