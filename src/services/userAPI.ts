import { RootState } from '@reduxjs/toolkit/dist/query/core/apiState';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {User} from './userModal'
import { Product } from './productModal';

export const usersApi = createApi({
    reducerPath: "contactsApi",
    tagTypes: ["User", "Product"],
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:5000/"}),
    endpoints: (builders)=> ({

        //* --------------- Get Product --------

        products: builders.query<Product[], void>({
            query: ()=> "/products",
            providesTags: ["Product"],
        }),

        //*----------- Get Users-----------
        users: builders.query<User[], void>({
            query: ()=> "/users",
            providesTags: ["User"],
        }),

        //*----------- Get User-----------

        user:builders.query<User, void>({
            query: (userId)=> `/users/${userId}`,
            providesTags: ["User"]
        }),

        //*----------- Update User-----------

        updateUser: builders.mutation<void, User>({
            query: ({userId, ...rest })=> ({
                url: `/users/${userId}`,
                method: "PUT",
                body: rest,
            })
        }),
        //*----------- Add User-----------

        addUser: builders.mutation<{}, User>({
            query: (user)=> ({
                url: "/users",
                method: "POST",
                body: user,
            }),
            invalidatesTags: ["User"]
        }),
        deleteUser: builders.mutation<void, string>({
            query: (id) => ({                            
                url: `/users/${id}`,
                method: "DELETE",    
            }),
            invalidatesTags: ["User"]
        }),
     
    }),
})


export const {
    useProductsQuery,
    useUsersQuery,
    useAddUserMutation,
    useDeleteUserMutation,
    useUserQuery,
    useUpdateUserMutation
 } = usersApi;