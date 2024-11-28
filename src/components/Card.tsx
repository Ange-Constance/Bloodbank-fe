import React from "react";

const Card = () => {
  return (
    <div className=" p-4 bg-white  w-50 h-50 shadow-md rounded-lg">
      {/* Icon with Circle Background */}
      <div className="flex items-center justify-center w-16 h-16 bg-red-500 text-white rounded-full mx-auto mb-4">
        {/* Replace with your icon, e.g., FontAwesome, Heroicons, etc. */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 2a10 10 0 100 20 10 10 0 000-20zm-3 10h6m-3-3v6"
          />
        </svg>
      </div>

      {/* Text Content */}
      <p className="text-center text-lg font-medium text-gray-700">40 hospitals</p>
    </div>
  );
};

export default Card;
