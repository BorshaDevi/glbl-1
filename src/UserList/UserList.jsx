import axios from "axios";
import { useEffect, useState } from "react";

const UserList=()=>{
    const[page ,setPage]=useState(2)
    const [userDataPage , setUserDataPage]=useState([])
    console.log(userDataPage) 
    useEffect(()=>{
       const userData=async()=>{
        try{
            const userList= await axios.get(`https://reqres.in/api/users?page=${page}`)
            setUserDataPage(userList.data)
        }catch (e){
            console.log(e)
        }
       }
       userData()
    },[page])

    return(
      <>
      <div>
         {
            userDataPage.data.map((data , index) => <div key={index}> 

            </div>)
         }
      </div>
      </>
    )
}
export default UserList;