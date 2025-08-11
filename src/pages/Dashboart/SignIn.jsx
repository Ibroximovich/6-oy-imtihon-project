import React, { useEffect } from 'react' 
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [cookies, setCookies,removeCookies] = useCookies(["login"]);
  const Confirm = confirm("Rostdan ham chiqmoqchimisz?")
  const navigate = useNavigate()
  useEffect(() =>{
    if(Confirm){
      removeCookies("login")
      navigate("/login")
   }

  }),[]}


export default SignIn
