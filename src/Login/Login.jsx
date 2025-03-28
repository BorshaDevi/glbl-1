const Login=()=>{
    return (
        <div className="flex justify-center items-center h-screen">
            <form className="bg-white p-8 shadow-md">
                <h1 className="font-bold text-xl  text-center mb-5"> Login</h1>
            <input type="email" placeholder="Enter your email"  className="border border-black p-2" ></input>
            <br></br>
            <input type="email" placeholder="******" className="border border-black mt-5 p-2" ></input>
            </form>
           
        </div>
    )
}
export default Login;
