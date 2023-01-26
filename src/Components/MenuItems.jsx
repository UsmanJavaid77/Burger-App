import React from 'react'
import MenuItem from './SubComponents/MenuItem'

const Billing = ({ MenuItems }) => (
  <div className='d-flex justify-content-center'>
    <table className='table-borderless'>
      <tbody>
        {MenuItems.map((item, index) => (
          <tr key={index}>
            <MenuItem Item={item} />
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

export default Billing
