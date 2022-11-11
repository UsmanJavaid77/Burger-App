import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id:0, name: "Bacon", count: 0, price: 0.5 },
  { id:1, name: "Cheese", count: 0, price: 0.4 },
  { id:2, name: "Lectuce", count: 0, price: 0.5 },
  { id:3, name: "Meat", count: 0, price: 1.3 }
]

const menuItemsSlice = createSlice({
  name: 'MenuItems',
  initialState,
  reducers: {
    add: (state, action)=> {
      state[action.payload].count += 1
    },
    remove: (state, action)=> {
      if(state[action.payload].count > 0){
        state[action.payload].count -= 1
      }
    }
  }
})

export const { add, remove } = menuItemsSlice.actions
export default menuItemsSlice.reducer
