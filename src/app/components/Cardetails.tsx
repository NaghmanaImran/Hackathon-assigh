import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Cardetails = () => {
  const cars = [
    {
      name: 'Koenigsegg',
      type: 'Sport',
      image: '/Car1.png',
      fuel: '90L',
      transmission: 'Manual',
      capacity: '2 People',
      price: '$99.00/day',
    },
    {
      name: 'Ferrari',
      type: 'Sport',
      image: '/Car2.png',
      fuel: '80L',
      transmission: 'Automatic',
      capacity: '2 People',
      price: '$120.00/day',
    },
   
    {
      name: 'Lamborghini',
      type: 'Sport',
      image: '/Car3.png',
      fuel: '85L',
      transmission: 'Manual',
      capacity: '2 People',
      price: '$150.00/day',
    },
    {
      name: 'Lamborghini',
      type: 'Sport',
      image: '/Car4.png',
      fuel: '85L',
      transmission: 'Manual',
      capacity: '2 People',
      price: '$150.00/day',
    },
    {
      name: 'Lamborghini',
      type: 'Sport',
      image: '/Car5.png',
      fuel: '85L',
      transmission: 'Manual',
      capacity: '2 People',
      price: '$150.00/day',
    },
    {
      name: 'Lamborghini',
      type: 'Sport',
      image: '/Car6.png',
      fuel: '85L',
      transmission: 'Manual',
      capacity: '2 People',
      price: '$150.00/day',
    },
    {
      name: 'Lamborghini',
      type: 'Sport',
      image: '/Car9.png',
      fuel: '85L',
      transmission: 'Manual',
      capacity: '2 People',
      price: '$150.00/day',
    },
    {
      name: 'Lamborghini',
      type: 'Sport',
      image: '/Car10.png',
      fuel: '85L',
      transmission: 'Manual',
      capacity: '2 People',
      price: '$150.00/day',
    },
    {
      name: 'Lamborghini',
      type: 'Sport',
      image: '/Car11.png',
      fuel: '85L',
      transmission: 'Manual',
      capacity: '2 People',
      price: '$150.00/day',
    },
    // Add more car objects as needed
  ];

  return (
    <div className="p-4 flex flex-wrap justify-center gap-4">
      {cars.map((car, index) => (
        <div key={index} className="bg-white rounded-lg shadow-lg p-4 w-[30%]">
          {/* Heart Icon */}
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-lg">{car.name}</h3>
            <span className="text-red-500 text-xl">❤️</span>
          </div>
          <p className="text-gray-500 text-sm">{car.type}</p>
          {/* Car Image */}
          <Image
            src={car.image}
            width={317}
            height={388}
            alt={`Car ${index + 1}`}
            className="w-full h-[266px] object-contain my-4"
          />
          {/* Specifications */}
          <div className="flex justify-between text-gray-500 text-sm">
            <span>{car.fuel}</span>
            <span>{car.transmission}</span>
            <span>{car.capacity}</span>
          </div>
          {/* Pricing */}
          <div className="flex justify-between items-center my-2">
            <p className="text-lg font-bold text-gray-800">{car.price}</p>
            <button className="bg-blue-500 text-white px-4 py-1 rounded-lg">Rent Now</button>
          </div>
        </div>
      ))}

      {/* Centered Button */}
      <div className="flex justify-center w-full mt-8">
        <Link href="/contents">
          <button className="w-[156px] h-[44px] text-white bg-[#3563E9] px-4 py-2 rounded-lg hover:bg-blue-900">
            Show more car
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cardetails;
