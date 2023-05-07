import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const baseUrl = 'http://localhost:3000/';
const baseUrl = 'https://puce-splendid-duckling.cyclic.app';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => 'products',
    }),
    getProduct: builder.query({
      query: (id) => `products/${id}`,
    }),
    // Orders
    createOrder: builder.mutation({
      query: (newOrder) => ({
        url: 'orders',
        method: 'POST',
        body: newOrder,
      }),
    }),
    getOrder: builder.query({
      query: (ref) => `orders/${ref}`,
    }),
    // Payments
    createPaymentIntent: builder.mutation({
      query: (data) => ({
        url: 'payments/intent',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const {
  useGetProductQuery,
  useGetProductsQuery,
  useCreateOrderMutation,
  useGetOrderQuery,
  useCreatePaymentIntentMutation
} = apiSlice;
