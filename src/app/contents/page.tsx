import React from 'react'
import Contents from '../components/Contents'
import Sidebar from '../components/sidebar'

const page = () => {
  return (
    <div className='flex'>
    <Sidebar/>
    <Contents/>
    </div>
  )
}

export default page
