import React, {useContext, useState} from "react";
import GlobalContext from "../context/GlobalContext";
const labelsClasses = ["#3f1e93","#484444","#0015fd","#4ed23f","#8108b6","#e53a3a"]
export default function EventModal () {
    const {
        setShowEventModal,
        daySelected,
        dispatchCalEvent,
        selectedEvent,
    } = useContext(GlobalContext);

    const [title, setTitle] = useState(
        selectedEvent ? selectedEvent.title : ""
    );
    const [description, setDescription] = useState(
        selectedEvent ? selectedEvent.description : ""
    );
    const [selectedLabel, setSelectedLabel] = useState(
        selectedEvent
            ? labelsClasses.find((lbl) => lbl === selectedEvent.label)
            : labelsClasses[0]
    );

    function handleSubmit(e) {
        e.preventDefault();
        const calendarEvent = {
            title,
            description,
            label: selectedLabel,
            day: daySelected.valueOf(),
            id: selectedEvent ? selectedEvent.id : Date.now(),
        };
        if (selectedEvent) {
            dispatchCalEvent({ type: "update", payload: calendarEvent });
        } else {
            dispatchCalEvent({ type: "push", payload: calendarEvent });
        }

        setShowEventModal(false);
    }
    return (
    //     <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
    //         <form className="bg-white rounded-lg shadow-2xl w-1/4">
    //             <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
    //                 <div>
    //                     <span className="material-icons-outlined text-gray-400">
    //                         &#9868;
    //                     </span>
    //                 </div>
    //                 <div>
    //                     {selectedEvent && (
    //                     <span
    //                         onClick={()=> {
    //                             dispatchCalEvent({type:"delete",payload:selectedEvent})
    //                             setShowEventModal(false)
    //                         }}
    //                         className="material-icons-outlined text-gray-400 cursor-pointer">
    //                         &#128465;
    //                     </span>
    //                 )  }
    //                     <button onClick={() =>setShowEventModal(false)}>
    //                     <span className="material-icons-outlined text-gray-400">
    //                     &#10006;
    //                     </span>
    //                 </button>
    //                 </div>
    //
    //             </header>
    //             <div className="p-3">
    //                 <div className="grid grid-cols-1/5 items-end gap-y-7">
    //                     <div></div>
    //                     <input className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
    //                            type="text"
    //                            name="title"
    //                            placeholder="Add title"
    //                            value={title}
    //                            required
    //                            onChange={(e)=> setTitle(e.target.value)}
    //                     />
    //                     {/*<span className="material-icons-outlined text-gray-400">&#x1F550; </span>*/}
    //                     <p>{daySelected.format('dddd, MMMM DD')}</p>
    //                     {/*<span className="material-icons-outlined text-gray-400">*/}
    //                     {/*&#9780;*/}
    //                     {/*</span>*/}
    //                     <input className="pt-3 border-0 text-gray-600 pb-2 border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
    //                            type="text"
    //                            name="description"
    //                            placeholder="Add a description"
    //                            value={description}
    //                            required
    //                            onChange={(e)=> setDescription(e.target.value)}
    //                     />
    //                     <div className="flex gap-x-2">
    //                         {labelsClasses.map((lbl,i) => (
    //                             <span key={i}
    //                                   onClick={() => setSelectedLabel(lbl)}
    //                                   style={{backgroundColor:`${lbl}`}}
    //                                   className={` w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}>
    //                                     {selectedLabel === lbl &&(<span className="material-icons-outlined text-white text-sm">&#x2713;</span>
    //                                         )}
    //                             </span>
    //                         ))}
    //                     </div>
    //                 </div>
    //             </div>
    //             <footer className="flex justify-end w-100 border-t p-3 mt-5">
    //                 <button  type="submit"
    //                          onClick={handleSubmit}
    //                          className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white">
    //                     Save
    //                 </button>
    //
    //             </footer>
    //         </form>
    //
    //     </div>
    // )
        <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
            <form className="bg-white rounded-lg shadow-2xl w-1/4">
                <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
          <span className="material-icons-outlined text-gray-400">
             &#9868;
          </span>
                    <div>
                        {selectedEvent && (
                            <span
                                onClick={() => {
                                    dispatchCalEvent({
                                        type: "delete",
                                        payload: selectedEvent,
                                    });
                                    setShowEventModal(false);
                                }}
                                className="material-icons-outlined text-gray-400 cursor-pointer"
                            >
                 &#128465;
              </span>
                        )}
                        <button onClick={() => setShowEventModal(false)}>
              <span className="material-icons-outlined text-gray-400">
                 &#10006;
              </span>
                        </button>
                    </div>
                </header>
                <div className="p-3">
                    <div className="grid grid-cols-1/5 items-end gap-y-7">
                        <div></div>
                        <input
                            type="text"
                            name="title"
                            placeholder="Add title"
                            value={title}
                            required
                            className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
                            onChange={(e) => setTitle(e.target.value)}
                        />

                        <p>{daySelected.format("dddd, MMMM DD")}</p>

                        <input
                            type="text"
                            name="description"
                            placeholder="Add a description"
                            value={description}
                            required
                            className="pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <span className="material-icons-outlined text-gray-400">
              bookmark_border
            </span>
                        <div className="flex gap-x-2">
                                                    {labelsClasses.map((lbl,i) => (
                                                        <span key={i}
                                                              onClick={() => setSelectedLabel(lbl)}
                                                              style={{backgroundColor:`${lbl}`}}
                                                              className={` w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}>
                                                                {selectedLabel === lbl &&(<span className="material-icons-outlined text-white text-sm">&#x2713;</span>
                                                                    )}
                                                        </span>
                                                    ))}
                                                </div>
                    </div>
                </div>
                <footer className="flex justify-end border-t p-3 mt-5">
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white"
                    >
                        Save
                    </button>
                </footer>
            </form>
        </div>
    );
}