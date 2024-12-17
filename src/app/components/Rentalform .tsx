import Link from "next/link";
import React from "react";

const RentalForm = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Billing Info */}
          <div className="col-span-2 bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-700">Billing Info</h2>
            <p className="text-sm text-gray-500">Please enter your billing info</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <input
                type="text"
                placeholder="Your name"
                className="border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Phone number"
                className="border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Address"
                className="border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Town / City"
                className="border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Rental Summary */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-700">Rental Summary</h2>
            <p className="text-sm text-gray-500">
              Prices may change depending on the length of the rental.
            </p>
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <p>Nissan GT - R</p>
                <p className="font-bold">$80.00</p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <p>Subtotal</p>
                <p>$80.00</p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <p>Tax</p>
                <p>$0.00</p>
              </div>
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Apply promo code"
                  className="border border-gray-300 rounded-md w-full p-3 focus:ring focus:ring-blue-500"
                />
                <button className="w-full bg-blue-600 text-white rounded-md mt-2 p-3 hover:bg-blue-700">
                  Apply now
                </button>
              </div>
              <div className="flex items-center justify-between mt-4 font-semibold text-lg">
                <p>Total Rental Price</p>
                <p>$80.00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Rental Info */}
        <div className="bg-white shadow-lg rounded-lg p-6 mt-8">
          <h2 className="text-xl font-semibold text-gray-700">Rental Info</h2>
          <p className="text-sm text-gray-500">Please select your rental date</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {/* Pick-Up */}
            <div>
              <h3 className="text-gray-700 font-semibold">Pick - Up</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                <select className="border border-gray-300 rounded-md p-3">
                  <option>Select your city</option>
                </select>
                <input
                  type="date"
                  className="border border-gray-300 rounded-md p-3"
                />
                <select className="border border-gray-300 rounded-md p-3">
                  <option>Select your time</option>
                </select>
              </div>
            </div>

            {/* Drop-Off */}
            <div>
              <h3 className="text-gray-700 font-semibold">Drop - Off</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                <select className="border border-gray-300 rounded-md p-3">
                  <option>Select your city</option>
                </select>
                <input
                  type="date"
                  className="border border-gray-300 rounded-md p-3"
                />
                <select className="border border-gray-300 rounded-md p-3">
                  <option>Select your time</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div className="bg-white shadow-lg rounded-lg p-6 mt-8">
          <h2 className="text-xl font-semibold text-gray-700">Payment Method</h2>
          <p className="text-sm text-gray-500">Please enter your payment method</p>
          <div className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <input
                type="text"
                placeholder="Card number"
                className="border border-gray-300 rounded-md p-3"
              />
              <input
                type="text"
                placeholder="Expiration date"
                className="border border-gray-300 rounded-md p-3"
              />
              <input
                type="text"
                placeholder="Card holder"
                className="border border-gray-300 rounded-md p-3"
              />
              <input
                type="text"
                placeholder="CVC"
                className="border border-gray-300 rounded-md p-3"
              />
            </div>
          </div>
        </div>

        {/* Confirmation */}
        <div className="bg-white shadow-lg rounded-lg p-6 mt-8">
          <h2 className="text-xl font-semibold text-gray-700">Confirmation</h2>
          <p className="text-sm text-gray-500">Just a few clicks and your rental is ready!</p>
          <div className="flex items-center space-x-2 mt-4">
            <input type="checkbox" />
            <p className="text-gray-500">I agree to receive marketing emails.</p>
          </div>
          <div className="flex items-center space-x-2 mt-2">
            <input type="checkbox" />
            <p className="text-gray-500">
              I agree with the terms and conditions.
            </p>
          </div>
          <Link href="">
          <button className="w-full bg-blue-600 text-white rounded-md mt-4 p-3 hover:bg-blue-700">
            Rent Now
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RentalForm;
