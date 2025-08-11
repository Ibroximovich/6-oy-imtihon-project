import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, Login, Register } from '../pages'
import { Header } from '../modules'

const LoginRoats = () => {
  return (
    <>
    <Header/>
    <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/register' element = {<Register/>}/>
    </Routes>
    </>
  )
}

export default LoginRoats
