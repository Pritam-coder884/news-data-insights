import React, { useEffect, useRef, useState } from "react";
import Typography from "../Common/Typography";
import Rectangle from "../../Assets/Rectangle.svg";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Accordian from "../Common/Accordian";
import { removeDataSlice, storeDataSlice } from "../../Redux/Slices/StoreSlice";
import Logo from "../../Assets/News_Data_Insights.svg";

import { AiFillSetting } from "react-icons/ai";
import { GrLogout } from "react-icons/gr";
import { BiNews } from "react-icons/bi";
import { MdAnalytics } from "react-icons/md";

function Sidebar({ extraClasses, extraClassLogo }) {
  const [ids, setIds] = useState();
  let [list, setList] = useState([]);
  let [storeList, setStoreList] = useState([]);
  let dispatch = useDispatch();
  let FilterList = useSelector((state) => state?.filter?.data?.data?.data);
  const navigate = useNavigate();
  

  //console.log('fff',FilterList)

  useEffect(() => {
    if (FilterList) {
      let listData = Object.keys(FilterList)?.map((i) => ({
        b: [],
        query: i,
        //  writable: true,
      }));
      // console.log("lll",listData)
      setStoreList(listData);
    }
  }, [FilterList]);

  const Handler = (i, title) => {
    console.log("hii", i.target.value, title);
    // navigate(i.to);
    // setIds(i.id);

    let index = storeList?.findIndex((item) => item?.query === title);

    // let cloneData = {
    //     value: i.target.value,
    //     query: title,
    //   }

    // cloneData[index].active = !cloneData[index].active;
    // setList([...list,cloneData]);
    //setStoreList(list)

    // list && setList(list?.filter((item) => item?.value !== i.target.value));
    //  console.log(
    //    "clone",

    //    cloneData,
    //    cloneData?.filter((item) => item?.value !== i.target.value)
    //  );

    // setStoreList(
    //   storeList?.filter((item) => item?.value !== i.target.value)
    // );
    //setList(cloneData?.filter((item) => item?.value !== i.target.value));
    let listData = [...storeList];
    console.log("list", listData, storeList);

    if (!listData[index].b?.includes(i.target.value)) {
      //dispatch(removeDataSlice());
      listData[index] = {
        ...listData[index],
        b: [...listData[index].b, i.target.value],
      };
      dispatch(storeDataSlice([...listData]));
      //console.log("asdj", listData[index].b, index);
    } else {
      console.log("kkkk");
      listData[index] = {
        ...listData[index],
        b: listData[index].b?.filter((items) => items !== i.target.value),
      };

      dispatch(removeDataSlice([...listData]));
    }

    // if (!storeList[index].value?.includes(i.target.value)) {
    //  dispatch(removeDataSlice());
    setStoreList([...listData]);

    // } else {

    //   dispatch(removeDataSlice(storeList));
    // }
    // console.log(
    //   "clonelist",
    //   //list?.map((items) => items?.value)?.indexOf(cloneData?.value)
    // );
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    // alert('logout');
  };
  const gotoHomePage=()=>{
    navigate("/home");
  }

  return (
    <>
      <div
        className={`p-4 w-[200px] border-gray-400 overflow-auto h-full sm:h-[100vh]  relative border-r-4 ${extraClasses} `}
      >
        <div
          className={`cursor-pointer absolute top-0 flex justify-center align-center ${extraClassLogo}`}
          onClick={gotoHomePage}
        >
          {/* <Typography text={"Logo"} /> */}
          <img src={Logo} alt="logo" 
           className="mr-3 sm:h-[4rem] h-[5rem] w-[12rem] object-cover" />
        </div>

        <div className="mt-[150px] flex flex-col items-center gap-8">
          <div></div>
          <div className=" items-center  grid grid-cols-12 ">
            <BiNews size={25} className={"col-span-4 sm:col-span-2 "} />
            <Link to="/homepage">
              <p className="cursor-pointer text-xl font-semibold col-span-8 my-auto ">
                Dashboard
              </p>
            </Link>
          </div>
          <div className="items-center  grid grid-cols-12 ">
            <AiFillSetting size={25} className={"col-span-4 sm:col-span-2 "} />
            <Link to="/setting">
              <p className="cursor-pointer text-xl font-semibold  col-span-8 my-auto">
                Setting
              </p>
            </Link>
          </div>
          <div className="items-center   grid grid-cols-12 ">
            <MdAnalytics size={25} className={"col-span-4 sm:col-span-2 "} />
            <Link to="/analytics">
              <p className="cursor-pointer text-xl font-semibold  col-span-8 my-auto">
                Analytics
              </p>
            </Link>
          </div>
          <div className="items-center   grid grid-cols-12 ">
            <GrLogout size={25} className={"col-span-4 sm:col-span-2 "} />
            <Link to="#">
              <p
                className="cursor-pointer text-xl font-semibold col-span-8 my-auto"
                onClick={handleLogout}
              >
                Logout
              </p>
            </Link>
          </div>
        </div>

        {/* <hr className="mt-[16px] text-[red]" /> */}
        {/* <div className="mt-16">
          {FilterList &&
            Object.entries(FilterList)?.map((i, index) => (
              <Accordian
                title={i[0]}
                callback={(i, title) => Handler(i, title)}
                subTitle={i[1]
              />
            ))}
        </div> */}
        <div className="absolute bottom-0 grid grid-cols-12 text-[#727272] gap-2 cursor-pointer"></div>
      </div>
    </>
  );
}

export default Sidebar;
