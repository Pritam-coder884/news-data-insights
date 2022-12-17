import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CodeEditor from "../Components/CodeEditor/CodeEditor";
import Accordian from "../Components/Common/Accordian";
import Button from "../Components/Common/Button";
// import Search from "../Components/Common/Search";
import TabPanel from "../Components/Common/TabPanel";
import Typography from "../Components/Common/Typography";
import { CSVLink, CSVDownload } from "react-csv";
import { FilterData } from "../Redux/Slices/FilterSlice";
import { getService } from "../Redux/Services/FilterListService";
import { getFilterData } from "../Redux/Slices/getFilterSlice";
import { format } from "date-fns";
import { search } from "react-icons-kit/feather/search";
import { Icon } from "react-icons-kit";
import USelect from "../Components/Select/USelect";
import Modal from "../Components/Common/Modal";

function Homepage() {
  let [selectedIndex, setSelectIndex] = useState(0);
  let data = useSelector((state) => state.storedata);
  let dispatch = useDispatch();
  let getData = useSelector((state) => state.getData?.data);
  let FilterList = useSelector((state) => state?.filter?.data?.data?.data);
  const refCategory = useRef();
  const refLanguage = useRef();
  const refSource = useRef();
  const refCountry = useRef();
  const [payload, setPayload] = useState({});
  const [opens, setOpen] = useState(false);
  const [modalData, setModalData] = useState();

  // console.log(
  //   "dfff",
  //   Object.values(FilterList)?.map((item) =>
  //     console.log("item", JSON.stringify(Object.keys(item[0])?.[0]))
  //   )
  // );

  useEffect(() => {
    dispatch(FilterData());
  }, []);

  let a = {
    data: {
      response: {
        status: true,
        data: {
          paymentWallet: {
            amount: 0,
          },
          joinedCampaigns: [],
          _id: "632ac3e17dd118d8c09db9d6",
          email: "ashirbad.samal@antino.io",
          interested: ["Agr719", "Air2826", "Ani4451"],
          authType: "GOOGLE",
          profileType: "INFLUENCER",
          userStatus: true,
          likedCampaigns: [],
          createdAt: "2022-09-21T07:57:21.362Z",
          updatedAt: "2022-09-30T07:04:58.124Z",
          __v: 0,
          gender: "male",
          name: "ashribad samal",
          profileImage:
            "https://virality.s3.ap-south-1.amazonaws.com/profile/632ac3e17dd118d8c09db9d6/image42b7041e-7aec-4e03-90bd-162605472693batman.jfif",
          userName: "@aedf153",
          orgId: "99",
          sphUserId: "97",
          mobileNumber: "",
        },
      },
    },
  };

  const csvData = getData?.map((i) => ({
    Title: i?.title,
    Source: i?.source,
    Url: i?.url,
  }));

  const headers = [
    { label: "Title", key: "Title" },
    { label: "Source", key: "Source" },
    { label: "Url", key: "Url" },
  ];

  const searchHandel = async () => {
    // let getData = await getService(data)
    const request = {
      category: refCategory.current.getSelectedItems()?.map((i) => i?.name),
      Language: refLanguage.current.getSelectedItems()?.map((i) => i?.code),
      Source: refSource.current
        .getSelectedItems()
        ?.map((i) => i?.news_src_name),
      country: refCountry.current.getSelectedItems()?.map((i) => i?.code),
    };

    // setPayload(

    // );
    console.log("data", request);
    dispatch(getFilterData(request));
  };

  const ResetSearchHandel = async () => {
    refCountry.current.resetSelectedValues();
    refSource.current.resetSelectedValues();
    refLanguage.current.resetSelectedValues();
    refCategory.current.resetSelectedValues();
  };

  const handleTableData = (data) => {
    setOpen(true);
    setModalData(data);
  };

  return (
    <>
      <div className="flex mt-10 pl-10">
        {data?.map((i, index) => (
          <Typography
            text={i?.b?.length ? `&${i?.query}=${i?.b.join(",")}` : null}
            extraClasses={"text-sm font-semibold"}
          />
        ))}
      </div>
      <div className="flex mt-10 px-10">
        {/* <Search extraClass={"w-[70%]"} /> */}
        <div className="flex items-center gap-4 border-2 border-gray-500 border-solid w-[70%] px-2">
          <Icon icon={search} size={25} />
          <input
            type="text"
            placeholder="Search.."
            className="border-none outline-none text-black placeholder-gray-500"
          />
        </div>
        <Button
          text={"Search"}
          type={"button"}
          btnType={"filled"}
          extraClasses={"w-[20%] ml-3"}
          Callback={() => searchHandel()}
        />
        <Button
          text={"ReSet"}
          type={"button"}
          btnType={"filled"}
          extraClasses={"w-[20%] ml-3"}
          Callback={() => ResetSearchHandel()}
        />
      </div>

      <div className="p-4 pl-10 pr-10 flex items-center gap-4">
        {/* {FilterList && Object.values(FilterList)?.map((item) => (
          <USelect optionValue={item} />
        ))} */}
        <USelect
          optionValue={FilterList && FilterList?.category_lists}
          name={"name"}
          refName={refCategory}
        />
        <USelect
          optionValue={FilterList && FilterList?.country_lists}
          name={"geo_category_name"}
          refName={refCountry}
        />
        <USelect
          optionValue={FilterList && FilterList?.language_lists}
          name={"name"}
          refName={refLanguage}
        />
        <USelect
          optionValue={FilterList?.source_lists}
          name={"news_src_name"}
          refName={refSource}
        />
      </div>

      <div className="mt-10 px-16 flex justify-around  items-center">
        <TabPanel
          category1={`JSON`}
          category2={"Table"}
          // category3={"In Html"}
          extraClass={"w-[80%]"}
          value1={
            <CodeEditor
              width={"100%"}
              value={getData}
              dark={true}
              height={"60vh"}
            />
          }
          value2={
            <>
              <table className="table-auto bg-slate-100 w-full rounded-md p-6 border-collapse border border-red">
                <thead className="bg-blue ">
                  <tr>
                    <th className="m-2 border border-slate-400">Title</th>
                    <th className="m-2 border border-slate-400">Source</th>
                    <th className="m-2 border border-slate-400">url</th>
                  </tr>
                </thead>
                <tbody>
                  {getData?.map((i) => (
                    <tr
                      className="cursor-pointer"
                      onClick={() => handleTableData(i)}
                    >
                      <td className="m-2 border-4 border-current text-sm w-full">
                        {i?.title}
                      </td>
                      <td className="m-2 border border-slate-300 text-sm w-full">
                        {i?.source}
                      </td>
                      <td className="m-2 border border-slate-300 text-xs">
                        {i?.url}
                      </td>
                    </tr>
                  ))}

                  {/* <tr>
                    <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                    <td>Malcolm Lockyer</td>
                    <td>1961</td>
                  </tr>
                  <tr>
                    <td>Witchy Woman</td>
                    <td>The Eagles</td>
                    <td>1972</td>
                  </tr>
                  <tr>
                    <td>Shining Star</td>
                    <td>Earth, Wind, and Fire</td>
                    <td>1975</td>
                  </tr> */}
                </tbody>
              </table>
            </>
          }
          // value3={
          //   <>
          //     {getData?.map((i) => (
          //       <div class="mt-4 w-full lg:max-w-full flex flex-col">
          //         <div
          //           className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          //           //style={{ backgroundImage: url(`${}`) }}
          //           title="Woman holding a mug"
          //         >
          //           <img src={i?.image_url} />
          //         </div>
          //         <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          //           <div className="mb-8">
          //             <p className="text-sm text-gray-600 flex items-center">
          //               <svg
          //                 className="fill-current text-gray-500 w-3 h-3 mr-2"
          //                 xmlns="http://www.w3.org/2000/svg"
          //                 viewBox="0 0 20 20"
          //               >
          //                 <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
          //               </svg>
          //               {i?.source}
          //             </p>
          //             <div class="text-gray-900 font-bold text-xl mb-2">
          //               {i?.title}
          //             </div>
          //             <p class="text-gray-700 text-base">{i?.description}</p>
          //           </div>
          //           <div className="flex items-center">
          //             <div className="text-sm">
          //               <p className="text-gray-900 leading-none">
          //                 {i?.category},{i?.language},{i?.geo}
          //               </p>
          //               <p className="text-gray-600">
          //                 {format(new Date(i?.createdAt), "dd MMM yyyy")}
          //               </p>
          //             </div>
          //           </div>
          //         </div>
          //       </div>
          //     ))}
          //   </>
          // }
          onChange={(index) => {
            setSelectIndex(index);
          }}
        />
        <div className="border  p-4 h-20 shadow-md self-start mt-8">
          <CSVLink
            data={csvData ? csvData : []}
            headers={headers}
            filename={"my-file.csv"}
            className="btn btn-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-10 h-10 m-auto"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
          </CSVLink>
        </div>
      </div>
      {/* <div className="px-10 mb-4 flex justify-around  items-center w-full "></div> */}
      <Modal
        open={opens}
        closeModal={() => {
          setOpen(false);
          setModalData();
        }}
      >
        <div className="w-[500px] p-4">
          <img src={modalData?.image_url} alt="" className="h-[200px] w-full" />
          <div className="text-gray-900 font-bold text-xl mb-2">
            {modalData?.title}
          </div>
          <p className="text-gray-700 text-base lineClamp">
            {modalData?.description}
          </p>
          <Button
            extraClasses={"mt-4 p-2 md:w-[300px] sm:w-[180px] rounded-[8px]"}
            text={"Details"}
            btnType={"filled"}
            Callback={() => window.open(modalData?.url, "_blank")}
          />
        </div>
      </Modal>
    </>
  );
}

export default Homepage;
