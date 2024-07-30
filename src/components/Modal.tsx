import React from 'react'

const Modal = ({ children }: Readonly <{
    children: React.ReactNode
}>) => {
  return (
    <div className={`w-[100dvw] px-4 pt-4 mx-auto relative h-[90dvh]`}>
        <div className="absolute inset-0 glassy-green  z-[5]"></div>
        {children}
    </div>
  )
}

export default Modal
