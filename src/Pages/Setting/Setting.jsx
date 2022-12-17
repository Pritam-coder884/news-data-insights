import React, { useEffect, useState } from "react";
import userLogo from "../../Assets/user.jpg";
import { profileGetData } from "../../Redux/Services/FilterListService";

const Setting = () => {
  const [error, setError] = useState("");
  const [email,setEmail]=useState("");
  const [firstName,setFirstName]=useState("");
  const [lastName,setLastName]=useState("");
  const [phoneno,setPhoneno]=useState("");
  const handlegetData = async () => {
    try {
      const res = await profileGetData();
      const getData=res.data.data;
      console.log(getData);
      setEmail(getData.email);
      setFirstName(getData.firstName);
      setLastName(getData.lastName);
      setPhoneno(getData.phoneNumber);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };
  useEffect(() => {
    handlegetData();
  }, []);
  return (
    <div className="flex items-center justify-center">
      <div className="flex justifty-center items-center flex-col">
        <div>
          <img src={userLogo} alt="" />
        </div>
        <div className="pl-[150px] pr-[150px] p-10 text-2xl">
          <div className="flex gap-[290px]">
            <div>
              <label>First Name</label>
              <p className="text-xl">{firstName}</p>
            </div>
            <div>
              <label>Last Name</label>
              <p  className="text-xl">{lastName}</p>
            </div>
          </div>
          <div className="mt-6"></div>
          <div className="flex gap-[190px]">
            <div>
              <label>Email</label>
              <p  className="text-xl">{email}</p>
            </div>
            <div>
              <label>Mobile Number</label>
              <p  className="text-xl">{phoneno}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
