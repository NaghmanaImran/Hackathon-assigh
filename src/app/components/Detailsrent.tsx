import React from 'react'
import Image from 'next/image'

const Detailsrent = () => {
  return (
    <div className='flex'>
      <h1 className='w-192px h-24px text-2xl font-sans font-bold text-black'>Details Rental</h1>
      <Image
              src="/Maps.png"
                 width={486}
                 height={272}
                 alt=""
               />
              
               <Image
              src="/Top 5 Car Rental.png"
                 width={220}
                 height={220}
                 alt=""
               />
                
               </div>
  
    
  )
}

export default Detailsrent
