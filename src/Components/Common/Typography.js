import React from "react";

const Typography = ({
  title,
  text,
  font,
  color,
  fontWeight,
  extraClasses,
  action,
}) => {
  // Font weight - optional (use it for overriding)
  // console.log("typo-", onClick)
  return (
    <p
      onClick={action && (()=>action())}
      className={` ${font} text-${color} ${extraClasses}`}
      style={{ fontWeight }}
    >
      {text}
    </p>
  );
};

export default Typography;
