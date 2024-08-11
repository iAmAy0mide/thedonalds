import Albums from '@/components/Albums/Albums';
import React from 'react'

const DeletedGallery = () => {
  return (
    <main className='pt-[12rem] md:pt-[13rem] lg:pt-[14rem] rela tive overflow-hidden -z-20 min-h-screen'>
      `<div className="mobile container mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-2 max-w-[1440px]  w-full justify-center">
          <Albums albums={[]}  />
        </div>
      </div>  
      
    </main>
  )
}

export default DeletedGallery;