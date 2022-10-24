import React from 'react'
import { v1 } from 'uuid'
import MenuItem from './MenuItem'

function Billing (props) {
  const { setBill, MenuItems } = props

  const addRemove = (Item, operation) => {
    if (operation === 'add') {
      setBill((prevItemCount) => prevItemCount + Item.price)
      Item.add()
    } else if (operation === 'remove' && Item.count > 0) {
      setBill((prevItemCount) => prevItemCount - Item.price)
      Item.remove()
    }
  }

  return (
    <>
      <div className='d-flex justify-content-center'>
        <table className='table-borderless'>
          <tbody>
            {MenuItems.map((item) => {
              return (
                <tr key={v1()}>
                  <MenuItem Item={item} addRemove={addRemove} />
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
