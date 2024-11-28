import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-red-500">
        Blood<span className="text-blue-500">Donate</span>
      </h1>
      <div className="mt-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-10 h-10 rounded-full bg-gray-300"></div>
          <div>
            <h2 className="text-sm font-medium">Ange Constance</h2>
            <p className="text-xs text-gray-500">n.constance@alustudent.com</p>
          </div>
        </div>
        <nav className="mt-6">
          <ul className="space-y-4">
            {/* Using NavLink for active styling */}
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center gap-3 p-2 rounded-lg ${
                    isActive ? "text-red-500 bg-gray-200 font-bold" : "text-black"
                  }`
                }
              >
                <span>🏠</span> Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/hospitals"
                className={({ isActive }) =>
                  `flex items-center gap-3 p-2 rounded-lg ${
                    isActive ? "text-red-500 bg-gray-200 font-bold" : "text-black"
                  }`
                }
              >
                <span>🏥</span> Schedule
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/donors"
                className={({ isActive }) =>
                  `flex items-center gap-3 p-2 rounded-lg ${
                    isActive ? "text-red-500 bg-gray-200 font-bold" : "text-black"
                  }`
                }
              >
                <span>🩸</span> Donors
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/volunteers"
                className={({ isActive }) =>
                  `flex items-center gap-3 p-2 rounded-lg ${
                    isActive ? "text-red-500 bg-gray-200 font-bold" : "text-black"
                  }`
                }
              >
                <span>🤝</span> Volunteers
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <footer className="absolute bottom-4 left-4">
        <p className="text-xs text-gray-500">copyright@2020 aimed</p>
      </footer>
    </div>
  );
};

export default Sidebar;
