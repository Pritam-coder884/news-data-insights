import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../Assets/News_Data_Insights.svg";
import Button from "../Button";
import Typography from "../Typography";

const NavbarLanding = ({ scrollTop }) => {
  // not needed such props setFeatures,setAbouts, feature, abouts
 const token=localStorage.getItem("token");
  const navigate = useNavigate();
  const pathname = window.location.pathname;
  const [open, setOpen] = useState(false);
  const [feature, setFeatures] = useState(false);
  const [price, setPrice] = useState(false);
  const [abouts, setAbouts] = useState(true);
  const nav = [0, 1];

  useEffect(() => {
    if (pathname === "/terms") {
      setAbouts(false);
      setFeatures(false);
    }
  }, [pathname]);

  // console.log('about',abouts)

  return (
    <>
      <nav
        className={`${
          open ? "px-0" : ""
        } bg-white fixed w-full z-50 top-0  md:px-2 px-[60px] md:pb-2.5 pt-2.5 rounded`}
      >
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a
            onClick={() => navigate("/home")}
            className="flex md:hidden cursor-pointer items-center"
          >
            <img
              src={logo}
              className="mr-3 sm:h-[4rem] h-[5rem] w-[12rem] object-cover"
              alt="Logo"
            />
          </a>
          <div className="flex md:justify-between  ">
            <div className="hidden md:flex items-center">
              <button
                onClick={() => {
                  setOpen(!open);
                }}
                data-collapse-toggle="mobile-menu-4"
                type="button"
                className=" items-center p-2  md:inline-flex hidden focus:outline-none     "
                aria-controls="mobile-menu-4"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <a>
                <img src={logo} className="mr-3 sm:h-6 h-9" alt="lok Logo" />
              </a>
            </div>
            <div>
              <button
                type="button"
                onClick={() => navigate("/signup")}
                className="md:absolute right-2 hidden md:block  cursor-pointer  focus:outline-none   px-5 py-2.5 text-center md:mr-3 mr-0  "
              >
                {" "}
                {/* <div className="  cursor-pointer"> */}
                <Typography extraClasses={"text-primary "} text={"Register"} />
                {/* </div> */}
              </button>
            </div>
          </div>
          <div
            className={`${
              open
                ? "md:flex fixed  z-50 bg-white sm:h-[120vh] md:h-[200vh] border-t-4 left-0 -top-10 px-4 sm:pr-0 sm:px-0 sm:pl-2 sm:w-[80vw] md:w-[70vw] shadow-2xl mt-10  "
                : "md:hidden items-center md:w-full "
            } justify-between    w-auto `}
            id="mobile-menu-4"
          >
            <ul className="flex list-none md:flex-col md:justify-items-center md:mt-4 flex-row  mt-0 md:text-sm md:font-medium">
              <li
                onClick={() => {
                  navigate("/home");
                  setOpen(false);
                }}
                className="hidden md:block pb-[10px] "
              >
                <img src={logo} class="mr-3 sm:h-6 h-9" alt="app Logo" />
              </li>
              <div className=" border-t-2 mb-4 border-[#DFE0E0] hidden md:block "></div>
              <li>
                <div
                  onClick={() => {
                    window.scroll({ top: 0, left: 0, behavior: "smooth" });
                    setOpen(false);
                    setAbouts(true);
                    setFeatures(false);
                    setPrice(false);
                    navigate(`/home`);
                  }}
                  className={` py-2 mb-8 pr-4 pl-3 cursor-pointer ${
                    abouts ? " border-b-2 border-primary " : " "
                  }`}
                >
                  <Typography
                    extraClasses={`  ${
                      abouts
                        ? " !text-gray-700 font-semibold"
                        : "text-gray-500 font-normal"
                    } `}
                    text={"About Us"}
                  />
                </div>
              </li>
              <li>
                <div
                  onClick={() => {
                    window.scroll({ top: 650, left: 0, behavior: "smooth" });
                    setOpen(false);
                    setFeatures(true);
                    setAbouts(false);
                    setPrice(false);
                    navigate(`/home`);
                  }}
                  className={` py-2 mb-8 pr-4 pl-3 cursor-pointer ${
                    feature ? " border-b-2 border-primary " : ""
                  }`}
                >
                  <Typography
                    extraClasses={`  ${
                      feature
                        ? " !text-gray-700 font-semibold"
                        : "text-gray-500 font-normal"
                    } `}
                    text={"Features"}
                  />
                </div>
              </li>
              {/* <li>
                <div className=" mb-8 py-2 pr-4 pl-3 cursor-pointer">
                  <Typography
                    extraClasses={"text-primary "}
                    text={"Get Start"}
                  />
                </div>
              </li> */}
              <li>
                <div
                  onClick={() => {
                    setOpen(false);
                    setPrice(true);
                    setFeatures(false);
                    setAbouts(false);
                    navigate("/pricing");
                  }}
                  className={` py-2 mb-8 pr-4 pl-3 cursor-pointer ${
                    price ? " border-b-2 border-primary " : ""
                  }`}
                >
                  <Typography
                    extraClasses={`  ${
                      price
                        ? " !text-gray-700 font-semibold"
                        : "text-gray-500 font-normal"
                    } `}
                    text={"Price"}
                  />
                </div>
              </li>
              {true && (
                <li>
                  {token ? (
                     <Button
                     extraClasses={
                       "ml-4 p-2 md:w-[300px] sm:w-[180px] rounded-[8px]"
                     }
                     text={"Dashboard"}
                     btnType={"filled"}
                     Callback={() => navigate("/homepage")}
                   />
                  ):(
                    <>
                    <Button
                    extraClasses={"p-2 md:w-[300px] sm:w-[180px] rounded-[8px]"}
                    text={"Get API Key"}
                    btnType={"filled"}
                    Callback={() => navigate("/signup")}
                  />
                  <Button
                    extraClasses={
                      "ml-4 p-2 md:w-[300px] sm:w-[180px] rounded-[8px]"
                    }
                    text={"Login"}
                    btnType={"filled"}
                    Callback={() => navigate("/login")}
                  />
                    </>
                  ) }
    
                </li>
              )}
            </ul>
            <div className="absolute right-8 top-2 hidden md:block w-4">
              <button
                className="w-[30px]  hidden md:block"
                onClick={() => setOpen(false)}
              >
                {/* <img className="" src={x} alt="" /> */}
              </button>
            </div>
            <div className="pr-2 pt-2" onClick={() => setOpen(false)}>
              <svg
                className="hidden w-6 h-6 sm:block "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarLanding;
