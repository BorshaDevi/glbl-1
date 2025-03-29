import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router";
const Edit=()=>{
    const navigate=useNavigate()
    const {id}=useParams()
    const[userData , setUserData]=useState([])
    useEffect(()=> {
         axios.get(`https://reqres.in/api/users/${id}`)
         .then((res)=> {
           setUserData(res.data.data)
         })
         .catch((e)=> {
            console.log(e)
         })
    },[id])
    const handleEditForm=async(e)=>{
        e.preventDefault()
        const form=e.target
        const email=form.email.value
        const  first_name=form.first_name.value
        const  last_name=form.last_name.value
        const updateUser={
            email,
            first_name,
            last_name
        }
        const res=await axios.put(`https://reqres.in/api/users/${id}`, updateUser)
       if(res.status===200){
        toast.success('User updated Successfully');
        form.reset()
        navigate('/userList')
       }else{
        return toast.error('Something is wrong')
       }
    }
    return(
      <>
      <div className="flex justify-center items-center h-screen">
            <form onSubmit={handleEditForm} className="bg-white p-8 shadow-md">
                <h1 className="font-bold text-xl  text-center mb-5"> Update User Data</h1>
            <input type="email"  name="email" defaultValue={userData.email} className="border border-black p-2" ></input>
            <br></br>
            <input type="text" name="first_name" defaultValue={userData.first_name} className="border border-black mt-5 p-2" ></input>
            <br></br>
            <input type="text" name="last_name" defaultValue={userData.last_name} className="border border-black mt-5 p-2" ></input>
            <br />
            <input type="submit"  value='Update' className="border border-y-4  border-emerald-900 mt-5 p-2 bg-emerald-400 font-bold" ></input>
            </form>
           
        </div>
        <Toaster />
      </>
    )
}
export default Edit;