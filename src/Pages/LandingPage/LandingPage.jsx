import React from "react";
// import CodeEditor from "../../Components/CodeEditor/CodeEditor";
import FeatureCard from "../../Components/Common/Card/FeatureCard";
import NavbarLanding from "../../Components/Common/Header/NavbarLanding";
// import TabPanel from "../../Components/Common/TabPanel";
// import Typography from "../../Components/Common/Typography";
import Footer from "../../Components/Footer/Footer";
import banner from "../../Assets/news.png";
import global from "../../Assets/GlobalInformation.png";
import topics from "../../Assets/TopicIdentification.png";
import toxics from "../../Assets/Toxic.png";
import sentiments from "../../Assets/Sentiments.png";
import event from "../../Assets/Event_detection.png";
import advance from "../../Assets/Advanced.png";
import entity from "../../Assets/Entity.png";
import contactimg from "../../Assets/contactpageimg.jpg";

import UseCases from "../../Components/Common/usecase/UseCases";
import marketResearch from "../../Assets/marketResearch.png";
import entityMonitoring from "../../Assets/search.png";
import business from "../../Assets/business.png";
import build_AI from "../../Assets/build_AI.png";
import content from "../../Assets/content.png";
import academic from "../../Assets/academic.png";

let data = [
  {
    title: "Global Information",
    subTitle:
      "Access information for your business and customers around the globe in an efficient way",
    logo: global,
  },
  {
    title: "Advanced Search",
    subTitle:
      "Search keywords,phrases, events and entities from multiple sources and receive the most relevant articles semantically",
    logo: advance,
  },
  {
    title: "Sentiment",
    subTitle:
      "Understand the article and derive the market sentiment around it.",
    logo: sentiments,
  },
  {
    title: "Event Detection",
    subTitle:
      "Extract and track the events of your interest like stock movements",
    logo: event,
  },
  {
    title: "Entity Tracking",
    subTitle:
      "Track the most important entities like persons, organisations, places etc for your business",
    logo: entity,
  },
  {
    title: "Topic Identification",
    subTitle:
      "Look for the articles with a given topic like COVID, IPL, Ukraine War, US Election. etc",
    logo: topics,
  },
  {
    title: "Toxic Identification",
    subTitle: "Filter the articles based on the toxic content for better focus",
    logo: toxics,
  },
];

let cases=[
  {
    logo:business,
    title:"Business Intelligence",
    description:"Spend less time collecting information and more time analyzing data and making informed decisions.",
  },
  {
    logo:marketResearch,
    title:"Market Research",
    description:"Extract, collect and analyse data to get insightful information about the larger market and understand target market for decision making."
  },
  {
    logo:content,
    title:"Content Aggregation",
    description:"Aggregate the best content from trusted sources for insightful decision making. Extract historical data of different events from multiple sources.",
  },
  {
    logo:academic,
    title:"Academic/Industry Research",
    description:"Credible research needs credible datasets. Get data from multiple trusted sources to accelerate your research in a positive direction.",
  },
  {
    logo:build_AI,
    title:"Build Data Driven AI/ML Product",
    description:"Your AI/ML product strategy needs best quality data from diverse sources. Get data in the required formats for faster product/solution development.",
  },
  {
    logo:entityMonitoring,
    title:"Entity Monitoring",
    description:"Monitor and track entities like Person, Organization, Locations for continuous updates. Understand the sentiment of entities around the globe.",
  },
]

// let a = {
//   data: {
//     response: {
//       status: true,
//       data: {
//         paymentWallet: {
//           amount: 0,
//         },
//         joinedCampaigns: [],
//         _id: "632ac3e17dd118d8c09db9d6",
//         email: "ashirbad.samal@antino.io",
//         interested: ["Agr719", "Air2826", "Ani4451"],
//         authType: "GOOGLE",
//         profileType: "INFLUENCER",
//         userStatus: true,
//         likedCampaigns: [],
//         createdAt: "2022-09-21T07:57:21.362Z",
//         updatedAt: "2022-09-30T07:04:58.124Z",
//         __v: 0,
//         gender: "male",
//         name: "ashribad samal",
//         profileImage:
//           "https://virality.s3.ap-south-1.amazonaws.com/profile/632ac3e17dd118d8c09db9d6/image42b7041e-7aec-4e03-90bd-162605472693batman.jfif",
//         userName: "@aedf153",
//         orgId: "99",
//         sphUserId: "97",
//         mobileNumber: "",
//       },
//     },
//   },
// };

