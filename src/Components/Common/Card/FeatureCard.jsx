import React from "react";
import Typography from "../Typography";

function FeatureCard({title,subTitle,logo}) {
  return (
    <div className="h-[300px] w-[300px] border-2 flex items-center justify-center rounded-[16px] drop-shadow-md flex-col p-8 relative m-4 bg-[#ffff] mb-12 hover:bg-gray-600 hover:text-white">
      <Typography
        text={title}
        extraClasses={"text-xl font-medium text-center "}
      />

     <img src={logo} className="h-40 w-40"/>
      <Typography
        text={subTitle}
        extraClasses={"text-base text-center font-normal"}
      />
    </div>
  );
}

export default FeatureCard;
