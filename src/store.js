import { configureStore } from "@reduxjs/toolkit";
import  userSlice from "./slices/userSlice";
import cartSlice from "./slices/cartSlice";
import  quantitySlice  from "./slices/quantitySlice";


export default configureStore({
  reducer: {
    user: userSlice,
    cart: cartSlice,
   quantity: quantitySlice,
  },
});
