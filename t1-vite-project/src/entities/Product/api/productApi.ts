import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ProductItem } from '../../../shared';

const baseQuery = fetchBaseQuery({
    baseUrl: 'https://dummyjson.com/',
    prepareHeaders: (headers) => {
        const token = localStorage.getItem('token');
        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }
        return headers;
    }
});

export const productApi = createApi({
    reducerPath: "productApi",
    baseQuery,
    endpoints: (builder) => ({
        fetchProductById: builder.query<ProductItem, number>({
            query: (productId) => `auth/products/${productId}`,
        }),
        searchProducts: builder.query<{ products: ProductItem[], total: number }, { search: string, limit: number, skip: number }>({
            query: ({ search = '', limit = 12, skip = 0 }) =>
                `auth/products/search?q=${search}&limit=${limit}&skip=${skip}`,
        }),
    })

});

export const { useFetchProductByIdQuery, useSearchProductsQuery, useLazySearchProductsQuery } = productApi;

