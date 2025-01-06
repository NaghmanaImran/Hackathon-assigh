import Image from 'next/image';
import Link from 'next/link';

export default function CarRentalUI() {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto p-4">
        {/* Car Card */}
        <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg p-6 gap-6">
          <div className="flex-1 text-center">
            <Image
              src="/banner2.png"
              alt="Nissan GT-R"
              width={400}
              height={300}
              className="rounded-lg mx-auto"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-800">Nissan GT-R</h2>
            <p className="text-gray-600 mt-2">
              NISMO has become the embodiment of Nissan s outstanding performance &lsquo; inspired by the most unforgiving proving ground &lsquo; the race track.
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-gray-700">
              <span>Type: Sport</span>
              <span>Capacity: 2 Person</span>
              <span>Steering: Manual</span>
              <span>Gasoline: 70L</span>
            </div>
            <div className="mt-4 text-xl font-bold text-blue-600">
              $80.00/day <span className="line-through text-gray-500">$100.00</span>
            </div>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Rent Now
            </button>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Reviews (13)</h3>
          <div className="space-y-6">
            {/* Review 1 */}
            <div className="flex items-start gap-4">
              <Image
                src="/View.png"
                alt="Alex Stanton"
                width={100}
                height={100}
                className="rounded-full"
              />
              <div>
                <h4 className="text-lg font-medium text-gray-800">
                  Alex Stanton <span className="text-sm text-gray-500">21 July 2022</span>
                </h4>
                <p className="text-gray-600 mt-1">
                  We are very happy with the service from the MORENT App. Morent has a low price and a large variety of cars with good and comfortable facilities.
                </p>
                <div className="text-yellow-500 mt-2">★★★★★</div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="flex items-start gap-4">
              <Image
                src="/view2.png"
                alt="Skylar Dias"
                width={150}
                height={150}
                className="rounded-full"
              />
              <div>
                <h4 className="text-lg font-medium text-gray-800">
                  Skylar Dias <span className="text-sm text-gray-500">20 July 2022</span>
                </h4>
                <p className="text-gray-600 mt-1">
                  We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities.
                </p>
                <div className="text-yellow-500 mt-2">★★★★★</div>
              </div>
            </div>
          </div>
        </div>
      </div>
       <Link href="/detailsrent">
          <button className="w-[156px] h-[44px] text-white bg-[#3563E9] px-4 py-2 rounded-lg hover:bg-blue-900">
            Show more car
          </button>
          </Link>
    </div>
  );
}
