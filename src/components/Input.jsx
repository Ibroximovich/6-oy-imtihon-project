import React from 'react'

const Input = ({placeholder,type,classList,onChange,name}) => {
  return (
    <input onChange={onChange} autoComplete='off' className={`border-[2px] rounded-[20px] input text-[#A0AEC0] py-[15px] pl-[20px] outline-none  w-[100%]   ${classList}`} type={type} placeholder={placeholder} name={name}  required />
  )
}

export default Input
