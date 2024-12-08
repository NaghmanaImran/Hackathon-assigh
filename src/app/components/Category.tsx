import React from "react";


const Category = () => {
  return (
    <>
    
    <h1>Popular Car</h1>

    <div className="p-4 flex flex-wrap justify-center gap-[50px]">
      {/* Card 1 */}
      <div className="bg-white rounded-lg shadow-lg p-4 w-[250px]">
        {/* Heart Icon */}
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg">Koenigsegg</h3>
          <span className="text-red-500 text-xl">❤️</span>
        </div>
        <p className="text-gray-500 text-sm">Sport</p>
        {/* Car Image */}
        <img src="/Car.png" alt="Car 1" className="w-full h-[120px] object-contain my-4" />
        {/* Specifications */}
        <div className="flex justify-between text-gray-500 text-sm">
          <span>90L</span>
          <span>Manual</span>
          <span>2 People</span>
        </div>
        {/* Pricing */}
        <div className="flex justify-between items-center my-2">
          <p className="text-lg font-bold text-gray-800">$99.00/day</p>
          <button className="bg-blue-500 text-white px-4 py-1 rounded-lg">Rent Now</button>
        </div>
      </div>

      
      <div className="bg-white rounded-lg shadow-lg p-4 w-[250px]">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg">Nissan GT - R</h3>
          <span className="text-red-500 text-xl">❤️</span>
        </div>
        <p className="text-gray-500 text-sm">Sport</p>
        <img src="/car (1).png" alt="Car 2" className="w-full h-[120px] object-contain my-4" />
        <div className="flex justify-between text-gray-500 text-sm">
          <span>80L</span>
          <span>Manual</span>
          <span>6 People</span>
        </div>
        <div className="flex justify-between items-center my-2">
          <p className="text-lg font-bold text-gray-800">$80.00/day</p>
          <button className="bg-blue-500 text-white px-4 py-1 rounded-lg">Rent Now</button>
        </div>
      </div>


      <div className="bg-white rounded-lg shadow-lg p-4 w-[250px]">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg">Rolls - Royce</h3>
          <span className="text-red-500 text-xl">❤️</span>
        </div>
        <p className="text-gray-500 text-sm">Sedan</p>
        <img src="/car (4).png" alt="Car 2" className="w-full h-[120px] object-contain my-4" />
        <div className="flex justify-between text-gray-500 text-sm">
          <span>80L</span>
          <span>Manual</span>
          <span>2 People</span>
        </div>
        <div className="flex justify-between items-center my-2">
          <p className="text-lg font-bold text-gray-800">$96.00/day</p>
          <button className="bg-blue-500 text-white px-4 py-1 rounded-lg">Rent Now</button>
        </div>
      </div>



      <div className="bg-white rounded-lg shadow-lg p-4 w-[250px]">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg">All New Rush</h3>
          <span className="text-red-500 text-xl">❤️</span>
        </div>
        <p className="text-gray-500 text-sm">Sport</p>
        <img src="/car (5).png" alt="Car 2" className="w-full h-[120px] object-contain my-4" />
        <div className="flex justify-between text-gray-500 text-sm">
          <span>80L</span>
          <span>Manual</span>
          <span>2 People</span>
        </div>
        <div className="flex justify-between items-center my-2">
          <p className="text-lg font-bold text-gray-800">$80.00/day</p>
          <button className="bg-blue-500 text-white px-4 py-1 rounded-lg">Rent Now</button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-4 w-[250px]">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg">CR  - V</h3>
          <span className="text-gray-500 text-xl">♡</span>
        </div>
        <p className="text-gray-500 text-sm">suv</p>
        <img src="/car (6).png" alt="Car 2" className="w-full h-[120px] object-contain my-4" />
        <div className="flex justify-between text-gray-500 text-sm">
          <span>80L</span>
          <span>Manual</span>
          <span>2 People</span>
        </div>
        <div className="flex justify-between items-center my-2">
          <p className="text-lg font-bold text-gray-800">$72.00/day</p>
          <button className="bg-blue-500 text-white px-4 py-1 rounded-lg">Rent Now</button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-4 w-[250px]">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg">All New Terios</h3>
          <span className="text-gray-500 text-xl">♡</span>
        </div>
        <p className="text-gray-500 text-sm">suv</p>
        <img src="/car (7).png" alt="Car 2" className="w-full h-[120px] object-contain my-4" />
        <div className="flex justify-between text-gray-500 text-sm">
          <span>80L</span>
          <span>Manual</span>
          <span>2 People</span>
        </div>
        <div className="flex justify-between items-center my-2">
          <p className="text-lg font-bold text-gray-800">$80.00/day</p>
          <button className="bg-blue-500 text-white px-4 py-1 rounded-lg">Rent Now</button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-4 w-[250px]">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg">NMG ZX Exclusice</h3>
          <span className="text-gray-500 text-xl">♡</span>
        </div>
        <p className="text-gray-500 text-sm">Hatchback</p>
        <img src="/car (8).png" alt="Car 2" className="w-full h-[120px] object-contain my-4" />
        <div className="flex justify-between text-gray-500 text-sm">
          <span>80L</span>
          <span>Manual</span>
          <span>2 People</span>
        </div>
        <div className="flex justify-between items-center my-2">
          <p className="text-lg font-bold text-gray-800">$74.00/day</p>
          <button className="bg-blue-500 text-white px-4 py-1 rounded-lg">Rent Now</button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-4 w-[250px]">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg">New MG ZS</h3>
          <span className="text-red-500 text-xl">❤️</span>
        </div>
        <p className="text-gray-500 text-sm">suv</p>
        <img src="/car (9).png" alt="Car 2" className="w-full h-[120px] object-contain my-4" />
        <div className="flex justify-between text-gray-500 text-sm">
          <span>80L</span>
          <span>Manual</span>
          <span>2 People</span>
        </div>
        <div className="flex justify-between items-center my-2">
          <p className="text-lg font-bold text-gray-800">$80.00/day</p>
          <button className="bg-blue-500 text-white px-4 py-1 rounded-lg">Rent Now</button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-4 w-[250px]">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg">MG ZX Excite</h3>
          <span className="text-gray-500 text-xl">♡</span>
        </div>
        <p className="text-gray-500 text-sm">Hatchback</p>
        <img src="/car (10).png" alt="Car 2" className="w-full h-[120px] object-contain my-4" />
        <div className="flex justify-between text-gray-500 text-sm">
          <span>80L</span>
          <span>Manual</span>
          <span>2 People</span>
        </div>
        <div className="flex justify-between items-center my-2">
          <p className="text-lg font-bold text-gray-800">$76.00/day</p>
          <button className="bg-blue-500 text-white px-4 py-1 rounded-lg">Rent Now</button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-4 w-[250px]">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg">Nissan GT - R</h3>
          <span className="text-red-500 text-xl">❤️</span>
        </div>
        <p className="text-gray-500 text-sm">Sport</p>
        <img src="/car (11).png" alt="Car 2" className="w-full h-[120px] object-contain my-4" />
        <div className="flex justify-between text-gray-500 text-sm">
          <span>80L</span>
          <span>Manual</span>
          <span>2 People</span>
        </div>
        <div className="flex justify-between items-center my-2">
          <p className="text-lg font-bold text-gray-800">$80.00/day</p>
          <button className="bg-blue-500 text-white px-4 py-1 rounded-lg">Rent Now</button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-4 w-[250px]">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg">Nissan GT - R</h3>
          <span className="text-red-500 text-xl">❤️</span>
        </div>
        <p className="text-gray-500 text-sm">Sport</p>
        <img src="/car (12).png" alt="Car 2" className="w-full h-[120px] object-contain my-4" />
        <div className="flex justify-between text-gray-500 text-sm">
          <span>80L</span>
          <span>Manual</span>
          <span>2 People</span>
        </div>
        <div className="flex justify-between items-center my-2">
          <p className="text-lg font-bold text-gray-800">$74.00/day</p>
          <button className="bg-blue-500 text-white px-4 py-1 rounded-lg">Rent Now</button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-4 w-[250px]">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg">Nissan GT - R</h3>
          <span className="text-red-500 text-xl">❤️</span>
        </div>
        <p className="text-gray-500 text-sm">Sport</p>
        <img src="/car (13).png" alt="Car 2" className="w-full h-[120px] object-contain my-4" />
        <div className="flex justify-between text-gray-500 text-sm">
          <span>80L</span>
          <span>Manual</span>
          <span>2 People</span>
        </div>
        <div className="flex justify-between items-center my-2">
          <p className="text-lg font-bold text-gray-800">$80.00/day</p>
          <button className="bg-blue-500 text-white px-4 py-1 rounded-lg">Rent Now</button>
        </div>
      </div>

      
      {/* Add more cards as needed */}
    </div>
    </>
  );
};

export default Category;
