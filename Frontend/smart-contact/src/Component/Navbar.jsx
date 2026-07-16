export const Navbar=()=>{
    return(
        <>
        <nav className="p-4">
            <ul className="flex justify-between items-center px-4">
                <div className="logo flex items-center gap-2">
                    <img src="logo.jpeg" alt="" className=" w-15" />
                    <h2 className="text-xl font-normal font-[Inter]">Personify</h2>
                </div>
                <div className="navigations flex items-center justify-evenly gap-10 text-[#6B7280]">
                    <li><a href="/" className="hover:text-black hover:underline  hover:underline-offset-4 transition-all duration-300 cursor-pointer">Features</a></li>
                    <li><a href="/" className="hover:text-black hover:underline hover:underline-offset-4 transition-all duration-300 cursor-pointer">About</a></li>
                    <li><a href="/" className="hover:text-black hover:underline hover:underline-offset-4 transition-all duration-300 cursor-pointer">Contact</a></li>
                </div>
                <div className="nav_btn flex gap-5">
                    <button className="login_btn text-[#6B7280]">Login</button>
                    <button className="signup_btn bg-[#483AEA] text-white px-4 py-2 rounded">Get Started</button>
                </div>
            </ul>
        </nav>
        <hr className="border-[#E5E7EB]" />

        </>
    );
}