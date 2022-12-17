import React, { useState } from "react";
import { Icon } from "react-icons-kit";
import { eye } from "react-icons-kit/fa/eye";
import { eyeSlash } from "react-icons-kit/fa/eyeSlash";

const InputFields = ({
  value,
  type,
  placeholder,
  name,
  register,
  callback,
  id,
  extraClasses,
  defaultValue,
  maxLength,
  extraClassesInput,
  onChange,
}) => {
  const [types, setTypes] = useState(false);
  const [icon, setIcon] = useState(eyeSlash);

  const iconHandler = () => {
    if (types) {
      setIcon(eyeSlash);
    } else {
      setIcon(eye);
    }
  };

  return (
    <>
      {type !== "password" ? (
        <div className={` mt-10 relative ${extraClasses}`}>
          <input
            placeholder={placeholder}
            maxLength={maxLength}
            defaultValue={defaultValue}
            onChange={onChange}
            id={type === "file" ? id : name}
            //type="email"
            value={value}
            name={name}
            className={`${extraClassesInput}  relative peer h-10 w-full text-gray-700 placeholder-transparent bg-background-white placeholder-gray-400 outline-none  block border-b-2 border-gray-300 focus:border-gray-700 hover:border-gray-700 ${extraClasses}`}
            onClick={callback && (() => callback())}
            {...register(`${name}`)}
          />
          <label
            for={"name"}
            className={`absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-500 peer-focus:text-sm `}
          >
            {placeholder}
          </label>
        </div>
      ) : (
        <div className=" mt-10 input-section relative">
          <input
            autoComplete="off"
            onClick={callback && (() => callback())}
            id={type === "file" ? id : name}
            name={name}
            type={types ? "text" : "password"}
            className={` relative peer h-10 w-full  text-gray-700 placeholder-transparent bg-background-white placeholder-gray-400 outline-none  block border-b-2 border-gray-300 focus:border-gray-700 hover:border-gray-700 `}
            placeholder={placeholder}
            {...register(`${name}`)}
          />
          {type === "password" ? (
            <span
              onClick={() => {
                setTypes(!types);
              }}
              className="absolute top-2 right-2 cursor-pointer  
             "
            >
              <Icon onClick={() => iconHandler()} icon={icon} />
            </span>
          ) : (
            ""
          )}

          <label
            for={name}
            className={`absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-text-100 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-text-100 peer-focus:text-sm `}
          >
            {placeholder}
          </label>
        </div>
      )}
    </>
  );
};

export default InputFields;

//  <div className={` mt-10 relative ${extraClasses}`}>
//    <input
//      maxLength={maxLength}
//      defaultValue={defaultValue}
//      onChange={onChange}
//      value={value}
//      name={name}
//      id={type === "file" ? id : name}
//      type={type}
//      className={` ${extraClassesInput} relative peer h-10 w-full text-gray-700 placeholder-transparent bg-background-white placeholder-gray-400 outline-none  block border-b-2 border-gray-300 focus:border-gray-700 hover:border-gray-700 ${extraClasses}`}
//      placeholder={placeholder}
//      onClick={callback && (() => callback())}
//      {...register(`${name}`)}
//    />

//    <label
//      for={name}
//      className={`absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-500 peer-focus:text-sm `}
//    >
//      {placeholder}
//    </label>
//  </div>;
