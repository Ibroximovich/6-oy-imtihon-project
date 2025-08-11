import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { RoutestList } from '../components/RoutestList'
import { Navbar,RoutesHeader} from '../modules'

const DashboartRoats = () => {
  return (
   <div className='flex '>
    <Navbar/>
    <div className='bg-img w-full overflow-y-auto h-[100vh]'>
      <RoutesHeader/>
     <Routes>
      {RoutestList.map(item =>(
         <Route key={item.id} path={item.path} element={item.element}/>
      ))}
     </Routes>
    </div>
   </div>
  )
}

export default DashboartRoats
