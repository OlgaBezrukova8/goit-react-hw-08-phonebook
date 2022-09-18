import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/',
  }),
  tagTypes: ['Authentication'],
  endpoints: builder => ({
    signUp: builder.mutation({
      query: contact => ({
        url: '/users/signup',
        method: 'POST',
        body: contact,
      }),
      invalidatesTags: ['Authentication'],
    }),
  }),
});

export const { useSignUpMutation } = authApi;
