import { Outlet } from "react-router";


const  Root =()=>{
    return (
        <div className="mx-auto w-full">
        <Outlet></Outlet>
        </div>
    )
}
export default Root ;