

const Login=()=>{
    
    const handleForm=async(e)=>{
        e.preventDefault()
        const form=e.target
        const email=form.email.value
        const password =form.password.value
        const login={
            email,
            password
        }
       await axi

    }
    return (
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={handleForm} className="bg-white p-8 shadow-md">
                <h1 className="font-bold text-xl  text-center mb-5"> Login</h1>
            <input type="email"  name="email" placeholder="Enter your email"  className="border border-black p-2" ></input>
            <br></br>
            <input type="password" name="password" placeholder="******" className="border border-black mt-5 p-2" ></input>
            <br />
            <input type="submit"  value='Submit' className="border border-y-4  border-emerald-900 mt-5 p-2 bg-emerald-400 font-bold" ></input>
            </form>
           
        </div>
    )
}
export default Login;
