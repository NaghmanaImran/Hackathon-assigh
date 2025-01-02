import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-[360px] h-[1600] p-4 bg-white shadow-md">
      {/* Type Section */}
      <div className="mb-6">
        <h3 className="text-gray-700 font-bold mb-3">Type</h3>
        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox text-blue-600" defaultChecked />
            <span className="text-gray-700">Sport (10)</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox text-blue-600" defaultChecked />
            <span className="text-gray-700">SUV (12)</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox text-blue-600" />
            <span className="text-gray-700">MPV (16)</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox text-blue-600" />
            <span className="text-gray-700">Sedan (20)</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox text-blue-600" />
            <span className="text-gray-700">Coupe (14)</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox text-blue-600" />
            <span className="text-gray-700">Hatchback (14)</span>
          </label>
        </div>
      </div>

      {/* Capacity Section */}
      <div className="mb-6">
        <h3 className="text-gray-700 font-bold mb-3">Capacity</h3>
        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox text-blue-600" defaultChecked />
            <span className="text-gray-700">2 Person (10)</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox text-blue-600" />
            <span className="text-gray-700">4 Person (14)</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox text-blue-600" />
            <span className="text-gray-700">6 Person (12)</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox text-blue-600" defaultChecked />
            <span className="text-gray-700">8 or More (16)</span>
          </label>
        </div>
      </div>

      {/* Price Section */}
      <div>
        <h3 className="text-gray-700 font-bold mb-3">Price</h3>
        <input
          type="range"
          min="0"
          max="100"
          className="w-full accent-blue-600"
          defaultValue="50"
        />
      </div>
    </div>
  );
};

export default Sidebar;
