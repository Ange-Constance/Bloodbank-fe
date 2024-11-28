import React , { useState } from "react";
import PopupForm from "./PopupForm";

const HospitalsTable: React.FC = () => {

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="mt-6 bg-white p-6 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-700">Hospitals</h2>
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search"
            className="p-2 border rounded-md text-gray-600"
          />
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md">Sort by</button>

          <div className="px-4 py-2 bg-red-500 text-white rounded-md">
      <button
        onClick={() => setIsPopupOpen(true)}
        className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600"
      >
       Add Hospital
      </button>
      <PopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    
    </div>
          {/* <button className="px-4 py-2 bg-red-500 text-white rounded-md">+ Add a hospital</button> */}
        </div>
      </div>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b">
            <th className="p-2 text-gray-600">Name</th>
            <th className="p-2 text-gray-600">Email</th>
            <th className="p-2 text-gray-600">Location</th>
            <th className="p-2 text-gray-600">Donors</th>
            <th className="p-2 text-gray-600">Volunteers</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(7)].map((_, i) => (
            <tr key={i} className="border-b py-4">
              <td className="p-4">Ruli Hospital</td>
              <td className="p-4">rulihospital@gmail.com</td>
              <td className="p-4">North province Gakenke</td>
              <td className="p-4">400</td>
              <td className="p-4">80</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HospitalsTable;
