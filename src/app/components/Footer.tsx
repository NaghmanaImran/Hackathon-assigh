import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white py-10 border-t border-gray-200">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-4 gap-8">
       
        <div>
          <h2 className="text-2xl font-bold text-blue-600">MORENT</h2>
          <p className="text-gray-500 mt-4">
            Our vision is to provide convenience and help increase your sales business.
          </p>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold mb-4">About</h3>
          <ul className="text-gray-500 space-y-2">
            <li><a href="#" className="hover:text-blue-600">How it works</a></li>
            <li><a href="#" className="hover:text-blue-600">Featured</a></li>
            <li><a href="#" className="hover:text-blue-600">Partnership</a></li>
            <li><a href="#" className="hover:text-blue-600">Business Relation</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-4">Community</h3>
          <ul className="text-gray-500 space-y-2">
            <li><a href="#" className="hover:text-blue-600">Events</a></li>
            <li><a href="#" className="hover:text-blue-600">Blog</a></li>
            <li><a href="#" className="hover:text-blue-600">Podcast</a></li>
            <li><a href="#" className="hover:text-blue-600">Invite a friend</a></li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold mb-4">Socials</h3>
          <ul className="text-gray-500 space-y-2">
            <li><a href="#" className="hover:text-blue-600">Discord</a></li>
            <li><a href="#" className="hover:text-blue-600">Instagram</a></li>
            <li><a href="#" className="hover:text-blue-600">Twitter</a></li>
            <li><a href="#" className="hover:text-blue-600">Facebook</a></li>
          </ul>`````
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 mt-8 flex flex-col md:flex-row justify-between items-center border-t border-gray-200 pt-6">
        <p className="text-black">&copy; 2022 MORENT. All rights reserved</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="text-black hover:text-blue-600">Privacy & Policy</a>
          <a href="#" className="text-black hover:text-blue-600">Terms & Condition</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
