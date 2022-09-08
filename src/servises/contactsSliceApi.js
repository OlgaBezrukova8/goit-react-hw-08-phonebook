import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6318871af6b281877c6eee60.mockapi.io/contacts',
  }),
  endpoints: builder => ({
    getContact: builder.query({
      query: () => `/contacts`,
    }),
    //   addContact:
  }),
});

export const { useGetContactsQuery } = contactsApi;
