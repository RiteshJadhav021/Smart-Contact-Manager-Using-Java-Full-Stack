import {
    FiMail,
    FiPhone,
    FiMapPin,
    FiUsers,
    FiStar,
    FiEdit,

} from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import { toast } from "react-toastify";
import axios from "axios";
import { FaStar } from "react-icons/fa6";
import { GoTrash } from "react-icons/go";

import { useState } from "react";
import { EditContactModal } from "./EditContactModal";


export const ContactDetails = ({ contact, selectedContact,
    onContactDeleted, onFavouriteUpdate, onContactUpdated }) => {

    const [showEditModal, setShowEditModal] = useState(false);

   




    const handleDeleteContact = () => {

        toast(
            ({ closeToast }) => (
                <div>
                    <p className="font-semibold text-gray-800">
                        Are you sure you want to delete this contact?
                    </p>

                    <div className="flex gap-2 mt-3">

                        <button
                            onClick={() => {
                                closeToast();
                                deleteContact();
                            }}
                            className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                        >
                            Yes
                        </button>

                        <button
                            onClick={closeToast}
                            className="bg-gray-300 text-gray-800 px-3 py-1 rounded-md hover:bg-gray-400"
                        >
                            No
                        </button>

                    </div>
                </div>
            ),
            {
                autoClose: false,
                closeOnClick: false,
            }
        );
    };


    const deleteContact = async () => {

        try {

            const token = localStorage.getItem("token");

            await axios.delete(
                `http://localhost:8080/contacts/${selectedContact.id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            toast.success("Contact deleted successfully!");

            onContactDeleted(selectedContact.id);

        } catch (error) {

            console.log(error);

            toast.error("Failed to delete contact!");


        }
    };










    if (!contact) {

        return (
            <div className="flex-1 flex items-center justify-center text-gray-400">

                <p>
                    Select a contact to view details
                </p>

            </div>
        );

    }

    const handleFavourite = async () => {

        try {
            const token = localStorage.getItem("token");
            const response = await axios.put(
                `http://localhost:8080/contacts/${selectedContact.id}/favourite`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            onFavouriteUpdate(response.data);
            console.log("Favourite status updated:", response.data);

        }
        catch (error) {
            console.log(error);
        }
    }

    return (

        <div className="flex-1 p-10">

            {/* Header */}
            <div className="flex justify-between items-start">

                <div className="flex items-center gap-6">

                    {/* Avatar */}
                    <div className="w-20 h-20 rounded-2xl bg-[#E0F2FE] flex items-center justify-center text-[#0369A1] text-2xl font-semibold">

                        {contact.name
                            .split(" ")
                            .map(word => word[0])
                            .join("")
                            .toUpperCase()
                        }

                    </div>


                    <div>

                        <h1 className="text-3xl font-semibold text-gray-900">
                            {contact.name}
                        </h1>

                        <p className="text-gray-500 mt-1">
                            {contact.email}
                        </p>

                        <span className="inline-block mt-2 bg-[#EDE9FE] text-[#6D28D9] px-3 py-1 rounded-full text-sm">
                            {contact.tag}
                        </span>

                    </div>

                </div>


                {/* Action buttons */}
                <div className="flex gap-3">

                    <button className="w-11 h-11 border border-gray-200 rounded-xl flex items-center justify-center hover:bg-gray-50" onClick={handleFavourite}>

                        {selectedContact.favourite ? <FaStar className="text-yellow-500 fill-yellow-500" /> : <FiStar />}

                    </button>

                    <button className="w-11 h-11 border border-gray-200 rounded-xl flex items-center justify-center hover:bg-gray-50" onClick={() => setShowEditModal(true)}>

                        <FiEdit />

                    </button>

                    <button className="w-11 h-11 border border-gray-200 rounded-xl flex items-center justify-center hover:bg-gray-50" onClick={() => handleDeleteContact(selectedContact.id)}>

                        <GoTrash />

                    </button>

                </div>

            </div>


            {/* Information cards */}
            <div className="grid grid-cols-2 gap-5 mt-12">

                {/* Email */}
                <div className="border border-gray-200 rounded-2xl p-6">

                    <div className="flex items-center gap-3 text-gray-500">

                        <FiMail />

                        <span className="text-sm font-medium">
                            EMAIL
                        </span>

                    </div>

                    <p className="mt-4 text-gray-800">
                        {contact.email}
                    </p>

                </div>


                {/* Phone */}
                <div className="border border-gray-200 rounded-2xl p-6">

                    <div className="flex items-center gap-3 text-gray-500">

                        <FiPhone />

                        <span className="text-sm font-medium">
                            PHONE
                        </span>

                    </div>

                    <p className="mt-4 text-gray-800">
                        {contact.phone}
                    </p>

                </div>


                {/* Location */}
                <div className="border border-gray-200 rounded-2xl p-6">

                    <div className="flex items-center gap-3 text-gray-500">

                        <FiMapPin />

                        <span className="text-sm font-medium">
                            LOCATION
                        </span>

                    </div>

                    <p className="mt-4 text-gray-800">
                        {contact.address}
                    </p>

                </div>


                {/* Company */}
                <div className="border border-gray-200 rounded-2xl p-6">

                    <div className="flex items-center gap-3 text-gray-500">

                        <FiUsers />

                        <span className="text-sm font-medium">
                            COMPANY
                        </span>

                    </div>

                    <p className="mt-4 text-gray-800">
                        {contact.company}
                    </p>

                </div>

            </div>

             {
        showEditModal && (
            <EditContactModal
                contact={selectedContact}
                onClose={() => setShowEditModal(false)}
                onContactUpdated={onContactUpdated}
            />
        )
    }

        </div>
    );
};