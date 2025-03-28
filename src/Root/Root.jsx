import { Outlet } from "react-router";
import Nav from "../Nav/Nav";

const  Root =()=>{
    return (
        <div className="mx-auto w-full">
        <Outlet></Outlet>
        </div>
    )
}
export default Root ;