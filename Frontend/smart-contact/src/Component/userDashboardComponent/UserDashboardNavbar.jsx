import { MdLogout } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import {  toast } from "react-toastify";
//import "react-toastify/dist/ReactToastify.css";

 export const UserDashboardNavbar = ({user}) => {
    const navigate=useNavigate();

    const handleLogout = () => {
         toast(
            <div>
                <p className="font-semibold text-gray-800 mb-3">
                    Are you sure you want to logout?
                </p>

                <div className="flex gap-2">

                    <button
                        onClick={() => {

                            // Remove JWT token
                            localStorage.removeItem("token");

                            // Close toast
                            toast.dismiss();

                            // Go to home page
                            navigate("/");
                            toast.success("Logged out successfully");

                        }}
                        className="bg-red-500 text-white px-3 py-2 rounded-md"
                    >
                        Yes, Logout
                    </button>

                    <button
                        onClick={() => toast.dismiss()}
                        className="bg-gray-200 text-gray-700 px-3 py-2 rounded-md text-sm hover:bg-gray-300"
                    >
                        Cancel
                    </button>

                </div>
            </div>,
            {
                position: "top-right",
                autoClose: false,
                closeOnClick: false,
                closeButton: false
            }
        );
    };
    return(
    
    <>
    <nav className="p-4">
            <ul className="flex justify-between items-center px-4">
                <div className="logo flex items-center gap-2">
                    <Link to="/"><img src="logo.jpeg" alt="" className=" w-15" /></Link>
                    <Link to="/"><h2 className="text-xl font-normal font-[Inter]">Personify</h2></Link>
                </div>
               
                <div className="nav_btn flex gap-5 flex items-center ">
                   <button className="login_btn text-[#6B7280] cursor-pointer hover:text-black flex items-center gap-2"> <CgProfile className="text-[#000000] cursor-pointer hover:text-black w-8 h-8 text-[#483AEA]" /> {user? user.name : "User"}</button>
                 <button onClick={handleLogout}><MdLogout className="text-[#000000] cursor-pointer hover:text-black w-6 h-6"/></button>
                </div>
            </ul>
        </nav>
        <hr className="border-[#E5E7EB]" />
    
    </>
);
};