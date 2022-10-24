import '../assets/styling/Footer.css'
import Billing from './Billing'

const Footer = (props) => {
  const { Bill } = props

  return (
    <>
      <div className='footer mt-4 pt-4 pb-2'>
        <p>Current price: <b>${Bill.toFixed(2)}</b></p>

        <Billing {...props} />

        <div className='d-flex mt-3 justify-content-center'>
          <div className='sign-up-btn'>
            SIGN UP TO ORDER
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
