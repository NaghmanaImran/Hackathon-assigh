import React from "react";

const Heero = () => {
  return (
    <div className="flex justify-center items-center space-x-4 p-4">
      {/* Image 1 */}
      <img
        src="/banner2.png" 
        alt="Image 1"
        className="w-1/2 h-auto rounded-lg shadow-lg"
      />
      {/* Image 2 */}
      <img
        src="/banner1 ss.png" 
        alt="Image 2"
        className="w-1/2 h-auto rounded-lg shadow-lg"
      />
    </div>
  );
};

export default Heero;
