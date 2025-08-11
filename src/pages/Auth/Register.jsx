import React, { useState } from "react";
import { Heading, Text, Input } from "../../components/index";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { LoadingImg } from "../../assets/images";
import { AppleIcon, FasebookIcon, GoogleIcon } from "../../assets/icon";

const Login = () => {
  const [istrue, setIstrue] = useState(false);
  const [loading, setLoading] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["isRegsitered"]);
  const navigate = useNavigate();

  function HandleSubmit(e) {
    setLoading(true);
    e.preventDefault();
    const newObj = {
      name: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    setCookie("register", newObj);

    setTimeout(() => {
      navigate("/login");
    }, 1000);
  }
  

  const buttonList = [
    {
      id: 1,
      button: <FasebookIcon />,
    },
    {
      id: 2,
      button: <AppleIcon />,
    },
    {
      id: 3,
      button: <GoogleIcon />,
    },
  ];
  return (
    <>
      <div className="flex">
        <div className="w-[50%] hero-bg text-center min-h-screen flex flex-col justify-center">
          <p className="text-[20px] text-white text-center">
            INSPIRED BY THE FUTURE:
          </p>
          <Heading type={"h2"} classList={"h2"}>
            THE VISION UI DASHBOARD
          </Heading>
        </div>
        <div className="bg w-[50%]">
          <div className="w-[452px] pl-[103px] mt-[125px]">
            <div className="w-[452px] text-center mx-auto mb-[34px]">
              <Heading type={"h3"} classList={"!text-center"}>
                Welcome!
              </Heading>
              <Text classlist={"!text-center !w-[333px] mx-auto"}>
                Use these awesome forms to login or create new account in your
                project for free.
              </Text>
            </div>
            <div className="w-[452px] py-[15px] border-[2px] border-white rounded-[30px] mx-auto">
              <div className="w-[255px] mx-auto flex flex-col justify-center  items-center gap-[24px]">
                <Text classlist={"!text-[18px] !font-bold !text-white"}>
                  Register with
                </Text>
                <div className="flex items-center gap-[15px]">
                  {buttonList.map((item) => (
                    <button
                      key={item.id}
                      className="p-[22px] rounded-[20px] border-[2px] border-white"
                    >
                      {item.button}
                    </button>
                  ))}
                </div>
                <Text classlist={"!text-[#A0AEC0] !text-[18px]"}>or</Text>
              </div>
              <form
                autoComplete="off"
                onSubmit={HandleSubmit}
                className="mt-[9px] ml-[48px] "
              >
                <Text classlist={"!text-white !mb-[4px]"}>Name</Text>
                <Input
                  type={"text"}
                  placeholder={"Your full name"}
                  name={"username"}
                  classList={"!w-[90%] "}
                />
                <Text classlist={"!text-white !mb-[4px] !mt-[14px]"}>
                  Email
                </Text>
                <Input
                  type={"email"}
                  placeholder={"Your email address"}
                  name={"email"}
                  classList={"!w-[90%]"}
                />
                <Text classlist={"!text-white !mt-[14px] !mb-[4px]"}>
                  Password
                </Text>
                <Input
                  classList={"!mb-[13px] !w-[90%]"}
                  type={"password"}
                  placeholder={"Your password"}
                  name={"password"}
                />
                <div className="flex items-center gap-[10px] ">
                  <div
                    className={
                      istrue
                        ? "w-[36px] h-[18px] bg-blue-700 rounded-[97px] flex justify-end items-center"
                        : "w-[36px] h-[18px] bg-white rounded-[97px] flex justify-start items-center"
                    }
                  >
                    <div
                      onClick={() => setIstrue(!istrue)}
                      className=" w-[13px] h-[13px] bg-gray-600 rounded-[50%]"
                    ></div>
                  </div>
                  <Text classlist={"!text-white !text-[12px] !leading-[15%]"}>
                    Remember me
                  </Text>
                </div>
                <Button
                  type={"submit"}
                  classList={"!mt-[14px] !mb-[12px] !w-[90%]"}
                >
                  {loading ? (
                    <img
                      className="mx-auto scale-[2]"
                      src={LoadingImg}
                      alt="logo"
                      width={15}
                      height={15}
                    />
                  ) : (
                    "SIGN UP"
                  )}
                </Button>
              </form>
              <Link
                className="text-[14px] font- text-white text-center block"
                to={"/login"}
              >
                <span className="font-normal opacity-80">
                  Already have an account?
                </span>
                Sign in
              </Link>
            </div>
            <div className="flex flex-col gap-[9px] w-[510px]   mt-[10px] pt-[80px]">
              <Text classlist={"text-[14px] text-white "}>
                @ 2021, Made with ❤️ by Simmmple & Creative Tim for a better web
              </Text>
              <div className="flex justify-center gap-[46px]">
                <Link className="text-white">Marketplace</Link>
                <Link className="text-white">Blog</Link>
                <Link className="text-white">License</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
