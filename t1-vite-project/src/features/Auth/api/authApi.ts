import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
    baseUrl: 'https://dummyjson.com',
    prepareHeaders: (headers) => {
        const token = localStorage.getItem('token');
        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }
        return headers;
    },
});

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery,
    endpoints: (builder) => ({
        login: builder.mutation({
            query: ({ username, password }) => ({
                url: '/auth/login',
                method: 'POST',
                body: { username, password, expiresInMins: 30 },
            }),
        }),
        getCurrentUser: builder.query({
            query: () => '/auth/me',
        }),
    }),
});

export const { useLoginMutation, useGetCurrentUserQuery } = authApi;
