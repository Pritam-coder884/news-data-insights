import React, { useState } from "react";
import Button from "../Button";
import Typography from "../Typography";
import NavbarLannding from "../Header/NavbarLanding"

import { Icon } from "react-icons-kit";
import { check } from "react-icons-kit/oct/check";
import { x } from "react-icons-kit/oct/x";
import Footer from "../../Footer/Footer";

let plan = [
  {
    amountPerMonth:"0$/month",
    amountPerYear:"0$/year",
    Name: "Free(30 Days Trial)",
    benefit: [
      "6000 free API credits",
      "200 per day Search of articles",
      "10 articles per API credit",
      "30 Days access to historical data",
      "Only PDF export",
    ],
    disAdvance: [
      "Article Sentiment Analysis - Not available",
      "Event(Stock movement) detection from articles - Not available",
      "Entity (Person, Location, Organization)Detection and Tracking - Not available",
      "Topic (Covid, IPL, US Election, Brexit, Ukraine war etc.) Identification and Tracking - Not available",
      "Toxic Content Identification - Not available",
      "Dashboard - Analytics - Not available",
      "Consultation - Not available",
    ],
  },

  {
    amountPerMonth:"99$/month",
    amountPerYear:"249$/year",
    Name: "Basic",
    benefit: [
      "10000 free API credits",
      "Search of articles, 20 articles per API credit",
      "90 Days access to historical data",
      "Export all result articles",
      "PDF and Tabular export",
      "Article Sentiment Analysis - Available",
      "Event(Stock movement) detection from articles -  Available",
      "Topic (Covid, IPL, US Election, Brexit, Ukraine war etc.) Identification and Tracking - Available",
    ],
    disAdvance: [
      "Entity (Person, Location, Organization)Detection and Tracking - Not available",

      "Toxic Content Identification - Not available",
      "Dashboard - Analytics - Not available",
      "Consultation - Not available",
    ],
  },
  {
    amountPerMonth:"199$/month",
    amountPerYear:"549$/year",
    Name: "Professional",
    benefit: [
      " 250000 free API credits",
      "Search of articles, 20 articles per API credit",
      "180 Days access to historical data",
      "Export all result articles",
      "PDF and Tabular export",
      "Article Sentiment Analysis - Available",
      "Entity (Person, Location, Organization)Detection and Tracking - Available",
      "Event(Stock movement) detection from articles -  Available",
      "Topic (Covid, IPL, US Election, Brexit, Ukraine war etc.) Identification and Tracking - Available",
      "Toxic Content Identification - Available",
      "Dashboard - Analytics - Available",
    ],
    disAdvance: ["Consultation - Not available"],
  },
  {
    amountPerMonth:"199$/month",
    amountPerYear:"549$/year",
    Name: "Enterprise",
    benefit: [
      "500000 free API credits",
      "Search of articles, 20 articles per API credit",
      "180 Days access to historical data",
      "Export all result articles",
      "PDF and Tabular export",
      "Article Sentiment Analysis - Available",
      "Entity (Person, Location, Organization)Detection and Tracking - Available",
      "Event(Stock movement) detection from articles -  Available",
      "Topic (Covid, IPL, US Election, Brexit, Ukraine war etc.) Identification and Tracking - Available",
      "Toxic Content Identification - Available",
      "Dashboard - Analytics - Available",
      "Consultation - Not available",
    ],
    disAdvance: [],
  },
];

function PaymentPlan() {

  const [amounts,setAmounts]=useState("month");
  const [isChecked,setIsChecked]=useState(true);

  const handleRadioSubmit=(e)=>{
   setAmounts(()=>e.target.value);
   if(e.target.value == "month"){
    setIsChecked(true);
   }
   else{
    setIsChecked(false);
   }
  }

  return (
    <>
    <NavbarLannding />
    <div className="text-center mt-20 pt-10 pb-1 mx-auto">
       <h1 className="text-4xl font-semibold">Choose the pricing plan which suits you the best !</h1>
       <p className="text-xl font-light mt-6">You can upgrade or cancel your plan anytime</p>
       <div className="flex items-center justify-center gap-6 mt-12 mb-6">
         <label>
         <input type="radio" name="pay" value="month" checked={isChecked} onClick={handleRadioSubmit} />{" "}Pay Monthly
         </label>
         <label>
         <input type="radio" name="pay" value="year" checked={!isChecked} onClick={handleRadioSubmit} />{" "}Pay Yearly
         </label>
       </div>
    </div>
    <div className="flex items-center justify-center mb-10 ">
      {plan?.map((i) => (
        <>
          <div className="w-[300px] border-2 flex items-center justify-center rounded-[16px] drop-shadow-md flex-col p-8 relative m-4">
            <Button
              text={i?.Name}
              type={"submit"}
              btnType={"filled"}
              extraClasses={
                " h-[40px] w-[50%] absolute top-[-10px] gradiantbutton"
              }
            />

            <div className="flex flex-col mt-10">
                <h3 className={"text-2xl font-medium"}>{amounts==="month" ? i?.amountPerMonth : i?.amountPerYear }</h3>
            </div>
            
            <ul className="marker:text-[#ee1777] list-outside list-none mt-10">
              {i?.benefit?.map((item) => (
                <li>
                  <div className="flex gap-1.5">
                    <Icon icon={check} style={{color:"green"}} />
                    <p>{item}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* {i?.disAdvance?.length ? (
              <h3 className="text-xl text-error my-4">Not Available</h3>
            ) : (
              ""
            )} */}
            <ul className="marker:text-[#ee1777] list-outside list-none ">
              {i?.disAdvance?.map((item) => (
                <li>
                  <div className="flex gap-1.5">
                    <Icon icon={x} style={{color:"red"}} />
                    <p>{item}</p>
                  </div>
                </li>
              ))}
            </ul>

            <Button
              text={"Buy now"}
              type={"submit"}
              btnType={"filled"}
              extraClasses={"mt-[15px] h-[40px] w-[50%] gradiantbutton"}
            />
          </div>
        </>
      ))}
    </div>
    <Footer />
    </>
  );
}

export default PaymentPlan;
