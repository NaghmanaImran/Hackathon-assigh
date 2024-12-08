import React from "react";
import Image from "next/image";
const Heero = () => {
  return (
    <div className="flex justify-center items-center space-x-4 p-4">
      {/* Image 1 */}
      <Image
            src="/banner2.png"
            alt="/banner2.png"
            width={250}
            height={120}
            className="w-1/2 h-auto rounded-lg shadow-lg"
          />
     
      {/* Image 2 */}
    
       <Image
            src="/banner1 ss.png"
            alt="/banner1 ss.png"
            width={250}
            height={120}
            className="w-1/2 h-auto rounded-lg shadow-lg"
          />
    </div>
  );
};

export default Heero;
