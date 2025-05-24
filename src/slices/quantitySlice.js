import { createSlice } from '@reduxjs/toolkit';

const quantitySlice = createSlice({
  name: 'quantity',
  initialState: 1,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => (state > 1 ? state - 1 : 1),
    setQuantity: (state, action) => {
      return action.payload > 0 ? action.payload : 1;
    },
  },
});

export const { increment, decrement, setQuantity } = quantitySlice.actions;
export default quantitySlice.reducer;