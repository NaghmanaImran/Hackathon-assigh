import React from "react";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white p-6 border-r border-gray-200">
      {/* Type Section */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-700">T Y P E</h2>
        <ul className="mt-4 space-y-2 text-gray-600">
          <li className="flex justify-between">
            <span>Sport</span>
            <span className="text-gray-400">(10)</span>
          </li>
          <li className="flex justify-between">
            <span>SUV</span>
            <span className="text-gray-400">(12)</span>
          </li>
          <li className="flex justify-between">
            <span>MPV</span>
            <span className="text-gray-400">(16)</span>
          </li>
          <li className="flex justify-between">
            <span>Sedan</span>
            <span className="text-gray-400">(20)</span>
          </li>
          <li className="flex justify-between">
            <span>Coupe</span>
            <span className="text-gray-400">(14)</span>
          </li>
          <li className="flex justify-between">
            <span>Hatchback</span>
            <span className="text-gray-400">(14)</span>
          </li>
        </ul>
      </div>

      {/* Capacity Section */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-700">C A P A C I T Y</h2>
        <ul className="mt-4 space-y-2 text-gray-600">
          <li className="flex justify-between">
            <span>2 Person</span>
            <span className="text-gray-400">(10)</span>
          </li>
          <li className="flex justify-between">
            <span>4 Person</span>
            <span className="text-gray-400">(14)</span>
          </li>
          <li className="flex justify-between">
            <span>6 Person</span>
            <span className="text-gray-400">(12)</span>
          </li>
          <li className="flex justify-between">
            <span>8 or More</span>
            <span className="text-gray-400">(16)</span>
          </li>
        </ul>
      </div>

      {/* Price Section */}
      <div>
        <h2 className="text-lg font-semibold text-gray-700">P R I C E</h2>
        <div className="mt-4">
          <p className="text-gray-600">Max. $100.00</p>
          <input
            type="range"
            min="0"
            max="100"
            defaultValue="50"
            className="w-full mt-2 appearance-none bg-gray-300 h-1 rounded-full focus:outline-none"
          />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
