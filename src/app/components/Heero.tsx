import React from "react";
import Image from "next/image";

const Heero = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row gap-6 w-[640] max-w-5xl">
        {/* First Card */}
        <div className="relative bg-[#54A6FF] text-white rounded-lg p-8 width=[640px] h-[360px] max-w-lg shadow-lg overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="h-full bg-blue-300 bg-chevron-pattern"></div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Easy way to rent a car at a low price
            </h1>
            <p className="text-lg mb-6">
              Providing cheap car rental services and safe and comfortable
              facilities.
            </p>
            <button className="bg-white text-green-700 px-6 py-2 rounded-lg shadow-md hover:bg-green-100">
              Book Now
            </button>
          </div>
               {/* Car Image */}
        <div className="absolute bottom-4 right-4">
          <Image
            src="/car.png"
            alt="Car Image"
            width={224} // Width in pixels
            height={126} // Height in pixels
            className="w-56 object-contain"
          />
        </div>
        </div>

        {/* Second Card */}
        <div className="relative bg-[#3563E9] text-white rounded-lg p-8 w-full max-w-lg shadow-lg overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="h-full bg-green-300 bg-chevron-pattern"></div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Affordable Car Rentals
            </h1>
            <p className="text-lg mb-6">   Explore our collection of cars available at the best prices.
            </p>
            <button className="bg-white text-green-700 px-6 py-2 rounded-lg shadow-md hover:bg-green-100">
              Book Now
            </button>
            
           
          </div>
             {/* Car Image */}
        <div className="absolute bottom-4 right-4">
          <Image
            src="/car2.png"
            alt="Car Image"
            width={224} // Width in pixels
            height={126} // Height in pixels
            className="w-56 object-contain"
          />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Heero;
