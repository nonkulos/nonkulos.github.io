import React, { useState, useEffect } from "react";

import Buttons from './components/calendar/adjMonth';
import Sidebar from './components/sidebar/sidebar';
import Bar from './components/topBar/barContents';
import EventViewer from './components/eventViewer/eventViewer';

const App = () => {
    
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

    return (
        <>
            <h1>{message}</h1>
            <div className="topbar">
                <Bar />
            </div>
            <div className="widebar" id = "widebar" />
            <div>
                <Sidebar />
            </div>
            <div className="main-content text-center">
                <Buttons />
            </div>
            <EventViewer />
            <div className="opacityThingy" id = "opacityThingy"/>
        </>
    )
}

export default App;