import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import toast, { Toaster } from 'react-hot-toast';
const UserList=()=>{
    
    const[page ,setPage]=useState(1)
    const [userDataPage , setUserDataPage]=useState([])
    const [loading , setLoading]=useState(true)

    console.log(userDataPage) 
    useEffect(()=>{
       const userData=async()=>{
        try{
            const userList= await axios.get(`https://reqres.in/api/users?page=${page}`)
            if(userList.data){
                setUserDataPage(userList.data)
                setLoading(false)

            }

        }catch (e){
            console.log(e)
        }
       }
       userData()
    },[page])

    const handleDelete=async(id)=>{
        const res=await axios.delete(`https://reqres.in/api/users/${id}`)
        console.log(res)

        if(res.status===204){
            toast.success('User Delete Successfully');
           }else (e => {
            console.log(e)
           })
    }

    return(
      <>
      {
       loading? <h1 className="font-bold text-center text-green-400 mt-10"> Loading.....</h1> : <div className="grid lg:grid-cols-3 gap-10 p-4 md:grid-cols-2 grid-cols-1">
        
       {
          userDataPage.data.map((data , index) => 
          
          <div key={index} >
            
            <div className="h-56 w-auto flex justify-center items-center bg-white shadow-xl ">
               <div>
             <img src={data.avatar} alt={data.first_name} className="w-40 max-h-min "/>
             <div >
                <h1 className="text-green-500 font-semibold">{data.first_name} <span>{data.last_name}</span></h1> 
                <div className="flex justify-between mt-4 mb-4 ">
                <Link to={`/edit/${data.id}`}><button  className="bg-green-700 p-1  font-bold text-white">
                Edit</button></Link>
                <button onClick={()=> handleDelete(data.id)} className=" p-1  font-bold text-red-700">delete</button>
                </div>
             </div>
               </div>
            </div>

          </div>)
       }
    </div>
      }
      <div className="flex  justify-center gap-10 items-center">
      <button  onClick={()=> setPage(page-1)}  className="rounded-full bg-green-300 p-3 shadow-2xl"> Pre</button>
      <button onClick={()=> setPage(page+1)}  className="rounded-full bg-green-300 p-3 shadow-2xl">Next</button>
      </div>
      <Toaster />
      </>
    )
}
export default UserList;