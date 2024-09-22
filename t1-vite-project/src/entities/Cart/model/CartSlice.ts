import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, ProductItem } from "../../../shared";

interface CartState {
    products: CartItem[];
    loading: "idle" | "loading" | "failed";
    items: []
}

export const fetchUserCart = createAsyncThunk<CartState, number>(
    "cart/fetchUserCart",
    async (userId: number) => {
        const response = await fetch(`https://dummyjson.com/carts/user/${userId = 6}`);
        const data = await response.json();
        if (data && data?.carts.length > 0) {
            return data.carts[0];
        }
    }
);

const initialState: CartState = {
    products: [],
    loading: "idle",
    items: []
};

const cartSlice = createSlice({

    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<ProductItem>) => {
            const product = action.payload;

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
        updateQuantity: (
            state,
            action: PayloadAction<{ id: number; quantity: number }>
        ) => {
            const product = state.products.find((item) => item.id === action.payload.id);
            if (product) {
                product.quantity = Math.max(0, action.payload.quantity);
                // ToDo product.total = product.price * product.quantity;  // Пересчитываем общую сумму
                // product.discountedTotal =
                //   product.total - (product.total * (product.discountPercentage / 100));  // Пересчитываем скидку
            }
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            state.products = state.products.filter((item) => item.id !== action.payload);
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
            })
            .addCase(fetchUserCart.rejected, (state) => {
                state.loading = "failed";
            });
    },
});

export const { addToCart, updateQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;