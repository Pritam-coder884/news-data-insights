import React from "react";
import instagram from "./../../Assets/insta.svg";
import facebook from "./../../Assets/facebook2.svg";
import twitter from "./../../Assets/twitter.svg";
import logo from "./../../Assets/News_Data_Insights.svg";
import { useNavigate } from "react-router-dom";
import Typography from "../Common/Typography";
import Button from "../Common/Button";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-[#9693e6] ">
        <div className="flex items-center flex-wrap gap-4 pt-[56px] pl-20">
          <h1 className="text-4xl text-white font-semibold ml-10">Ready to get started?</h1>
          <Button
              extraClasses={"ml-[200px] pl-4 pr-4 md:w-[300px] sm:w-[180px] rounded-[20px]"}
              text={"START MY FREE TRIAL"}
              btnType={"filled"}
              Callback={() => navigate("/login")}
            />
            <Button
              extraClasses={"pl-4 pr-4 md:w-[300px] sm:w-[180px] rounded-[20px]"}
              text={"GET IN TOUCH"}
              btnType={"filled"}
              Callback={() => navigate("/signup")}
            />
        </div>
        <div className=" pt-[56px] justify-around sm:justify-start pl-4  flex flex-wrap ">
          <div className="sm:hidden block ">
            <img
              src={logo}
              alt=""
              className="h-[7rem] w-[28rem] object-cover  sm:h-[4rem]"
            />
          </div>

          <div className="flex flex-col mr-6 sm:mt-8 ">
            <img
              className="mb-10  sm:block hidden sm:w-[11rem] sm:h-[3rem] object-cover"
              src={logo}
              alt=""
            />
            <Typography
              extraClasses={"font-medium text-[18px] text-[#FFFFFF] mb-[20px]"}
              text={"Company"}
            />
            <Typography
              action={() => {
                //navigate("/aboutus");
                window.scroll({ top: 0, left: 0, behavior: "smooth" });
              }}
              extraClasses={
                " cursor-pointer  text-[14px] text-[#FFFFFF] opacity-95"
              }
              text={"About Us"}
            />
            <a href="#features">
              <Typography
                action={() => {
                  //navigate("/");
                  window.scroll({ top: 0, left: 0, behavior: "smooth" });
                }}
                extraClasses={
                  " cursor-pointer text-[14px] text-[#FFFFFF] opacity-95"
                }
                text={"Features"}
              />
            </a>

            {/* <Typography
              action={() => {
                //navigate("/getpaid");
                window.scroll({ top: 0, left: 0, behavior: "smooth" });
              }}
              extraClasses={
                " cursor-pointer text-[14px] text-[#FFFFFF] opacity-95"
              }
              text={"Contact"}
            /> */}
            {/* <Typography
              action={() => {
                //navigate("/refer");
                window.scroll({ top: 0, left: 0, behavior: "smooth" });
              }}
              extraClasses={
                " cursor-pointer text-[14px] text-[#FFFFFF] opacity-95"
              }
              text={"Preview"}
            /> */}
            <Typography
              action={() => {
                navigate("/terms");
                window.scroll({ top: 0, left: 0, behavior: "smooth" });
              }}
              extraClasses={
                " cursor-pointer text-[14px] text-[#FFFFFF] opacity-95"
              }
              text={"Terms of Service"}
            />
            {/* <Typography
              action={() => {
                // navigate("/privacy");
                window.scroll({ top: 0, left: 0, behavior: "smooth" });
              }}
              extraClasses={
                " cursor-pointer text-[14px] text-[#FFFFFF] opacity-95"
              }
              text={"Privacy Policy"}
            /> */}
          </div>
          <div className="flex flex-col sm:mt-[115px]">
            <Typography
              extraClasses={"font-medium text-[18px] text-[#FFFFFF] mb-[20px]"}
              text={"Resources"}
            />
            <Typography
              extraClasses={
                " cursor-pointer text-[14px] text-[#FFFFFF] opacity-95"
              }
              //action={()=>window.replac}
              text={"Help & Support"}
            />
          </div>
          <div className="flex sm:mt-[15px] sm:w-full  flex-col">
            <Typography
              extraClasses={"font-medium text-[18px] text-[#FFFFFF] mb-[20px]"}
              text={"social links"}
            />
            <div className="flex sm:justify-start justify-between">
              <img className="cursor-pointer mr-5" src={facebook} alt="" />
              <img className="cursor-pointer mr-5" src={twitter} alt="" />
              <img className="cursor-pointer mr-5" src={instagram} alt="" />
            </div>
          </div>
        </div>
        <hr className="mx-[100px] opacity-20 mt-[32px]" />
        <Typography
          extraClasses={
            "text-center mt-[32px]  font-medium text-[16px] text-[#FFFFFF] opacity-95"
          }
          text={" © Copyright 2022 Lok App. All rights reserved."}
        />
      </div>
    </>
  );
};

export default Footer;
