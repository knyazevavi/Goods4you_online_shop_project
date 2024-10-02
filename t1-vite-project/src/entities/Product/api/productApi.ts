import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ProductItem } from '../../../shared';

export const productApi = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
    endpoints: (builder) => ({
        fetchProductById: builder.query<ProductItem, number>({
            query: (productId) => `products/${productId}`,
        }),
        searchProducts: builder.query<{ products: ProductItem[], total: number }, { search: string, limit: number, skip: number }>({
            query: ({ search = '', limit = 12, skip = 0 }) =>
                `products/search?q=${search}&limit=${limit}&skip=${skip}`,
        }),
    })

});

export const { useFetchProductByIdQuery, useSearchProductsQuery, useLazySearchProductsQuery } = productApi;

