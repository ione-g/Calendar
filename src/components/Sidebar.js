import React from "react";
import CreateEventButton from "./CreateEventButton"
import SmallCalendar from "./SmallCalendar";
export default function Sidebar() {
    return (
        <aside className="border border-gray-900 text-white font-bold  p-5 w-64">
            <CreateEventButton />
            <SmallCalendar />
        </aside>
    )
}