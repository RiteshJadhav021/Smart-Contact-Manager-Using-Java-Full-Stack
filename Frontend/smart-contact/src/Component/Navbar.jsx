import {Link} from "react-router-dom"

export const Navbar=()=>{
    return(
        <>
        <nav className="p-4">
            <ul className="flex justify-between items-center px-4">
                <div className="logo flex items-center gap-2">
                    <Link to="/"><img src="logo.jpeg" alt="" className=" w-15" /></Link>
                    <Link to="/"><h2 className="text-xl font-normal font-[Inter]">Personify</h2></Link>
                </div>
                <div className="navigations flex items-center justify-evenly gap-10 text-[#6B7280]">
                    <li><a href="/" className="hover:text-black hover:underline  hover:underline-offset-4 transition-all duration-300 cursor-pointer">Features</a></li>
                    <li><a href="/" className="hover:text-black hover:underline hover:underline-offset-4 transition-all duration-300 cursor-pointer">About</a></li>
                    <li><a href="/" className="hover:text-black hover:underline hover:underline-offset-4 transition-all duration-300 cursor-pointer">Contact</a></li>
                </div>
                <div className="nav_btn flex gap-5">
                   <Link to="/login" className="flex items-center "> <button className="login_btn text-[#6B7280] cursor-pointer hover:text-black">Login</button></Link>
                  <Link to="/signup">  <button className="signup_btn bg-[#483AEA] text-white px-4 py-2 rounded cursor-pointer hover:bg-[#3a2db8]">Get Started</button></Link>
                </div>
            </ul>
        </nav>
        <hr className="border-[#E5E7EB]" />

        </>
    );
}