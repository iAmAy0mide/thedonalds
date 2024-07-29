import Album from '@/components/Albums/Album';
import React from 'react'

const Gallery = () => {
  return (
    <main className=' mt-[50dvh] -z-20 mobile container mx-auto px-8 md:px-16'>
      <div className="flex gap-4 flex-wrap">
        <Album />
        {/* <div className="mx-auto"> */}
        <Album />

        {/* </div> */}
        <Album />
        <Album />
        <Album />
      </div>
    </main>
  )
}

export default Gallery;
