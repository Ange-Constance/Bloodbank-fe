
import React from "react";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Schedule from "./pages/Schedule";
import Donors from "./pages/Donors"; 
import Volunteers from "./pages/Volunteers";

const App = () => {
  return (
    <Router>
    <div className="flex">
      <Sidebar />
     
      <div className="flex-grow bg-gray-50">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/hospitals" element={<Schedule />} />
            <Route path="/donors" element={<Donors />} />
            <Route path="/volunteers" element={<Volunteers />} />
          </Routes>
        </div>
    </div>
    </Router>
  );
};

export default App;
