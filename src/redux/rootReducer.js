import constituencyListReducer from './features/constituencySlice'
import userListReducer from './features/userSlice'
import partyListReducer from './features/partySlice'

const rootReducer = {
  bill: userListReducer,
  constituencies: constituencyListReducer,
  parties: partyListReducer
}

export default rootReducer
