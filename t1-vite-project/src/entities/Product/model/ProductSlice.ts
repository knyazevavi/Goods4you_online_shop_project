import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ProductItem } from "../../../shared";

interface ProductState {
    items: ProductItem[];
    status: 'idle' | 'loading' | 'failed';
}

const initialState: ProductState = {
    items: [],
    status: 'idle',
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<ProductItem[]>) => {
            state.items = action.payload;
        },
        setProduct: (state, action: PayloadAction<ProductItem>) => {
            state.items = [action.payload];
        }
    },
    // extraReducers для асинхронных операций
});

export const { setProducts, setProduct } = productSlice.actions;

export default productSlice.reducer;