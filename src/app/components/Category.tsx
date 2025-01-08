import React from "react";
import Image from "next/image";
import Link from "next/link";

const cars = [
  {
    name: "Koenigsegg",
    type: "Sport",
    image: "/Car1.png",
    fuel: "90L",
    transmission: "Manual",
    seats: "2 People",
    price: "$99.00/day",
  },
  {
    name: "Nissan GT - R",
    type: "Sport",
    image: "/Car2.png",
    fuel: "80L",
    transmission: "Manual",
    seats: "2 People",
    price: "$80.00/day",
  },
  {
    name: "Koenigsegg",
    type: "Sport",
    image: "/Car6.png",
    fuel: "90L",
    transmission: "Manual",
    seats: "2 People",
    price: "$99.00/day",
  },
  {
    name: "Koenigsegg",
    type: "Sport",
    image: "/Car9.png",
    fuel: "90L",
    transmission: "Manual",
    seats: "2 People",
    price: "$99.00/day",
  },
  {
    name: "Koenigsegg",
    type: "Sport",
    image: "/Car10.png",
    fuel: "90L",
    transmission: "Manual",
    seats: "2 People",
    price: "$99.00/day",
  },
  {
    name: "Koenigsegg",
    type: "Sport",
    image: "/Car11.png",
    fuel: "90L",
    transmission: "Manual",
    seats: "2 People",
    price: "$99.00/day",
  },
  {
    name: "Koenigsegg",
    type: "Sport",
    image: "/Car12.png",
    fuel: "90L",
    transmission: "Manual",
    seats: "2 People",
    price: "$99.00/day",
  },
  {
    name: "Koenigsegg",
    type: "Sport",
    image: "/Car13.png",
    fuel: "90L",
    transmission: "Manual",
    seats: "2 People",
    price: "$99.00/day",
  },
  {
    name: "Koenigsegg",
    type: "Sport",
    image: "/Car14.png",
    fuel: "90L",
    transmission: "Manual",
    seats: "2 People",
    price: "$99.00/day",
  },
];

const Category = () => {
  return (
    <>
      <Link href="/contents">
        <h1 className="w-92px h-24px px-6 text-[#90A3BF]">Popular Car</h1>
      </Link>

      <div className="p-4 flex flex-wrap justify-center gap-[50px]">
        {cars.map((car, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-4 w-[250px]"
          >
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-lg">{car.name}</h3>
              <span className="text-red-500 text-xl">❤️</span>
            </div>
            <p className="text-gray-500 text-sm">{car.type}</p>
            <Image
              src={car.image}
              alt={`${car.name} Image`}
              width={200}
              height={120}
              className="w-full h-[120px] object-contain my-4"
            />
            <div className="flex justify-between text-gray-500 text-sm">
              <span>{car.fuel}</span>
              <span>{car.transmission}</span>
              <span>{car.seats}</span>
            </div>
            <div className="flex justify-between items-center my-2">
              <p className="text-lg font-bold text-gray-800">{car.price}</p>
              <Link href="/rentalform">
                <button className="bg-blue-500 text-white px-4 py-1 rounded-lg">
                  Rent Now
                </button>
              </Link>
            </div>
          </div>
        ))}
        <Link href="/car-details">
          <button className="w-[156px] h-[44px] text-white bg-[#3563E9] px-4 py-1 rounded-lg hover:bg-blue-900">
            Show More Cars
          </button>
        </Link>
      </div>
    </>
  );
};

export default Category;
