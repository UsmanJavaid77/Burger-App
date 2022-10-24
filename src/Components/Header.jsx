import React, { useState } from 'react'
import '../assets/styling/Header.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import burgerIcon from '../assets/images/burger-icon.png'

const Header = () => {
  const [isBurger, setBurger] = useState('active')
  const [isLogin, setLogin] = useState('')
  const toggleBox = (element) => {
    if (element === 'burger') {
      if (isBurger === '') {
        setBurger('active')
        setLogin('')
      }
    } else {
      if (isLogin === '') {
        setLogin('active')
        setBurger('')
      }
    }
  }
  return (

    <>
      <div className='d-flex justify-content-between header text-white px-4'>
        <div className='my-1 px-2 py-2 bg-white rounded'>
          <img src={burgerIcon} className='burger-icon' alt='burger-icon' />
        </div>

        <div className='d-flex'>
          <Link to='/' className={`d-flex menu-button ${isBurger ? 'active' : ''}`} onClick={() => toggleBox('burger')}>
            <div className='px-3 align-self-center'>
              Burger Builder
            </div>
          </Link>

          <Link to='/login' className={`d-flex menu-button ${isLogin ? 'active' : ''}`} onClick={() => toggleBox('login')}>
            <div className='px-3 align-self-center'>
              Login
            </div>
          </Link>

        </div>

      </div>
    </>
  )
}

export default Header
