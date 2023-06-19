import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { useUserQuery } from '../../services/userAPI.ts';

const UserUpdatePage = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const {userId}  = useParams()

  const initialState = {
    username: "",
    email: "",
    profile: "",
  }
  const {data, error, isFetching, isLoading } = useUserQuery(userId)

  if(data){
    console.log(data)
  }

  const onSubmit = (data) => {
    // Perform update logic here
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center ">
      <form className="md:w-1/3 w-2/3  bg-white rounded shadow p-8" onSubmit={handleSubmit(onSubmit)}>
        <img src="https://avatars.githubusercontent.com/u/96953200?v=4" alt="" srcset="" className="w-20 h-20 rounded-md mx-auto " />
        <h2 className="text-2xl font-bold my-2 text-center uppercase">Update User</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            {...register('name', { required: true })}
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.name && <span className=" text-red-500 ">Name is required</span>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register('email', { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })}
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.email && <span className=" text-red-500 ">Invalid email address</span>}
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            {...register('password', { required: true, minLength: 6 })}
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.password && <span className="text-red-500">Password must be at least 6 characters</span>}
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 focus:outline-none"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserUpdatePage;
