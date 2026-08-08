import { Link } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from 'react';

export const Signup = () => {

   
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        password:""
    });

    const handleChange=(e)=>{
        const { name, value } = e.target;

       setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        //console.log(formData);


         // Name validation
    if (!formData.name.trim()) {
      toast.error("Please enter your name");
      return;
    }

    if (formData.name.trim().length < 3) {
      toast.error("Name must be at least 3 characters");
      return;
    }

    // Email validation
    if (!formData.email.trim()) {
      toast.error("Please enter your email");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error("Please enter a valid email");
      return;
    }

    // Password validation
    if (!formData.password) {
      toast.error("Please enter your password");
      return;
    }

    if (formData.password.length < 8) {
      toast.error("Password must be at least 8 characters");
      return;
    }

    // If everything is valid
    toast.success("Signup successful!");

    //console.log(formData);

    //clear form
    setFormData({
        name: "",
        email: "",
        password: ""
    });
        
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
                        Create Your Account
                    </h1>

                    <p className="mt-2 text-left text-sm text-gray-500">
                        Free Forever. Just sign up and start using Personify today!
                    </p>
                </div>





                <form className="mt-6 space-y-5" onSubmit={handleSubmit}>

                    {/* Name */}
                    <div>
                        <label className="mb-2 block text-sm font-medium text-gray-700">
                            Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-[#483AEA] focus:ring-2 focus:ring-[#483AEA]/20"
                        />
                    </div>

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
                        className="w-full rounded-lg bg-[#483AEA] py-3 font-semibold text-white transition hover:bg-[#392bc9] hover:shadow-md"
                    >
                        Sign Up
                    </button>
                    <div className="info">
                        <h3 className="text-sm text-gray-500 text-center mt-4">
                            Already have an account? <Link to="/login" className="text-[#483AEA] hover:underline">Login</Link>
                        </h3>
                    </div>

                </form>
            </div>
             {/* Toast */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="light"
      />
        </div>
    );
};

