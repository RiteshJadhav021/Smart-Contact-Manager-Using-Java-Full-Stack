import { UserDashboardNavbar } from "../Component/userDashboardComponent/UserDashboardNavbar";
import { useState, useEffect } from "react";
import axios from "axios";
import { Sidebar } from "../Component/userDashboardComponent/Sidebar";
import { ContactList } from "../Component/userDashboardComponent/ContactList";
import { ContactDetails } from "../Component/userDashboardComponent/ContactDetails";

export const UserDashboard = () => {
    const [user, setUser] = useState(null);

    const [selectedContact, setSelectedContact] = useState(null);

    // Temporary contact data
    const [contacts] = useState([

        {
            id: 1,
            name: "Sarah Chen",
            email: "sarah@designco.com",
            phone: "+1 212 555 1234",
            address: "New York, NY",
            company: "DesignCo",
            category: "Work",
            favorite: true
        },

        {
            id: 2,
            name: "Marcus Webb",
            email: "marcus@webbconsult.com",
            phone: "+1 212 554 9901",
            address: "New York, NY",
            company: "Webb Consulting",
            category: "Client",
            favorite: false
        },

        {
            id: 3,
            name: "Priya Nair",
            email: "priya@nexahealth.com",
            phone: "+91 9876543210",
            address: "Pune, India",
            company: "NexaHealth",
            category: "Work",
            favorite: true
        },

        {
            id: 4,
            name: "Luca Ferretti",
            email: "luca@milanoarch.com",
            phone: "+39 123456789",
            address: "Milan, Italy",
            company: "Milano Arch",
            category: "Partner",
            favorite: false
        },

        {
            id: 5,
            name: "Jordan Blake",
            email: "jordan@blakestudio.com",
            phone: "+1 555 123456",
            address: "Boston, USA",
            company: "Blake Studios",
            category: "Friend",
            favorite: false
        }

    ]);


    useEffect(() => {
        const getUserData = async () => {
            try {
                const token = localStorage.getItem("token");
                console.log("Token:", token);
                const response = await axios.get("http://localhost:8080/users/me", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                });
                setUser(response.data);

            }
            catch (error) {
                console.log(error);
            }
        };
        getUserData();
    }, []);
    return (
        <>


            <UserDashboardNavbar user={user} />

            <div className="flex min-h-[calc(100vh-73px)]">
                <Sidebar />
                <ContactList
                    contacts={contacts}
                    selectedContact={selectedContact}
                    setSelectedContact={setSelectedContact}
                />


                {/* Contact details */}
                <ContactDetails
                    contact={selectedContact}
                />

            </div>


        </>
    );
}