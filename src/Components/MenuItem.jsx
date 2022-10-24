
const MenuItem = (props) => {
  const { Item, addRemove } = props
  return (
    <>
      <td className='px-5 item-name-div'>
        <b className=''>{Item.name}</b>
      </td>
      <td className='px-3'>
        <button
          className={`text-white me-2 ${Item.count === 0 ? 'remove-btn-initial' : 'remove-Btn'} px-4 py-1`}
          onClick={(e) => {
            addRemove(Item, 'remove')
          }}
        >
          Less
        </button>
        <button
          className='text-white px-4 py-1 add-Btn'
          onClick={(e) => {
            addRemove(Item, 'add')
          }}
        >
          More
        </button>
      </td>
    </>
  )
}

export default MenuItem