function LandingPage() {
  //  let [selectedIndex, setSelectIndex] = useState(0);

  return (
    <>
      <NavbarLanding />
      <div className="w-full">
        <div className="h-[100vh] sm:h-full  relative  ">
          <div className="circle sm:hidden"></div>
          <div className="mt-[5rem] flex justify-between sm:flex-col items-center w-full px-10 h-full sm:px-2 homepage gradiationhome">
            <div className="sm:order-1 w-[50%] sm:w-full relative  pl-20 sm:static sm:pl-2  ">
              <h1 className="text-3xl font-black  leading-[1.4em] text-[#FE951A]">
                Global Information
              </h1>
              <h3 className="text-2xl font-bold text-[#333] leading-[1.4em]">
                {" "}
                For you products and business
                {/* // <br />
                // It's a{" "}
                // <span className="text-[#8fafa2] text-[2.0em]  inline font-black sm:text-[1.3em]">
                //   Mission
                // </span> */}
              </h3>
              <div className="h-[200px] w-[500px] text-justify sm:text-left sm:w-full sm:h-full">
                <p className="text-[#333] text-xl font-semibold sm:mb-8">
                     Global Information for your business around the globe
Seamlessly access world wide news and analysis of news articles to grow your business effectively. Our APIs are easy to integrate and scale with robust backend technology. AI algorithms process and extract key events,entities from news articles to derive useful business insights. We cover data from all the continents and trusted sources to ensure data quality remains intact.
                </p>
              </div>
            </div>
            <div className="img relative">
              <div className="absloute inset-0 image">
                <img
                  src={banner}
                  alt="Computer man"
                  className="w-[40rem] sm:w-full object-cover sm:object-contain "
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#E1EBEE] relative top-[-16px] flex justify-center items-center flex-wrap cardClip h-[100%] p-16">
          {data.map((i) => (
            <FeatureCard
              title={i?.title}
              subTitle={i?.subTitle}
              logo={i?.logo}
            />
          ))}
        </div>
        {/* <div className="flex gap-12 mb-8 p-16">
          <TabPanel
            category1={`Phython`}
            category2={"Node.Js"}
            category3={"Rest Api"}
            extraClass={"w-[50%]"}
            value1={<CodeEditor width={"100%"} value={a} height={"60vh"} dark={"true"}/>}
            value2={<CodeEditor width={"100%"} value={a} height={"60vh"} />}
            value3={<CodeEditor width={"100%"} value={a} height={"60vh"} />}
            onChange={(index) => {
              setSelectIndex(index);
            }}
          />
          <div className="border-2 w-[40%] shadow-md bg-gray-400 overflow-auto">
            <CodeEditor width={"100%"} value={a} />
          </div>
        </div> */}
        
        
     <div className="bgColor">
      <h1 className="text-center text-4xl pt-10">Popular Use cases</h1>
     <div className="flex justify-center items-center flex-wrap">
          {
            cases.map((c)=>(
              <UseCases 
              logo={c?.logo}
              title={c?.title}
              description={c?.description}
              />
            ))
          }
       </div>
     </div>


        <div className=" flex flex-wrap gap-4 w-full justify-evenly items-center p-10 sm:flex-col  ">
          <div className="flex justify-center h-100 w-100  w-[30%] sm:w-full">
            <img src={contactimg} alt="" className="h-70 w-80 " />
          </div>
          <div className="w-[30%] border-2 p-6 rounded-md border-gray sm:w-full shadow-[0_15px_50px_rgba(0,0,0,0.1)]">
            <form>
              <div>
                <div className="mt-10 relative bg-sky">
                  <input
                    name="name"
                    id="name"
                    type="text"
                    className="undefined relative peer h-10 w-full text-gray-700 placeholder-transparent bg-background-white placeholder-gray-400 outline-none  
block border-b-2 border-gray-300 focus:border-gray-700 hover:border-gray-700 bg-sky"
                    placeholder="Name"
                    value=""
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-500 peer-focus:text-sm "
                  >
                    Name
                  </label>
                </div>
              </div>
              <div>
                <div className=" mt-10 relative undefined">
                  <input
                    name="email"
                    id="email"
                    type="email"
                    className=" undefined relative peer h-10 w-full text-gray-700 placeholder-transparent bg-background-white placeholder-gray-400 outline-none  block border-b-2 border-gray-300 focus:border-gray-700 hover:border-gray-700 undefined"
                    placeholder="Email"
                    value=""
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-500 peer-focus:text-sm "
                  >
                    Email
                  </label>
                </div>
              </div>
              <div>
                <div className=" mt-10 relative undefined">
                  <input
                    name="phone"
                    id="phone"
                    type="phone"
                    className=" undefined relative peer h-10 w-full text-gray-700 placeholder-transparent bg-background-white placeholder-gray-400 outline-none  block border-b-2 border-gray-300 focus:border-gray-700 hover:border-gray-700 undefined"
                    placeholder="Phone no."
                    value=""
                  />
                  <label
                    htmlFor="phone"
                    className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-500 peer-focus:text-sm "
                  >
                    Phone no.
                  </label>
                </div>
              </div>
              <button
                type="button"
                className="bg-primary border-none text-white false  h-[43px] w-[100%] text-base font-medium  rounded-[48px] h-[50px] w-[100%] text-md  my-4"
              >
                <span></span>
                <span></span>
                <span>Send App Link</span>
              </button>
            </form>
          </div>
        </div>



        <Footer />
      </div>
    </>
  );
}

export default LandingPage;
