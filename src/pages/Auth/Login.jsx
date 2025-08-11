import React, { useState } from "react";
import { Heading, Text, Input } from "../../components/index";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { LoadingImg } from "../../assets/images";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [istrue, setIstrue] = useState(false);
  const [loading, setLoading] = useState(false);
  const [cookies, setCookies] = useCookies(["register"] );
  console.log(cookies.register);
  

  function HandleSubmit(e) {
    setLoading(true);
    e.preventDefault();
    const newUser = {
      id: 1,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    console.log(newUser);
    
    if(cookies.register != undefined){
      if(cookies.register.email == newUser.email && cookies.register.password == newUser.password) {
       toast.success("Malumotlar to'g'ri");
       setTimeout(() => {
          setCookies("login", newUser);
          location.pathname ="/"
       }, 1000);
     }
     else{
       setTimeout(() => {
         toast.error("Email yoki paro xato");
         setLoading(false)
      }, 1000);
     }

    }
    else{
      setTimeout(() => {
         toast.error("Email yoki paro xato");
         setLoading(false)
      }, 1000);
    }


  }




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
          <div className="w-[380px] pl-[103px] mt-[185px]">
            <Heading type={"h3"}>Nice to see you!</Heading>
            <Text>Enter your email and password to sign in</Text>
            <form
              autoComplete="off"
              onSubmit={HandleSubmit}
              className="mt-[34px]"
            >
              <Text classlist={"!text-white !mb-[4px]"}>Email</Text>
              <Input
                type={"email"}
                placeholder={"Your email address"}
                name={"email"}
              />
              <Text classlist={"!text-white !mt-[24px] !mb-[4px]"}>
                Password
              </Text>
              <Input
                classList={"!mb-[23px]"}
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
                <Text classlist={"!text-white !text-[12px] !leading-[150%]"}>
                  Remember me{" "}
                </Text>
              </div>
              <Button type={"submit"} classList={"!mt-[34px] !mb-[22px]"}>
                {loading ? (
                  <img
                    className="mx-auto scale-[2]"
                    src={LoadingImg}
                    alt="logo"
                    width={15}
                    height={15}
                  />
                ) : (
                  "SIGN IN"
                )}
              </Button>
            </form>
            <Link
              className="text-[14px] font- text-white text-center block"
              to={"/register"}
            >
              <span className="font-normal opacity-80">
                Don't have an account?
              </span>
              Sign up
            </Link>
          </div>
          <div className="flex flex-col gap-[9px] w-[510px] pl-[61px] mt-[10px] pt-[120px]">
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
    </>
  );
};

export default Login;
