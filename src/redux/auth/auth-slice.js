import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().user.token;
      console.log(token)
      if (token) {
      
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
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
      // transformResponse: payload => {
      //   console.log(payload);
      //   return payload;
      // },
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
