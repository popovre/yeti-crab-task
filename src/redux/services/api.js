import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const LOCAL_SERVER_PORT = 3001;

export const api = createApi({
  reducerPath: 'api',
  tagTypes: ['Comment', 'Order'],
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:${LOCAL_SERVER_PORT}/api/`,
  }),
  endpoints: (builder) => ({
    getOrders: builder.query({
      query: () => ({ url: 'orders' }),
    }),
    getOrderNumber: builder.query({
      query: (numberId) => ({
        url: `numbers?numberId=${numberId}`,
        params: { numberId: numberId },
      }),
    }),
    getOrderDate: builder.query({
      query: (dateId) => ({
        url: `dates?dateId=${dateId}`,
        params: { dateId },
      }),
    }),
    getOrderCompany: builder.query({
      query: (companyId) => ({
        url: `companies?companyId=${companyId}`,
        params: { companyId },
      }),
    }),
    getClientName: builder.query({
      query: (clientNameId) => ({
        url: `/clientName/${clientNameId}`,
        params: { clientNameId },
      }),
    }),
    getClientPhone: builder.query({
      query: (clientPhoneId) => ({
        url: `/clientPhone/${clientPhoneId}`,
        params: { clientPhoneId },
      }),
    }),
    getOrderStatus: builder.query({
      query: (orderStatusId) => ({
        url: `/orderStatus/${orderStatusId}`,
        params: { orderStatusId },
      }),
    }),
    getComments: builder.query({
      query: (orderId) => ({
        url: `comments`,
        params: { orderId },
      }),
      providesTags: (result, _, orderId) =>
        result
          .map(({ id }) => ({ type: 'Comment', id }))
          .concat(
            { type: 'Comments', id: 'ALL' },
            { type: 'Order', id: orderId }
          ),
    }),
    getATI: builder.query({
      query: (atiId) => ({
        url: `/ATI/${atiId}`,
        params: { atiId },
      }),
    }),
  }),
});

export const {
  useGetOrdersQuery,
  useGetOrderNumberQuery,
  useGetOrderDateQuery,
  useGetClientNameQuery,
  useGetClientPhoneQuery,
  useGetOrderStatusQuery,
  useGetCommentsQuery,
  useGetAtiQuery,
} = api;
