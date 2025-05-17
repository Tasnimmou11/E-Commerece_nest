import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: JSON.parse(localStorage.getItem('user')) || null,
  },
  reducers: {
    // increment: (state) => {
      
    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    userAccountInfo: (state, action) => {
      state.user= action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { userAccountInfo } = userSlice.actions

export default userSlice.reducer