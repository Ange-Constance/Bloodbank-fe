import React from "react";

interface PopupFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const PopupForm: React.FC<PopupFormProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-center text-lg font-semibold text-red-600 mb-4">
          Register hospital
        </h2>
        <form>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Hospital name"
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring focus:ring-red-300"
            />
            <input
              type="email"
              placeholder="Hospital Email"
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring focus:ring-red-300"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring focus:ring-red-300"
            />
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="District"
                className="w-1/2 border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring focus:ring-red-300"
              />
              <input
                type="text"
                placeholder="Sector"
                className="w-1/2 border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring focus:ring-red-300"
              />
            </div>
            <textarea
              placeholder="Hospital Description"
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring focus:ring-red-300"
              rows={3}
            />
          </div>
          <div className="mt-4 flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 mr-4"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
