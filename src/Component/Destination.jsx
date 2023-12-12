import React from 'react'



const Destination = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
        <h1>All-In-Clusion Resorts</h1>
        <p className='py-4'>On the Caribbean's Best Beaches</p>
        <div className='grid gird-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
            <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2 ' src={"https://images.pexels.com/photos/4846511/pexels-photo-4846511.jpeg?auto=compress&cs=tinysrgb&w=600"} alt="/" />
            <img className='w-full h-full object-cover  ' src={"https://images.pexels.com/photos/4819781/pexels-photo-4819781.jpeg?auto=compress&cs=tinysrgb&w=600"} alt="/" />
            <img className='w-full h-full object-cover  ' src={"https://images.pexels.com/photos/4819575/pexels-photo-4819575.jpeg?auto=compress&cs=tinysrgb&w=600"} alt="/" />
            <img className='w-full h-full object-cover  ' src={"https://images.pexels.com/photos/398465/pexels-photo-398465.jpeg?auto=compress&cs=tinysrgb&w=600"} alt="/" />
            <img className='w-full h-full object-cover  ' src={"https://images.pexels.com/photos/797868/pexels-photo-797868.jpeg?auto=compress&cs=tinysrgb&w=600"} alt="/" />
        </div>
    </div>
  )
}

export default Destination