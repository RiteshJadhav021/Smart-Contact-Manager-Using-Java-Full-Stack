import { useState } from "react";

export const Sidebar = ({ allCount, workCount, clientCount, partnerCount, friendCount, favouriteCount, selectedTag, setSelectedTag }) => {

    const [selected, setSelected] = useState("All");

    return (
        <div className="w-[280px] border-r border-gray-200 min-h-[calc(100vh-73px)] p-5">

            <h3 className="text-sm font-medium text-gray-500 mb-5">
                FILTER
            </h3>

            {/* All */}
            <div
                onClick={() => setSelectedTag("All")}
                className={`px-4 py-3 flex justify-between rounded-xl cursor-pointer ${selectedTag === "All"
                        ? "bg-[#483AEA] text-white"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
            >
                <span>All</span>
                <span>{allCount}</span>
            </div>

            {/* Work */}
            <div
                onClick={() => setSelectedTag("Work")}
                className={`px-4 py-3 flex justify-between rounded-xl cursor-pointer ${selectedTag === "Work"
                        ? "bg-[#483AEA] text-white"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
            >
                <span>Work</span>
                <span>{workCount}</span>
            </div>

            {/* Client */}
            <div
                onClick={() => setSelectedTag("Client")}
                className={`px-4 py-3 flex justify-between rounded-xl cursor-pointer ${selectedTag === "Client"
                        ? "bg-[#483AEA] text-white"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
            >
                <span>Client</span>
                <span>{clientCount}</span>
            </div>

            {/* Partner */}
            <div
                onClick={() => setSelectedTag("Partner")}
                className={`px-4 py-3 flex justify-between rounded-xl cursor-pointer ${selectedTag === "Partner"
                        ? "bg-[#483AEA] text-white"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
            >
                <span>Partner</span>
                <span>{partnerCount}</span>
            </div>

            {/* Friend */}
            <div
                onClick={() => setSelectedTag("Friend")}
                className={`px-4 py-3 flex justify-between rounded-xl cursor-pointer ${selectedTag === "Friend"
                        ? "bg-[#483AEA] text-white"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
            >
                <span>Friend</span>
                <span>{friendCount}</span>
            </div>

            {/* Favourite */}
            <div
                onClick={() => setSelectedTag("Favourite")}
                className={`px-4 py-3 flex justify-between rounded-xl cursor-pointer ${selectedTag === "Favourite"
                        ? "bg-[#483AEA] text-white"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
            >
                <span>Favourite</span>
                <span>{favouriteCount}</span>
            </div>


            <div className="absolute bottom-0 left-0 w-[280px] border-t border-gray-200 px-5 py-5">
                <p className="text-sm text-gray-600">
                    {allCount} total contacts
                </p>
            </div>

        </div>
    );
};