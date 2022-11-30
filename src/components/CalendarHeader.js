import React, {useContext} from "react";
import GlobalContext from "../context/GlobalContext";
import dayjs from "dayjs";

export default function CalendarHeader() {
    const {monthIndex,setMonthIndex} = useContext(GlobalContext)

    function handlePrevMonth() {
        setMonthIndex(monthIndex-1)
    }

    function handleNextMonth() {
        setMonthIndex(monthIndex+1)
    }

    function handleCurrentMonth() {
        setMonthIndex(monthIndex === dayjs().month() ? monthIndex + Math.random() :dayjs().month())
    }

    return (
        <header className="px-4 py-2 flex items-center">
            {/*<img src="" alt="logo" />*/}
            <h1 className="mr-10 text-xl  text-white font-bold ">IONECalendar</h1>
            <button className="border border-gray-900 text-white font-bold rounded py-2 px-4 mr-5" onClick={handleCurrentMonth}>
                Today
            </button>
            <button className="border border-gray-900 text-white font-bold  rounded py-2 px-4 mr-5" onClick={handlePrevMonth}>
                <span className="material-icons-outlined cursor-pointer text-white mx-2">&#8592;</span>
            </button>
 <button className="border border-gray-900 text-white font-bold  rounded py-2 px-4 mr-5" onClick={handleNextMonth}>
                <span className="material-icons-outlined cursor-pointer text-white mx-2">&#8594;</span>
            </button>
            <h2 className="ml-4 text-xl  text-white font-bold ">{dayjs(new Date(dayjs().year(),monthIndex)).format("MMMM YYYY")}</h2>
        </header>
    )
}