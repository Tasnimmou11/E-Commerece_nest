import { createSlice } from '@reduxjs/toolkit'


export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: JSON.parse(localStorage.getItem('cart')) || [],
  },
  reducers: {
    // increment: (state) => {
      
    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    addToCart: (state, action) => {
      state.cart.push(action.payload)
       localStorage.setItem("cart",JSON.stringify(state.cart))
    },
    removeFromCart: (state, action) => {
  const idToRemove = action.payload;
  state.cart = state.cart.filter(item => item.productData.id !== idToRemove);
  localStorage.setItem("cart", JSON.stringify(state.cart));
}
  },
})

// Action creators are generated for each case reducer function
// export const { addToCart  } = cartSlice.actions

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer
