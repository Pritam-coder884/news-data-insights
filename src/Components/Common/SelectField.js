import React from "react";

const SelectField = ({
  api,
  extraClass,
  defaultVal,
  optionClass,
  register,
  name,
  
}) => {
  return (
    <div
      className={`border-b-2 border-gray-300 sm:mt-[52px] mt-[50px] hover:border-gray-700 focus:border-gray-700 relative  bg-background-white inline-block w-full  sm:text-sm ${extraClass}`}
    >
      <select
        //onClick={(e) => console.log("select", e.target.value)}
        className=" appearance-none w-full mb-1 inline outline-none "
        {...register(name)}
      >
        <option className="text-gray-500 mb-1" value="" selected data-default>
          {defaultVal}
        </option>
        {api?.map((props) => (
          <>
            <option className={`${optionClass} mb-1`} value={props}>
              {props}
            </option>
          </>
        ))}
      </select>
      <div
        className={` pointer-events-none absolute inset-y-0 right-0 flex items-center mb-1 text-gray-700 `}
      >
        <svg
          className="fill-current h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
};

export default SelectField;
