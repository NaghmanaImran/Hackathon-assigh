import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Contents = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      {/* First Card */}
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-5xl px-4">
        <div className="relative bg-[#54A6FF] text-white rounded-lg p-8 w-full md:w-[640px] h-[360px] shadow-lg overflow-hidden">
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
              Providing cheap car rental services and safe and comfortable facilities.
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
              width={224}
              height={126}
              className="w-56 object-contain"
            />
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="flex flex-col items-center gap-4 mt-8">
        <Image
          src="/star.png"
          width={220}
          height={72}
          alt="Star Icon"
          className="w-56 object-contain"
        />
        <p className="text-center px-4">
          NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".
        </p>
        <Image
          src="/view2.png"
          width={220}
          height={72}
          alt="View Image"
          className="w-56 object-contain"
        />
 <Image
          src="/Look 3.png"
          width={220}
          height={72}
          alt="View Image"
          className="w-56 object-contain"
        />
        
      </div>

      {/* Car Cards */}
      <div className="p-4 flex flex-wrap justify-center gap-6 mt-8">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-lg p-4 w-[250px]">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-lg">Koenigsegg</h3>
            <span className="text-red-500 text-xl">❤️</span>
          </div>
          <p className="text-gray-500 text-sm">Sport</p>
          <Image
            src="/Car2.png"
            width={100}
            height={100}
            alt="Koenigsegg"
            className="w-full h-[120px] object-contain my-4"
          />
          <div className="flex justify-between text-gray-500 text-sm">
            <span>90L</span>
            <span>Manual</span>
            <span>2 People</span>
          </div>
          <div className="flex justify-between items-center my-2">
            <p className="text-lg font-bold text-gray-800">$99.00/day</p>
            <button className="bg-blue-500 text-white px-4 py-1 rounded-lg hover:bg-blue-600">
              Rent Now
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-lg p-4 w-[250px]">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-lg">Nissan GT - R</h3>
            <span className="text-gray-500 text-xl">♡</span>
          </div>
          <p className="text-gray-500 text-sm">Sport</p>
          <Image
            src="/Car1.png"
            width={100}
            height={100}
            alt="Nissan GT - R"
            className="w-full h-[120px] object-contain my-4"
          />
          <div className="flex justify-between text-gray-500 text-sm">
            <span>80L</span>
            <span>Manual</span>
            <span>2 People</span>
          </div>
          <div className=" justify-between items-center my-2">
            <p className="text-lg font-bold text-gray-800">$89.00/day</p>
            
          </div>
        </div>
      </div>
        <Link href="/rentalform">
              <button className="bg-blue-500 text-white px-4 py-1 rounded-lg hover:bg-blue-600">
                Show more cars
              </button>
            </Link>
    </div>
  );
};

export default Contents;
