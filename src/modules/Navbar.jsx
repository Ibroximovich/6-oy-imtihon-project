import React, { useState, useEffect } from "react";
// import { Text } from '../components/Text'
import { Text } from "../components";
import { RoutestList } from "../components/RoutestList";
import { NavLink } from "react-router-dom";
import { HeroImg } from "../assets/images";

const Dashboart = () => {
  return (
    <div>
      <div className=" h-[100vh] overflow-y-auto  bg py-[36px] px-[65px]">
        <Text classlist={"!border-b-[1px] !pb-[31px] !text-center text "}>
          VISION UI FREE
        </Text>
        {RoutestList.map((item) =>
          item.title == "ACCOUNT PAGES" ? (
            <p key={item.id} className="text-white text-[14px] pl-[20px] mt-[10px]">{item.title}</p>
          ) : (
            <label key={item.id}>
              <NavLink
                className={
                  "flex items-center text-white gap-[20px] w-[219px] shd rounded-[15px] pl-[16px] py-[20px] mt-[24px]"
                }
                to={item.path}
              >
                <div className="p-[8px] rounded-[12px] bg-[#1A1F37]  border-white">
                  {item.Icon}
                </div>
                <span>{item.title}</span>
              </NavLink>
            </label>
          )
        )}

        <img
          className="mt-[100px]"
          src={HeroImg}
          alt="logo"
          width={218}
          height={169}
        />
      </div>
    </div>
  );
};

export default Dashboart;
