import React from "react";
import Image from "next/image";

const Category = () => {
  return (
    <>
      <h1>Popular Car</h1>

      <div className="p-4 flex flex-wrap justify-center gap-[50px]">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-lg p-4 w-[250px]">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-lg">Koenigsegg</h3>
            <span className="text-red-500 text-xl">❤️</span>
          </div>
          <p className="text-gray-500 text-sm">Sport</p>
          <Image
            src="/Car.png"
            alt="Car 1"
            width={250}
            height={120}
            className="w-full h-[120px] object-contain my-4"
          />
          <div className="flex justify-between text-gray-500 text-sm">
            <span>90L</span>
            <span>Manual</span>
            <span>2 People</span>
          </div>
          <div className="flex justify-between items-center my-2">
            <p className="text-lg font-bold text-gray-800">$99.00/day</p>
            <button className="bg-blue-500 text-white px-4 py-1 rounded-lg">
              Rent Now
            </button>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-4 w-[250px]">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-lg">Koenigsegg</h3>
            <span className="text-red-500 text-xl">❤️</span>
          </div>
          <p className="text-gray-500 text-sm">Sport</p>
          <Image
            src="/Car.png"
            alt="Car 1"
            width={250}
            height={120}
            className="w-full h-[120px] object-contain my-4"
          />
          <div className="flex justify-between text-gray-500 text-sm">
            <span>90L</span>
            <span>Manual</span>
            <span>2 People</span>
          </div>
          <div className="flex justify-between items-center my-2">
            <p className="text-lg font-bold text-gray-800">$99.00/day</p>
            <button className="bg-blue-500 text-white px-4 py-1 rounded-lg">
              Rent Now
            </button>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-4 w-[250px]">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-lg">Koenigsegg</h3>
            <span className="text-red-500 text-xl">❤️</span>
          </div>
          <p className="text-gray-500 text-sm">Sport</p>
          <Image
            src="/Car.png"
            alt="Car 1"
            width={250}
            height={120}
            className="w-full h-[120px] object-contain my-4"
          />
          <div className="flex justify-between text-gray-500 text-sm">
            <span>90L</span>
            <span>Manual</span>
            <span>2 People</span>
          </div>
          <div className="flex justify-between items-center my-2">
            <p className="text-lg font-bold text-gray-800">$99.00/day</p>
            <button className="bg-blue-500 text-white px-4 py-1 rounded-lg">
              Rent Now
            </button>
          </div>
        </div>
        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-lg p-4 w-[250px]">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-lg">Nissan GT - R</h3>
            <span className="text-red-500 text-xl">❤️</span>
          </div>
          <p className="text-gray-500 text-sm">Sport</p>
          <Image
            src="/Car1.png"
            alt="Car 2"
            width={250}
            height={120}
            className="w-full h-[120px] object-contain my-4"
          />
          <div className="flex justify-between text-gray-500 text-sm">
            <span>80L</span>
            <span>Manual</span>
            <span>6 People</span>
          </div>
          <div className="flex justify-between items-center my-2">
            <p className="text-lg font-bold text-gray-800">$80.00/day</p>
            <button className="bg-blue-500 text-white px-4 py-1 rounded-lg">
              Rent Now
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-lg p-4 w-[250px]">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-lg">Rolls - Royce</h3>
            <span className="text-red-500 text-xl">❤️</span>
          </div>
          <p className="text-gray-500 text-sm">Sedan</p>
          <Image
            src="/Car4.png"
            alt="Car 3"
            width={250}
            height={120}
            className="w-full h-[120px] object-contain my-4"
          />
          <div className="flex justify-between text-gray-500 text-sm">
            <span>80L</span>
            <span>Manual</span>
            <span>2 People</span>
          </div>
          <div className="flex justify-between items-center my-2">
            <p className="text-lg font-bold text-gray-800">$96.00/day</p>
            <button className="bg-blue-500 text-white px-4 py-1 rounded-lg">
              Rent Now
            </button>
          </div>
        </div>

        {/* Additional Cards */}
        {[
          { name: "All New Rush", src: "/images/Car5.png", price: "$80.00/day" },
          { name: "CR - V", src: "/images/Car6.png", price: "$72.00/day" },
          { name: "All New Terios", src: "/images/Car7.png", price: "$80.00/day" },
          { name: "NMG ZX Exclusive", src: "/images/Car8.png", price: "$74.00/day" },
          { name: "New MG ZS", src: "/images/Car9.png", price: "$80.00/day" },
          { name: "MG ZX Excite", src: "/images/Car10.png", price: "$76.00/day" },
          { name: "Nissan GT - R", src: "/images/Car11.png", price: "$80.00/day" },
        ].map((car, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-4 w-[250px]"
          >
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-lg">{car.name}</h3>
              <span className="text-red-500 text-xl">❤️</span>
            </div>
            <p className="text-gray-500 text-sm">Sport</p>
            <Image
              src={car.src}
              alt={car.name}
              width={250}
              height={120}
              className="w-full h-[120px] object-contain my-4"
            />
            <div className="flex justify-between text-gray-500 text-sm">
              <span>80L</span>
              <span>Manual</span>
              <span>2 People</span>
            </div>
            <div className="flex justify-between items-center my-2">
              <p className="text-lg font-bold text-gray-800">{car.price}</p>
              <button className="bg-blue-500 text-white px-4 py-1 rounded-lg">
                Rent Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Category;
