import {Link,useNavigate} from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from 'react';
import axios from 'axios';
export const Login = () => {

    const navigate = useNavigate();

   const[formData,setFormData]=useState({
    email:"",
    password:""
   });

   const handleChange=(e)=>{
    const{name,value}=e.target;

    setFormData((prevData)=>({
        ...prevData,
        [name]:value
    }));
   };

   const handleSubmit= async(e)=>{
    e.preventDefault();

     // Email validation
    if (!formData.email.trim()) {
      toast.error("Please enter your email");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    // Password validation
    if (!formData.password.trim()) {
      toast.error("Please enter your password");
      return;
    }

      if (formData.password.length < 8) {
      toast.error("Password must be at least 8 characters");
      return;
    }

    try{
        const response = await axios.post('http://localhost:8080/auth/login', formData);
         toast.success("Login successful!");
        // setFormData({
        //     email:"",
        //     password:""
        // });
        localStorage.setItem("token", response.data.token);
         navigate("/userdashboard");


    }
    catch(error){
        toast.error("Login failed. Please check your credentials and try again.");



    }

   
   };


    return (
         <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg ">
                <div className="signup-logo flex items-center gap-2 mb-6 justify-center">
                    <Link to="/"><img src="logo.jpeg" alt="" className=" w-15" /></Link>
                    <Link to="/"><h2 className="text-xl font-normal font-[Inter]">Personify</h2></Link>
                </div>
                <div className="signup-title flex flex-col items-center mb-4">
                    <h1 className="text-left text-3xl font-bold text-gray-900 text-center">
                        Welcome Back
                    </h1>

                    <p className="mt-2 text-left text-sm text-gray-500">
                        Sign in to continue to your account.
                    </p>
                </div>





                <form className="mt-6 space-y-5" onSubmit={handleSubmit}>

                

                    {/* Email */}
                    <div>
                        <label className="mb-2 block text-sm font-medium text-gray-700">
                            Email
                        </label>

                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        
                            placeholder="Enter your email"
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-[#483AEA] focus:ring-2 focus:ring-[#483AEA]/20"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="mb-2 block text-sm font-medium text-gray-700">
                            Password
                        </label>

                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-[#483AEA] focus:ring-2 focus:ring-[#483AEA]/20"
                        />
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full rounded-lg bg-[#000000] py-3 font-semibold text-white transition hover:bg-[#000000] hover:shadow-md cursor-pointer"
                    >
                        Login
                    </button>
                    <div className="info">
                        <h3 className="text-sm text-gray-500 text-center mt-4">
                            Don't have an account? <Link to="/signup" className="text-[#483AEA] cursor-pointer hover:underline">Signup</Link>
                        </h3>
                    </div>

                </form>
            </div>
             {/* Toast */}
     
        </div>
    );
}