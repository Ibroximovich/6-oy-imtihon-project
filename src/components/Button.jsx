import React from 'react'

const Button = ({children,type,classList,onClick}) => {
  return (
    <button onClick={onClick} type={type} className={`bg-[#0075FF] py-[10px] text-[10px] text-white rounded-[12px] w-full font-bold ${classList}`}>{children}</button>
  )
}

export default Button
