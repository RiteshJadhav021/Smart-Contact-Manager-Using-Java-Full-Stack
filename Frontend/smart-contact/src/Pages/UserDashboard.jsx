import { UserDashboardNavbar } from "../Component/userDashboardComponent/UserDashboardNavbar";
import { useState, useEffect } from "react";
import axios from "axios";
import { Sidebar } from "../Component/userDashboardComponent/Sidebar";
import { ContactList } from "../Component/userDashboardComponent/ContactList";
import { ContactDetails } from "../Component/userDashboardComponent/ContactDetails";
import { AddContactModal } from "../Component/userDashboardComponent/AddContactModal";


export const UserDashboard = () => {
    const [user, setUser] = useState(null);

    const [selectedContact, setSelectedContact] = useState(null);

    const [showAddContact, setShowAddContact] = useState(false);

    // Temporary contact data
    const [contacts, setContacts] = useState([]);

    const [selectedTag, setSelectedTag] = useState("All");

    const filteredContacts = contacts.filter((contact) => {
    return selectedTag === "All" || contact.tag === selectedTag || (selectedTag === "Favourite" && contact.favourite);
});

    const allCount = contacts.length;

    const workCount = contacts.filter(
        contact => contact.tag === "Work"
    ).length;

    const favouriteCount= contacts.filter(
        contact => contact.favourite === true
    ).length;

    const clientCount = contacts.filter(
        contact => contact.tag === "Client"
    ).length;

    const partnerCount = contacts.filter(
        contact => contact.tag === "Partner"
    ).length;

    const friendCount = contacts.filter(
        contact => contact.tag === "Friend"
    ).length;






    const handleContactDeleted = (id) => {

        setContacts((prevContacts) =>
            prevContacts.filter((contact) => contact.id !== id)
        );

        setSelectedContact(null);
    };

    const handleContactAdded = (newContact) => {
        setContacts((prev) => [
            ...prev,
            newContact
        ]);
        setSelectedContact(newContact);
    }

    useEffect(() => {
        const getContacts = async () => {
            try {
                const token = localStorage.getItem("token");
                console.log("Token:", token);
                const response = await axios.get("http://localhost:8080/contacts", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                });
                setContacts(response.data);
                //console.log("User data:", response.data);

            }
            catch (error) {
                console.log(error);
            }
        };
        getContacts();
    }, []);


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
                //console.log("User data:", response.data);

            }
            catch (error) {
                console.log(error);
            }
        };
        getUserData();
    }, []);


    const handleFavouriteUpdate = (updatedContact) => {
        setContacts((prevContacts) =>
            prevContacts.map((contact) =>
                contact.id === updatedContact.id ? updatedContact : contact
            )
        );
        setSelectedContact(updatedContact);
    };

    //for updating contact after editing
    const handleContactUpdated = (updatedContact) => {

        setContacts(prevContacts =>
            prevContacts.map(contact =>
                contact.id === updatedContact.id
                    ? updatedContact
                    : contact
            )
        );

        setSelectedContact(updatedContact);
    };

    return (
        <>


            <UserDashboardNavbar user={user} />

            <div className="flex min-h-[calc(100vh-73px)]">
                <Sidebar
                allCount={allCount}
                workCount={workCount}
                clientCount={clientCount}
                partnerCount={partnerCount}
                friendCount={friendCount}
                favouriteCount={favouriteCount}
                selectedTag={selectedTag}
                setSelectedTag={setSelectedTag}
                />
                <ContactList
                    contacts={filteredContacts}
                    selectedContact={selectedContact}
                    setSelectedContact={setSelectedContact}
                    setShowAddContact={setShowAddContact}
                    onFavouriteUpdate={handleFavouriteUpdate}
                    


                />


                {/* Contact details */}
                <ContactDetails
                    contact={selectedContact}
                    selectedContact={selectedContact}
                    onContactDeleted={handleContactDeleted}
                    onFavouriteUpdate={handleFavouriteUpdate}
                    onContactUpdated={handleContactUpdated}
                />



            </div>

            {showAddContact && (
                <AddContactModal
                    onClose={() => setShowAddContact(false)}
                    onContactAdded={handleContactAdded}
                />
            )}




        </>
    );
}