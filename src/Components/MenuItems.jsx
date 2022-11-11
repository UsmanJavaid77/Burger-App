import React from 'react'
import { v1 } from 'uuid'
import MenuItem from './SubComponents/MenuItem'

function Billing(props) {
  const { MenuItems } = props
  return (
    <>
      <div className='d-flex justify-content-center'>
        <table className='table-borderless'>
          <tbody>
            {MenuItems.map(item => {
              return (
                <tr key={v1()}>
                  <MenuItem Item={item} />
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Billing
