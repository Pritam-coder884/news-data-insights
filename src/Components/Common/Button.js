import React from "react";
import Loader from "./Loader";

const Button = ({
  text,
  type,
  badge,
  textColor,
  btnColor,
  btnBorder,
  size,
  width,
  extraClasses,
  badgeClasses,
  Callback,
  btnType,
  disabled = false,
  icon,
  loading = false,
  svg
}) => {
  return (
    <button
      type={type || "button"}
      onClick={Callback && (() => Callback())}
      disabled={disabled}
      //style={{ width }}
      className={`${
        btnType === "filled"
          ? `bg-primary border-none text-[white] ${
              disabled && "bg-[#D9E7FF] text-base font-semibold"
            }`
          : btnType === "outLined"
          ? "bg-inherit border-solid border-2 border-primary text-primary hover:bg-primary hover:text-white font-medium"
          : disabled && "bg-[#D9E7FF] text-btnDisable font-semibold"
      } rounded-md h-[43px] max-w-[100%] text-base font-medium ${extraClasses}`}
    >
      {loading ? (<Loader />) : ((<><span>{icon}</span><span>{svg}</span><span>{ text}</span></> ))}
    </button>
  );
};

export default Button;
