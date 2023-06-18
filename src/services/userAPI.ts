import { RootState } from '@reduxjs/toolkit/dist/query/core/apiState';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {User} from './userModal'

export const usersApi = createApi({
    reducerPath: "contactsApi",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:5000/"}),
    endpoints: (builders)=> ({
        users: builders.query<User[], void>({
            query: ()=> "/users"
        }),
        addUser: builders.mutation<{}, User>({
            query: (user)=> ({
                url: "/users",
                method: "POST",
                body: user,
            })
        }),
        
    }),
})


export const {useUsersQuery} = usersApi;