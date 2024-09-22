import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "../../entities/Product/api/productApi";
import cartSlice from "../../entities/Cart/model/CartSlice";


export const store = configureStore({
    reducer: {
        cart: cartSlice,
        [productApi.reducerPath]: productApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;