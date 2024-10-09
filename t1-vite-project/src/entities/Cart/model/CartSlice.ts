import { toast } from "react-toastify";

import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, ProductItem } from "../../../shared";
import { RootState } from "../../../app/store/store";
import { ErrorObj } from "../../../shared";


interface CartState {
    products: CartItem[];
    loading: "idle" | "loading" | "failed";
    removedItems: ProductItem[],
    error: string | null;
}

export const fetchUserCart = createAsyncThunk<CartState, number>(
    "cart/fetchUserCart",
    async (userId: number) => {
        const response = await fetch(`https://dummyjson.com/auth/carts/user/${userId}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        const data = await response.json();
        if (data && data?.carts.length > 0) {
            return data.carts[0];
        }
    }
);

export const updateUserCart = createAsyncThunk(
    "cart/updateCart",
    async (cartId: number, { getState }) => {
        const state = getState() as RootState;
        const cartItems = state.cart.products;
        try {
            const response = await fetch(`https://dummyjson.com/auth/carts/${cartId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({
                    merge: false,
                    products: cartItems
                })
            });
            if (!response.ok) {
                throw new Error('Failed to update cart');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            const err = error as ErrorObj;
            toast.error(`Update failed: ${err.data.message}`);
        }
    }
);

const initialState: CartState = {
    products: [],
    loading: "idle",
    removedItems: [],
    error: null
};

const cartSlice = createSlice({

    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<ProductItem>) => {
            const product = action.payload;
            const index = state.removedItems.findIndex(item => item.id === product.id);
            if (index !== -1) {
                state.removedItems.splice(index, 1);
            }
            const existingItem = state.products.find((item) => item.id === product.id);
            if (!existingItem) {
                const cartItem: CartItem = {
                    id: product.id,
                    thumbnail: product.thumbnail,
                    title: product.title || "",
                    price: product.price,
                    quantity: 1,
                    discountPercentage: product.discountPercentage,
                    discountedTotal: product.price - (product.price * (product.discountPercentage / 100)),
                    total: product.price,
                };
                state.products.push(cartItem);
            } else {
                existingItem.quantity += 1;
                existingItem.total = existingItem.price * existingItem.quantity;
                existingItem.discountedTotal = existingItem.total - (existingItem.total * (existingItem.discountPercentage / 100));
            }
        },
        updateCart: (
            state,
            action: PayloadAction<{ id: number; quantity: number }>
        ) => {
            const product = state.products.find((item) => item.id === action.payload.id);
            if (product) {
                product.quantity = Math.max(0, action.payload.quantity);
                product.total = product.price * product.quantity;
                product.discountedTotal =
                    product.total - (product.total * (product.discountPercentage / 100));
            }
        },
        removeFromCart: (state, action: PayloadAction<ProductItem>) => {
            state.products = state.products.filter((item) => item.id !== action.payload.id);
            state.removedItems.push(action.payload)
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserCart.pending, (state) => {
                state.loading = "loading";
            })
            .addCase(fetchUserCart.fulfilled, (state, action: PayloadAction<CartState>) => {
                state.products = action.payload.products;
                state.loading = "idle";
                state.error = null;
            })
            .addCase(fetchUserCart.rejected, (state, action) => {
                state.loading = "failed";
                state.error = action.error.message || "Failed to fetch cart";
            })
            .addCase(updateUserCart.pending, (state) => {
                state.loading = "loading";
            })
            .addCase(updateUserCart.fulfilled, (state, action: PayloadAction<CartState>) => {
                state.products = action.payload.products;
                state.loading = "idle";
                state.error = null;
            })
            .addCase(updateUserCart.rejected, (state, action) => {
                state.loading = "failed";
                state.error = action.error.message || "Failed to update cart";
            })
    },
});

export const { addToCart, updateCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

