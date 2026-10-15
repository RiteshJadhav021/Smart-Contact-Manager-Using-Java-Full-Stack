import { useState } from "react";
import { IoClose } from "react-icons/io5";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export const AddContactModal = ({ onClose ,onContactAdded}) => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        address: "",
        tag: "Work"
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };


    
    
    

    const handleSubmit = async(e) => {
        e.preventDefault();

         // Name validation
    if (!formData.name.trim()) {
        toast.error("Please enter contact name!");
        return;
    }

    if (formData.name.trim().length < 3) {
        toast.error("Name must contain at least 3 characters!");
        return;
    }

    // Email validation
    if (!formData.email.trim()) {
        toast.error("Please enter email address!");
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email.trim())) {
        toast.error("Please enter a valid email address!");
        return;
    }

    // Phone validation (10-digit Indian mobile number)
    if (!formData.phone.trim()) {
        toast.error("Please enter phone number!");
        return;
    }

    const phoneRegex = /^[6-9]\d{9}$/;

    if (!phoneRegex.test(formData.phone.trim())) {
        toast.error("Please enter a valid 10-digit mobile number!");
        return;
    }

    // Tag validation
    if (!formData.tag) {
        toast.error("Please select a contact tag!");
        return;
    }

        try{
            const token = localStorage.getItem("token");
            const response = await axios.post("http://localhost:8080/contacts", formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            // setFormData({
            //     name: "",
            //     email: "",
            //     phone: "",
            //     company: "",
            //     address: "",
            //     category: "Work"
            // });

             onContactAdded(response.data);
        onClose();

        }
        catch(error){
            console.log(error);
        }

        console.log(formData);

        // Backend API will be added later
       
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm px-4">

            {/* Modal */}
            <div className="w-full max-w-2xl rounded-3xl bg-white shadow-2xl">

                {/* Header */}
                <div className="flex items-center justify-between border-b border-gray-200 px-9 py-6">

                    <h2 className="text-3xl font-semibold text-gray-900">
                        Add new contact
                    </h2>

                    <button
                        type="button"
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-900 cursor-pointer"
                    >
                        <IoClose className="w-7 h-7 cursor-pointer" />
                    </button>

                </div>


                <form onSubmit={handleSubmit}>

                    <div className="px-9 py-8">

                        {/* Name */}
                        <div className="mb-6">

                            <label className="block mb-2 text-sm font-medium text-[#64748B]">
                                Full name *
                            </label>

                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Rushi Warake"
                                required
                                className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 outline-none focus:border-[#483AEA] focus:ring-2 focus:ring-[#483AEA]/10"
                            />

                        </div>


                        {/* Email + Phone */}
                        <div className="grid grid-cols-2 gap-6 mb-6">

                            <div>

                                <label className="block mb-2 text-sm font-medium text-[#64748B]">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="rushi@example.com"
                                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 outline-none focus:border-[#483AEA]"
                                />

                            </div>


                            <div>

                                <label className="block mb-2 text-sm font-medium text-[#64748B]">
                                    Phone
                                </label>

                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+91 9876543210"
                                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 outline-none focus:border-[#483AEA]"
                                />

                            </div>

                        </div>


                        {/* Company + Location */}
                        <div className="grid grid-cols-2 gap-6 mb-6">

                            <div>

                                <label className="block mb-2 text-sm font-medium text-[#64748B]">
                                    Company
                                </label>

                                <input
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    placeholder="Capgemini"
                                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 outline-none focus:border-[#483AEA]"
                                />

                            </div>


                            <div>

                                <label className="block mb-2 text-sm font-medium text-[#64748B]">
                                    Location
                                </label>

                                <input
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    placeholder="Kolhapur, Maharashtra"
                                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 outline-none focus:border-[#483AEA]"
                                />

                            </div>

                        </div>


                        {/* Category */}
                        <div className="mb-8">

                            <label className="block mb-3 text-sm font-medium text-[#64748B]">
                                Tag
                            </label>

                            <div className="flex gap-3">

                                {["Work", "Client", "Partner", "Friend"].map((tag) => (

                                    <button
                                        key={tag}
                                        type="button"
                                        onClick={() =>
                                            setFormData((prev) => ({
                                                ...prev,
                                                tag: tag
                                            }))
                                        }
                                        className={`px-5 py-2.5 rounded-xl border ${
                                            formData.tag === tag
                                                ? "bg-[#483AEA] text-white border-[#483AEA]"
                                                : "border-gray-200 text-[#64748B] hover:bg-gray-50"
                                        }`}
                                    >
                                        {tag}
                                    </button>

                                ))}

                            </div>

                        </div>


                        {/* Buttons */}
                        <div className="grid grid-cols-2 gap-4">

                            <button
                                type="button"
                                onClick={onClose}
                                className="rounded-2xl border border-gray-200 py-4 font-medium text-gray-800 hover:bg-gray-50"
                            >
                                Cancel
                            </button>

                            <button
                                //onClick={()=>setShowAddContact(true)}
                                type="submit"
                                className="rounded-2xl bg-[#483AEA] py-4 font-semibold text-white hover:bg-[#392bc9] cursor-pointer"
                            >
                                Add contact
                            </button>

                        </div>

                    </div>

                </form>

            </div>

        </div>
    );
};