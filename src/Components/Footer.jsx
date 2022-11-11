import '../assets/styling/Footer.css'
import MenuItems from './MenuItems'

const CalculateBill = MenuItems => {
  let Bill = 3
  for (let i = 0; i < MenuItems.length; i++) {
    for (let j = 0; j < MenuItems[i].count; j++) {
      Bill += MenuItems[i].price
    }
  }
  return Bill
}

const Footer = props => {
  const Bill = CalculateBill(props.MenuItems)

  return (
    <>
      <div className='footer mt-4 pt-4 pb-2'>
        <p>
          Current price: <b>${Bill.toFixed(2)}</b>
        </p>

        <MenuItems {...props} />

        <div className='d-flex mt-3 justify-content-center'>
          <div className='sign-up-btn'>SIGN UP TO ORDER</div>
        </div>
      </div>
    </>
  )
}

export default Footer
