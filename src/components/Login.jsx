import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login() {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('changeme')
    const [email, setemail] = useState('john@mail.com')
    const navigate=useNavigate()
    const registerUser=async()=>{
     try {
        const response=await axios.post("https://api.escuelajs.co/api/v1/auth/login",
            {
                email,password
            }
        )
        console.log(response.data.access_token);
        localStorage.setItem("token",JSON.stringify(response.data.access_token));
        navigate('/Components')
        alert("Login Successfully")
     } catch (error) {
        console.log(error);
        
     }
    }
  return (
    <>
    <div className='flex flex-col justify-center items-center mt-[10rem]'>
        <legend className="fieldset-legend text-2xl font-bold">Login</legend>
        <fieldset className="fieldset bg-base-300 border-base-300 rounded-box w-xs border p-[2.5rem] flex flex-col">

 <label className="label">Email</label>
  <input value={email} onChange={(e)=>setemail(e.target.value)} type="email" className="input" placeholder="Email" />

  <label className="label">Password</label>
  <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" className="input" placeholder="Password" />

  <button onClick={registerUser} className="btn btn-neutral mt-4">Login</button>
</fieldset>
    </div>
    </>
  )
}

export default Login