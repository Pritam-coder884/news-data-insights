import React, { useState } from "react";
import Typography from "../Typography";
import profile from '../../../Assets/profile.svg'

function Desktopheader({ModalOpen}) {
  const [header, setHeader] = useState(false);
  const [show,setShow] = useState(false)

  return (
    <div className=" w-full  flex h-[50px] md:h-[56px]  md:items-center">
      <div className="mx-10 md:mx-2  w-full relative">
        <span
          className={`flex justify-end items-center h-[100%] cursor-pointer md:justify-evenly ${
            header ? "md:hidden" : ""
          }`}
        >
          <span
            className="absolute left-0 hidden md:inline-block"
            onClick={ModalOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </span>
          <Typography
            text={"Business Name"}
            extraClasses={"font-medium text-base"}
          />
          <img
            src={profile}
            alt={"profile"}
            className="ml-4 md:ml-0 md:absolute md:right-0"
            onClick={() => setShow(!show)}
          />
        </span>
        <hr className="bg-gray-400  h-[2px] w-full 	absolute md:hidden" />
      </div>
      <div className="relative">
        {show && (
          <div className="shadow-md z-50 absolute h-[114px] w-[186px] right-2 bg-white  flex justify-center items-center flex-col top-[50px]">
            <div
              className="flex items-start "
              onClick={() => {
                //setDeletemodalOpen(true);
                setShow(false);
              }}
            >
              <span className="flex-start pr-4 my-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </span>
              <Typography
                text={"Setting"}
                extraClasses={
                  "font-medium text-sm leading-[21px] self-center pl-4 text-gray-700"
                }
              />
            </div>
            <div className="flex items-start ">
              <span className="flex-start pr-10 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
              <Typography
                text={"Help"}
                extraClasses={
                  "font-semibold text-base flex justify-start col-span-5"
                }
              />
            </div>
            <div className="flex items-start ">
              <span className="flex-start pr-4 my-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#727272] "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  />
                </svg>
              </span>

              <Typography
                text={"Log Out"}
                action={() => {
                  // dispatch(logoutAuth());
                }}
                extraClasses={
                  "font-semibold text-base flex justify-start col-span-5"
                }
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Desktopheader;
