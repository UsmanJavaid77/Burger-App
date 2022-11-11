import { useDispatch } from 'react-redux'
import { add, remove } from '../../redux/features/MenuItems.feature'

const MenuItem = props => {
  const { Item } = props
  const dispatch = useDispatch()
  return (
    <>
      <td className='px-5 item-name-div'>
        <b className=''>{Item.name}</b>
      </td>
      <td className='px-3'>
        <button
          className={`text-white me-2 ${
            Item.count === 0 ? 'inactive-remove-btn' : 'active-remove-Btn'
          } px-4 py-1`}
          onClick={() => {
            dispatch(remove(Item.id))
          }}
        >
          Less
        </button>
        <button
          className='text-white px-4 py-1 add-Btn'
          onClick={() => {
            dispatch(add(Item.id))
          }}
        >
          More
        </button>
      </td>
    </>
  )
}

export default MenuItem
