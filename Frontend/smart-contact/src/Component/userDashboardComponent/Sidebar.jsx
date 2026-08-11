import { useState } from "react";

export const Sidebar = () => {

    const [selected, setSelected] = useState("All");

    return (
        <div className="w-[280px] border-r border-gray-200 min-h-[calc(100vh-73px)] p-5">

            <h3 className="text-sm font-medium text-gray-500 mb-5">
                FILTER
            </h3>

            {/* All */}
            <div
                onClick={() => setSelected("All")}
                className={`px-4 py-3 flex justify-between rounded-xl cursor-pointer ${
                    selected === "All"
                        ? "bg-[#483AEA] text-white"
                        : "text-gray-600 hover:bg-gray-100"
                }`}
            >
                <span>All</span>
                <span>8</span>
            </div>

            {/* Work */}
            <div
                onClick={() => setSelected("Work")}
                className={`px-4 py-3 flex justify-between rounded-xl cursor-pointer ${
                    selected === "Work"
                        ? "bg-[#483AEA] text-white"
                        : "text-gray-600 hover:bg-gray-100"
                }`}
            >
                <span>Work</span>
                <span>3</span>
            </div>

            {/* Client */}
            <div
                onClick={() => setSelected("Client")}
                className={`px-4 py-3 flex justify-between rounded-xl cursor-pointer ${
                    selected === "Client"
                        ? "bg-[#483AEA] text-white"
                        : "text-gray-600 hover:bg-gray-100"
                }`}
            >
                <span>Client</span>
                <span>2</span>
            </div>

            {/* Partner */}
            <div
                onClick={() => setSelected("Partner")}
                className={`px-4 py-3 flex justify-between rounded-xl cursor-pointer ${
                    selected === "Partner"
                        ? "bg-[#483AEA] text-white"
                        : "text-gray-600 hover:bg-gray-100"
                }`}
            >
                <span>Partner</span>
                <span>2</span>
            </div>

            {/* Friend */}
            <div
                onClick={() => setSelected("Friend")}
                className={`px-4 py-3 flex justify-between rounded-xl cursor-pointer ${
                    selected === "Friend"
                        ? "bg-[#483AEA] text-white"
                        : "text-gray-600 hover:bg-gray-100"
                }`}
            >
                <span>Friend</span>
                <span>1</span>
            </div>
               <div className="absolute bottom-0 left-0 w-[280px] border-t border-gray-200 px-5 py-5">
                <p className="text-sm text-gray-600">
                    8 total contacts
                </p>
            </div>

        </div>
    );
};