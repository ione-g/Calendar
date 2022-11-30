import React,{useState,useContext,useEffect} from "react";
import './App.css';
import {getMonth} from './util'
import CalendarHeader from './components/CalendarHeader'
import Sidebar from './components/Sidebar'
import Month from './components/Month'
import GlobalContext from "./context/GlobalContext";
import EventModal from "./components/EventModal";

function App() {
    const [currentMonth,setCurrentMonth] = useState(getMonth())
    const {monthIndex,showEventModal} = useContext(GlobalContext)
    useEffect(() =>{
        setCurrentMonth(getMonth(monthIndex))
    },[monthIndex]);
  console.table(getMonth())
  return (
    <React.Fragment>
        {showEventModal && <EventModal />}

      <div className="h-screen bg-gray-800 flex flex-col">
          <CalendarHeader />
          <div className="flex flex-1">
              <Sidebar />
              <Month month = {currentMonth} />

          </div>
      </div>
    </React.Fragment>
  );
}

export default App;
