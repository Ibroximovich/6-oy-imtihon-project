

import { useCookies } from "react-cookie";
import React, { useContext } from "react";
import { Text, Input } from "../components/index";
import { BellIcon, HeadersIcon, SetingsIcon } from "../assets/icon";
import { useLocation, useNavigate } from "react-router-dom";
import { Context } from "../context/context";

const RoutesHeader = () => {
  const [cookies, setCookies, removeCookies] = useCookies(["login"]);
  const location = useLocation();
  const navigate = useNavigate()

  const {SearchInput} = useContext(Context)

  

  const getPathName = () => {
    const path = location.pathname;

    const routeNames = {
      "/": "Dashboard",
      "/dashboard": "Dashboard",
      "/tables": "Tables",
      "/billing": "Billing",
      "/rtl": "RTL",
      "/profile": "Profile",
      "/sign-in": "Sign In",
      "/sign-up": "Sign Up",
    };

    return routeNames[path] || path.split("/")[1].charAt(0).toUpperCase() + path.split("/")[1].slice(1);
  };

  function LoginFn(e) {
    e.preventDefault()
    const Confirm = confirm("Rostdan ham chiqmoqchimisz?");
    if (Confirm) {
      removeCookies("login");
       navigate("/login")
    }
  }

  return (
    <div className="pt-[22px] pb-[42px] pl-[40px] pr-[47px] flex justify-between">
      <div>
        <Text classlist={"!text-white"}>Pages / {getPathName()}</Text>
        <Text classlist={"!text-white"}>{getPathName()}</Text>
      </div>
      <div className="flex items-center gap-[18px]">
        <Input onChange={(e) => SearchInput(e.target.value)}
          classList={
            "!py-[10px] !pl-[35px] !w-[199px] bg-input rounded-[15px] !text-white"
          }
          placeholder={"Type here..."}
          type={"text"}
          name={"text"}
        />
        <div onClick={(e) => LoginFn(e)} className="flex items-center gap-[3px]">
          <HeadersIcon />
          <Text classlist={"!text-[#718096] text-[12px]"}>Sign In</Text>
        </div>
        <SetingsIcon />
        <BellIcon />
      </div>
    </div>
  );
};

export default RoutesHeader;













