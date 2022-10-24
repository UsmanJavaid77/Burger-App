import BurgerContent from './BurgerContent'
import Footer from './Footer'
import { useState } from 'react'
import MenuItems from './MenuItems'

const Burger = () => {
  const [Bill, setBill] = useState(3)
  return (
    <>
      <BurgerContent MenuItems={MenuItems} />
      <Footer Bill={Bill} setBill={setBill} MenuItems={MenuItems} />
    </>
  )
}

export default Burger
