import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { faker } from '@faker-js/faker'

// Define a service using a base URL and expected endpoints
export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: (page = 1) => `users?_page=${page ? page : 1}&_limit=3`, 
      transformResponse: (response, meta, arg) => {
        return response.map((user) => ({...user, avatar: faker.image.avatar()}))
      },
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllUsersQuery } = usersApi