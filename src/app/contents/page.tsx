import React from 'react'
import Contents from '../components/Contents'
import Sidebar from '../components/Sidebar'


const page = () => {
  return (
    <div className='flex'>
    <Sidebar/>
    <Contents/>
    </div>
  )
}

export default page
