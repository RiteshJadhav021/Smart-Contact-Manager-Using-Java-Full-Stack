import { MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

 export const UserDashboardNavbar = ({user}) => {
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
                 <Link to="/"> <MdLogout className="text-[#000000] cursor-pointer hover:text-black w-6 h-6"/></Link>
                </div>
            </ul>
        </nav>
        <hr className="border-[#E5E7EB]" />
    
    </>
);
};