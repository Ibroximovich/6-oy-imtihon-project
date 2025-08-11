import React from 'react'
import Text from "./Text"


const DashboartComponents = ({strong,text,span,icon,active}) => {
  return (
    <div className='w-[23%] py-[17px] pl-[21px] pr-[17px] gap-[10px] rounded-[20px] bg'>
       <div className='flex items-center justify-between'>
            <div>
            <Text>{text}</Text>
            <strong className='text-white font-bold text-[18px]'>{strong} <span className={active ? "text-[#E31A1A]" : "text-[#01B574]"}>{span}</span></strong>
            </div>
            {icon}
       </div>
    </div>
  )
}

export default DashboartComponents
