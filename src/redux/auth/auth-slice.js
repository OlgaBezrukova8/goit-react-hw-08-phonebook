import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/',
  }),
  tagTypes: ['Authentication'],
  endpoints: builder => ({
    signUp: builder.mutation({
      query: user => ({
        url: '/users/signup',
        method: 'POST',
        body: user,
      }),
      invalidatesTags: ['Authentication'],
    }),

    logIn: builder.mutation({
      query: user => ({
        url: '/users/login',
        method: 'POST',
        body: user,
      }),
      invalidatesTags: ['Authentication'],
    }),

    logOut: builder.mutation({
      query: user => ({
        url: '/users/logout',
        method: 'POST',
        body: user,
      }),
      invalidatesTags: ['Authentication'],
    }),

    getCurrentUser: builder.query({
      query: () => '/users/current',
      invalidatesTags: ['Authentication'],
    }),
  }),
});

export const {
  useSignUpMutation,
  useLogInMutation,
  useLogOutMutation,
  useGetCurrentUserQuery,
} = authApi;
