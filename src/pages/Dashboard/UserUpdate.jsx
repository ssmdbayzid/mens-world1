import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router';
import { useUpdateUserMutation, useUserQuery } from '../../services/userAPI.ts';
import { PickerOverlay } from 'filestack-react';
import { toast } from 'react-toastify';
import axios from 'axios';

const initialState = {
  username: "",
  email: "",
  profile: "",
}

const UserUpdatePage = () => {

  const { userId } = useParams()
  const [username, setUserName] = useState("")
  const [email, setUserEmail] = useState("")
  const [profile, setUserProfile] = useState("")
  const [updateUser, result] = useUpdateUserMutation()
  const [img, setImg] = useState("")
  const [isPicker, setIsPicker] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm();
  // const [formValue, setFormValue] = useState(initialState)
  const { data, error, isFetching, isLoading } = useUserQuery(userId)
  // const {username, email, profile} = formValue;


  
  useEffect(() => {
    if (userId && data) {      
      const { username, email, profile } = data;
      setUserName(username)
      setUserEmail(email)
      setUserProfile(profile)      
    }

  }, [userId, data])
  const navigate = useNavigate()


  const onSubmit = async (e) => {
    
    const data = {
      userId,
      username,
      email,
      img
    }

    console.log(data)
    // await updateUser(data)
    
    // navigate("/dashboard/users")
    // toast.success("Update user successfully")
    
  };


  

  return (
    <div className="flex justify-center h-screen min-w-full items-center ">
      
      <form className="md:w-1/3 w-2/3  bg-white rounded shadow p-8" onSubmit={handleSubmit(onSubmit)}>
        <img src={profile} alt="" srcset="" className="w-12 h-12 rounded-md mx-auto " />
        <h2 className="text-xl font-bold my-2 text-center uppercase">Update User</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            id="name"
            value={username}
            
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
            value={email}
            {...register('email', { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, onChange: (e)=> {setUserEmail(e.target.value)} })}
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.email && <span className=" text-red-500 ">Invalid email address</span>}
        </div>
        {img ? <div className="w-20 h-20 justify-between flex items-center ">
            <p>New Profile </p>
            <img src={img} alt="" className="w-20 h-20" srcset="" />
          </div> : 
        
        <div onClick={()=> {isPicker ? setIsPicker(false) : setIsPicker(true)}}
         className="flex border-2 border-gray-900 cursor-pointer h-24 bg-blue-400 items-center justify-center">
            <p className="text-lg text-white">Choose File</p>
                
        </div>
}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-indigo-500 text-white w-full mt-5 py-2 rounded hover:bg-indigo-600 focus:outline-none"
          >
            Update
          </button>
          <div className="mt-4 relative">
          {isPicker && 
          <PickerOverlay
            apikey={process.env.REACT_APP_Filestack_Key}
            onSuccess={(res) => {
              setImg(res.filesUploaded[0].url)
              setIsPicker(!isPicker)
            }}
            onError={(res) =>(alert(res))}
            pickerOptions={{
              maxFiles: 1,
              accept: ["image/*"],
              errorsTimeout: 2000,
              maxSize: 1* 900 * 900,
            }}
          />
         }
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserUpdatePage;

/*

  ///    file upload ------------------

const imageUpload = async e =>{

  const client = filestack.init(process.env.REACT_APP_Filestack_Key);
  const img = e.target.files[0]

  client.upload(img)
  .then((res)=> console.log(res))
  .catch((error)=> console.log(error))
------------ for Image BB -----------------
  const formData = new FormData()

  formData.append('image', img)

  await fetch('https://api.imgbb.com/1/upload&key=15abb5d6d10c5792735d187ebb3d95b0"', {
    method: "POST",
    body: formData,
  })
  .then((res)=> res.json())
  .then(result => {
    console.log("Image bb", result)
  })
  // .then((error)=> {console.log(error)})
  
  
}
*/