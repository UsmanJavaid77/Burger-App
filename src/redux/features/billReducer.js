import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bill: 3
};

const billSlice = createSlice({
  name: 'bill',
  initialState,
  reducers: {
    add: (state, action) => {
      state += action.payload
    }
    setBill((prevItemCount) => prevItemCount + Item.price)
    Item.add()
    openModal: (state, action) => {
      state.isOpen = true;
    },
    closeModal: (state, action) => {
      state.isOpen = false;
    },
  },
});

export default billSlice
