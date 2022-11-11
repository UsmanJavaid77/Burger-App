import '../assets/styling/Header.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavLink } from 'react-router-dom'
import burgerIcon from '../assets/images/burger-icon.png'

const Header = () => {
  return (
    <>
      <div className='d-flex justify-content-between header text-white px-4'>
        <div className='my-1 px-2 py-2 bg-white rounded'>
          <img src={burgerIcon} className='burger-icon' alt='burger-icon' />
        </div>

        <div className='d-flex'>
          <NavLink
            to='/'
            className={({ isActive }) => {
              return isActive ? 'active d-flex menu-button' : 'd-flex menu-button'
            }}
            end
          >
            <div className='px-3 align-self-center'>Burger Builder</div>
          </NavLink>
          <NavLink
            to='/login'
            className={({ isActive }) => {
              return isActive ? 'active d-flex menu-button' : 'd-flex menu-button'
            }}
          >
            <div className='px-3 align-self-center'>Login</div>
          </NavLink>
        </div>
      </div>
    </>
  )
}

export default Header
