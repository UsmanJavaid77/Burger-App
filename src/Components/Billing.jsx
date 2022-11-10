import React from 'react'
import { v1 } from 'uuid'
import MenuItem from './MenuItem'

function Billing (props) {
  const { setBill, MenuItems } = props


  let dispatch = useDispatch();

    // get data from Redux Store
    let counterState = useSelector((state) => {
        return state["counter"];
    });

    let {count} = counterState;

    let clickIncr = () => {
        dispatch(increment());
    };

    let clickDecr = () => {
        dispatch(decrement());
    };


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
            <div className='btn btn-primary px-3' onClick={}>

            </div>
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
