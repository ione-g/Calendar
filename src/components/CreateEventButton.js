import React, {useContext} from "react";
import GlobalContext from "../context/GlobalContext";

export default function CreateEventButton() {
        const {setShowEventModal} = useContext(GlobalContext)
    return (
        <button onClick={() => setShowEventModal(true)} className="border border-gray-900 text-white font-bold  p-2 rounded-full flex items-center shadow-md hover:shadow-2xl">
            <span className="px-16">&#43;</span>
        </button>
    )
}