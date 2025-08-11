import React from 'react'
const Heading = ({ type,children,classList}) => {
    if(type == "h2"){
        return <h2 className={`text-[36px] font-bold text-white ${classList}`}>{children}</h2>
    }
    else if(type == "h3"){
         return <h3 className={`text-[30px] font-bold text-white ${classList}`}>{children}</h3>
    }
  
}

export default Heading
