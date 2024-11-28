import React from "react";

const Volunteers = () => {
  return( 

    <div className="mt-6 bg-white p-6 rounded-lg shadow">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-semibold text-gray-700 bold-400">Donors</h2>
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search"
          className="p-2 border rounded-md text-gray-600"
        />
        <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md">Sort by</button>

   
        {/* <button className="px-4 py-2 bg-red-500 text-white rounded-md">+ Add a hospital</button> */}
      </div>
    </div>
    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="border-b">
          <th className="p-2 text-gray-600">Name</th>
          <th className="p-2 text-gray-600">Email</th>
          <th className="p-2 text-gray-600">Location</th>
          <th className="p-2 text-gray-600">Blood Type</th>
          <th className="p-2 text-gray-600">Status</th>
        </tr>
      </thead>
      <tbody>
        {[...Array(7)].map((_, i) => (
          <tr key={i} className="border-b py-4">
            <td className="p-4">Ange Constance</td>
            <td className="p-4">n.constance@alustudent.com</td>
            <td className="p-4">Kigali, Gasabo</td>
            <td className="p-4">A+</td>
            <td className="p-4 text-green-600 p-4 bg-green-100">Accepted</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
};

export default Volunteers;
