import React from 'react'
import { Button, Text } from '../components'
import {DashboartIcon, ProfileIcon, SignInIcon, SignUpIcon} from "../assets/icon"
import { Link } from 'react-router-dom'

const Header = () => {
    const arr =[
        {
            id:1,
            title:"DASHBOARD",
            icon:<DashboartIcon/>
        },
        {
            id:2,
            title:"PROFILE",
            icon:<ProfileIcon/>
        },
        {
            id:3,
            title:"SIGN UP",
            icon:<SignUpIcon/>
        },
        {
            id:4,
            title:"SIGN IN",
            icon:<SignInIcon/>
        }
    ]
  return (
    <div className='w-[987px]  flex justify-between items-center text-white mx-auto pt-[26px]  pb-[30px] px-[23px] border-[1px] border-white input rounded-[12px] mt-[24px] absolute left-0 right-0'>
        <Text classlist={"!text-[14px] text-bg"}>VISION UI FREE</Text>
        <div className='flex items-center gap-[30px]'> 
            {arr.map(item =>(
                <Link key={item.id} to={"#"} className='flex items-center gap-[4px] !text-[10px]'>
                    {item.icon}
                    <span>{item.title}</span>
                </Link>
            ))}
       </div>
       <Button classList={"!py-[10px] !w-[150px]"}>Free Download</Button>
    </div>
  )
}

export default Header
