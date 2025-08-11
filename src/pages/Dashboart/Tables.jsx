import React from 'react'
import {  ProjectsRoutes, TablesComponents } from '../../components'
import { DoneIcon } from '../../assets/icon'

const Tables = () => {
  const arr = 
    {id:1,
      table:"Authors Table",
      autor:"AUTHOR",
      function:"FUNCTION",
      status:"STATUS",
      employed:"EMPLOYED",
      button:"Add"
    }
  
  const arr2 =
    {id:2,
      table:"Projects",
      autor:"COMPANIES",
      function:"BUDGET",
      status:"STATUS",
      employed:"COMPLETION",
      done:"30 done this month",
      icon:<DoneIcon/>,
    }
  
  
  return (
   
    <>
      <TablesComponents title ={arr} />
      <ProjectsRoutes title={arr2} claslist={"!mt-[30px]"}/>
    </>
  )
}

export default Tables
