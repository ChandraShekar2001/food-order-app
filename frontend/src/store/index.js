import {configureStore} from '@reduxjs/toolkit'

import cartSlice from './slices/cartSlice'
import orderSlice from './slices/orderSlice'
import createProductFormChageSlice from './slices/AdminCreateFormShowSlice'
import foodSlice from './slices/foodSlice';
const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        order: orderSlice.reducer,
        FormShow: createProductFormChageSlice.reducer,
        food: foodSlice.reducer,

    }
})

export const cartActions = cartSlice.actions
export const orderActions = orderSlice.actions
export const foodActions = foodSlice.actions

export default store;