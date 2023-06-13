import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
// import {User} from './userModal'

export const contactsApi = createApi({
    reducerPath: "contactsApi",
    baseQuery: fetchBaseQuery({baseUrl: "https://dummyjson.com/"}),
    endpoints: (builder) =>({
        contacts: builder.query<[], void>({
            query: ()=> "/users"
        })
    })
})


export const {useContactsQuery} = contactsApi;