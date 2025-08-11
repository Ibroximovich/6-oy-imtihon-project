import React from 'react'
import { useCookies } from 'react-cookie';

const Profile = () => {
  const [cookie] = useCookies(["register"]);
  
  return (
    <dir className = "h-[50vh] flex flex-col items-center justify-center">

    <div className='w-[300px] text-center p-[20px] rounded-[20px] border-[1px]   border-white mx-auto  '>
     <h2 className='text-white text-[20px] font-bold'>{cookie.register.name}</h2>
     <p className='text-white text-[18px]'>{cookie.register.email}</p>
     <strong className='text-white text-[16px]'>{cookie.register.password}</strong> 
    </div>
    </dir>
  )
}

export default Profile
