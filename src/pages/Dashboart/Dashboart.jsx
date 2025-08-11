import React from 'react'
import DashboartComponents from '../../components/DashboartComponents'
import { ClientsIcon, MoneyIcon, SaliesIcon, UsersIcon } from '../../assets/icon'
import { Img1, Img2, Img3, Img4, Img5, Img6, Img7 } from '../../assets/images'
import { Text } from '../../components'
// import { SearchContext } from "../SearchContext";

const Dashboart = () => {
  let list = [
    {
      id:1,
      text:"Today’s Money",
      strong:"$53,000",
      span:"+55%",
      icon:<MoneyIcon/>
    },
    {
      id:2,
      text:"Today’s Users",
      strong:"2,300",
      span:"+5%",
      icon:<UsersIcon/>
    },
    {
      id:3,
      text:"New Clients",
      strong:"+3,052",
      span:"-14%",
      active:true,
      icon:<ClientsIcon/>
    },
    {
      id:4,
      text:"Total Sales",
      strong:"$173,000",
      span:"+8%",
      icon:<SaliesIcon/>
    },
  ]


  return(
    <div>
      <div className=' px-[23px] flex justify-between'>
        {list.map(item =>(
          <DashboartComponents key={item.id} strong={item.strong} text={item.text} span={item.span} icon={item.icon} active={item.active}/>
        ))}
      </div>
      <div className='flex justify-between  px-[23px] mt-[23px]'>
        <img className='w-[47%] h-[250px]' src={Img1} alt="logo" width={400} height={344} />
        <img className='w-[20%] h-[250px]' src={Img2} alt="logo"  height={344} />
        <img className='w-[30%] h-[250px]' src={Img3} alt="logo" width={320} height={344} />
      </div>
      <div className='flex gap-[18px] mt-[23px] px-[23px]'>
        <img className='h-[300px]'  src={Img4} alt="logo" width={600} height={445} />
        <img className='h-[300px]' src={Img5} alt="logo" width={500} height={445} />
      </div>
      <div className='flex gap-[18px] mt-[23px] px-[23px]'>
        <img className='h-[320px]' src={Img6} alt="logo" width={600} height={100} />
        <img className='h-[325px]' src={Img7} alt="logo" width={500} height={550} />
      </div>
      <div className='flex justify-between mt-[23px] pr-[40px] pl-[10px] mb-[50px]'>
          <Text classlist={"!text-white"}>@ 2021, Made with ❤️ by Simmmple & Creative Tim for a better web</Text>
          <div className='flex gap-[46px]'>
              <Text classlist={"!text-white"}>Marketplace</Text>
              <Text classlist={"!text-white"}>Blog</Text>
              <Text classlist={"!text-white"}>License</Text>
          </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default Dashboart




