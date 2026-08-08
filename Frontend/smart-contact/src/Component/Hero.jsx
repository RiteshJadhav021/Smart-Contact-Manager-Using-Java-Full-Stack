import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
export const Hero = () => {
    return (
        <>
            <div className="hero flex justify-evenly  p-4">
                <div className="hero_text max-w-xl py-10">
                    <h1 className="text-6xl font-bold text-[#111827] font-[Inter] ">Your Contacts,  <span className="text-[#483AEA] text-7xl">Beautifully   </span> Organized..</h1>
                    <p className="text-[#6B7280] text-lg mt-4 font-sans ">Personify is a contact management app that helps you organize your contacts and keep them up to date.</p>
                    <div className="hero_btn flex gap-5 mt-6">
                        <Link to="/signup">  <button className="signup_btn bg-[#483AEA] text-white px-4 py-2 rounded flex items-center gap-2">Get Started<FaArrowRight /> </button></Link>
                    </div>

                </div>
                <div className="hero_img">
                    <img src="hero_img.jpeg" alt="" className="w-160 " />
                </div>
            </div>
        </>
    );
}