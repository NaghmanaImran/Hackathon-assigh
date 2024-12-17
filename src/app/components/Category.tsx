import React from "react";
import Image from "next/image";
import Link from "next/link";

const Category = () => {
  return (
    <>
    <Link href="/contents">
    <h1 className=" w-92px h-24px px-6 text-[#90A3BF]">Popular Car</h1>
    </Link>

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
        <Image src="/Car2.png" width={100} height={100} alt="Car 1" className="w-full h-[120px] object-contain my-4" />
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

      {/* Duplicate Card Structure for Additional Cards */}
      <div className="bg-white rounded-lg shadow-lg p-4 w-[250px]">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg">Nissan GT - R</h3>
          <span className="text-gray-500 text-xl">♡</span>
        </div>
        <p className="text-gray-500 text-sm">Sport</p>
        <img src="/Car1.png" alt="Car 2" className="w-full h-[120px] object-contain my-4" />
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
          <span className="text-gray-500 text-xl">♡</span>
        </div>
        <p className="text-gray-500 text-sm">Sport</p>
        <img src="/Car.png" alt="Car 2" className="w-full h-[120px] object-contain my-4" />
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
          <span className="text-gray-500 text-xl">♡</span>
        </div>
        <p className="text-gray-500 text-sm">Sport</p>
        <img src="/Car6.png" alt="Car 2" className="w-full h-[120px] object-contain my-4" />
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
        {/* Heart Icon */}
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg">Koenigsegg</h3>
          <span className="text-red-500 text-xl">❤️</span>
        </div>
        <p className="text-gray-500 text-sm">Sport</p>
        {/* Car Image */}
        <Image src="/Car9.png" width={100} height={100} alt="Car 1" className="w-full h-[120px] object-contain my-4" />

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
        {/* Heart Icon */}
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg">Koenigsegg</h3>
          <span className="text-red-500 text-xl">❤️</span>
        </div>
        <p className="text-gray-500 text-sm">Sport</p>
        {/* Car Image */}
        <Image src="/Car10.png" width={100} height={100} alt="Car 1" className="w-full h-[120px] object-contain my-4" />

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
        {/* Heart Icon */}
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg">Koenigsegg</h3>
          <span className="text-red-500 text-xl">❤️</span>
        </div>
        <p className="text-gray-500 text-sm">Sport</p>
        {/* Car Image */}
        <Image src="/Car11.png" width={100} height={100} alt="Car 1" className="w-full h-[120px] object-contain my-4" />

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
        {/* Heart Icon */}
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg">Koenigsegg</h3>
          <span className="text-red-500 text-xl">❤️</span>
        </div>
        <p className="text-gray-500 text-sm">Sport</p>
        {/* Car Image */}
        <Image src="/Car12.png" width={100} height={100} alt="Car 1" className="w-full h-[120px] object-contain my-4" />

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
        {/* Heart Icon */}
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg">Koenigsegg</h3>
          <span className="text-red-500 text-xl">❤️</span>
        </div>
        <p className="text-gray-500 text-sm">Sport</p>
        {/* Car Image */}
        <Image src="/Car13.png" width={100} height={100} alt="Car 1" className="w-full h-[120px] object-contain my-4" />

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
        {/* Heart Icon */}
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg">Koenigsegg</h3>
          <span className="text-red-500 text-xl">❤️</span>
        </div>
        <p className="text-gray-500 text-sm">Sport</p>
        {/* Car Image */}
        <Image src="/Car2.png" width={100} height={100} alt="Car 1" className="w-full h-[120px] object-contain my-4" />

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
        {/* Heart Icon */}
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg">Koenigsegg</h3>
          <span className="text-red-500 text-xl">❤️</span>
        </div>
        <p className="text-gray-500 text-sm">Sport</p>
        {/* Car Image */}
        <Image src="/Car14.png" width={100} height={100} alt="Car 1" className="w-full h-[120px] object-contain my-4" />

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
        {/* Heart Icon */}
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg">Koenigsegg</h3>
          <span className="text-red-500 text-xl">❤️</span>
        </div>
        <p className="text-gray-500 text-sm">Sport</p>
        {/* Car Image */}
        <Image src="/Car15.png" width={100} height={100} alt="Car 1" className="w-full h-[120px] object-contain my-4" />

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
      <Link href="/car-details">
      <button className="w-[156] h-[44px] text-white bg-[#3563E9] px-4 py-1 rounded-lg hover:bg-blue-900">Show more car</button>
      </Link>   
      
    </div>
    </>
  );
};

export default Category;