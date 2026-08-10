import { UserDashboardNavbar } from "../Component/userDashboardComponent/UserDashboardNavbar";
import { useState, useEffect } from "react";
import axios from "axios";

export const UserDashboard=()=>{
    const[user,setUser]=useState(null);

    useEffect(()=>{
        const getUserData=async()=>{
            try{
                  const token = localStorage.getItem("token");
                  console.log("Token:", token);
                  const response=await axios.get("http://localhost:8080/users/me", {
                    headers: {
                      Authorization: `Bearer ${token}`,
                    }
                  });
                  setUser(response.data);

            }
            catch(error){
                console.log(error);
            }
        };
        getUserData();
    },[]);
    return(
        <>


        <UserDashboardNavbar user={user}/>
        
        </>
    );
}