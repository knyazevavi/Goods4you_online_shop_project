import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../../features/Auth/api/authApi";
import { productApi } from "../../entities/Product/api/productApi";
import cartSlice from "../../entities/Cart/model/CartSlice";
import authSlice from "../../features/Auth/model/authSlice";

export const store = configureStore({
    reducer: {
        cart: cartSlice,
        [productApi.reducerPath]: productApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        auth: authSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware, authApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;