import React from "react";
import Typography from "../Typography";

const UseCases = ({ logo, title, description }) => {
  return (
        <div className="h-[350px] w-[420px] flex items-center justify-center flex-col gap-4 p-8">
          <img src={logo} className="h-[70px]" />
          <Typography text={title} extraClasses={"text-2xl font-medium text-center"} />
          <Typography
            text={description}
            extraClasses={"text-base font-normal text-center"}
          />
        </div>
  );
};

export default UseCases;
