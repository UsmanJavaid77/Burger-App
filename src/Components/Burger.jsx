import BurgerContent from './SubComponents/BurgerContent'
import Footer from './Footer'
import { useSelector } from 'react-redux'

const Burger = () => {
  const MenuItems = useSelector(store => store.MenuItems)

  return (
    <>
      <BurgerContent MenuItems={MenuItems} />
      <Footer MenuItems={MenuItems} />
    </>
  )
}

export default Burger
