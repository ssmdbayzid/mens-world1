import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { useUserQuery } from '../../services/userAPI.ts';

const initialState = {
  username: "",
  email: "",
  profile: "",
}

const UserUpdatePage = () => {

  const { userId } = useParams()
  const [userName, setUserName] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const [userProfile, setUserProfile] = useState("")

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [formValue, setFormValue] = useState(initialState)
  const { data, error, isFetching, isLoading } = useUserQuery(userId)


  const { username, email, profile } = formValue;

  useEffect(() => {
    if (userId) {
      const { username, email, profile } = data;
      setUserName(username)
      setUserEmail(email)
      setUserProfile(profile)
    }
  }, [userId, data])


  if(userProfile){
    console.log(userProfile)
  }


  const onSubmit = (data) => {
    // Perform update logic here
    console.log(data);
  };


  return (
    <div className="flex justify-center h-screen min-w-full items-center ">
      <form className="md:w-1/3 w-2/3  bg-white rounded shadow p-8" onSubmit={handleSubmit(onSubmit)}>
        <img src={userProfile} alt="" srcset="" className="w-20 h-20 rounded-md mx-auto " />
        <h2 className="text-2xl font-bold my-2 text-center uppercase">Update User</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            id="name"
            value={userName}
            // onChange={(e)=> {console.log(e.target.value)}}
            {...register('name', { required: true, onChange: (e)=> {setUserName(e.target.value)}},)}
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
            value={userEmail}
            {...register('email', { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, onChange: (e)=> {setUserEmail(e.target.value)} })}
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.email && <span className=" text-red-500 ">Invalid email address</span>}
        </div>
        <div className="mb-6">
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="small_size">Upload Img</label>
          <input
           {...register('profile', { required: true, onChange: (e)=> {console.log(e.target.files[0])}},)}
          class="block w-full mb-5 text-xs text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="small_size" type="file" />
          
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
