import React from 'react'

const Modal = ({ children }: Readonly <{
    children: React.ReactNode
}>) => {
  return (
    <div className={`min-w-[100dvw] fixed  -translate-x-[50%] left-[50%] px-4 pt-4 mx-auto glassy-green  h-[90dvh]`}>
        {children}
    </div>
  )
}

export default Modal

    // <div className={`w-[100dvw] px-4 pt-4 mx-auto relative h-[90dvh]`}>
    //     <div className="absolute inset-0 glassy-green  z-[5]"></div>
    //     {children}
    // </div>