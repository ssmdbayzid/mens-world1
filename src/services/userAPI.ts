import { RootState } from '@reduxjs/toolkit/dist/query/core/apiState';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
// import {User} from './userModal'

export const contactsApi = createApi({
    reducerPath: "contactsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/",
        prepareHeaders: (headers, {getState}) => {
            const token = getState().auth.token;

            if(token){
                headers.set('authorization', `Bearer ${token}`)
            }
            return headers;
        },
    
    }),
/*    endpoints: (builders)=> {
        users: builders.query({
            query: ()=> "users"
        })
    },
*/
    endpoints: (builder) => {
        users: builder.query({
            query: () => "users",
        }),
    },    
})


export const {useUsersQuery} = contactsApi;