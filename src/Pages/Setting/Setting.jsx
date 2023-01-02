import React, { useEffect, useState } from "react";
import userLogo from "../../Assets/user.jpg";
import { profileGetData } from "../../Redux/Services/FilterListService";
import Modal from "../../Components/Common/Modal";
import Button from "../../Components/Common/Button";

import { updateUserPassword } from "../../Redux/Services/FilterListService";


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
      const user_id=getData._id
      console.log(user_id);
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

  const [opens, setOpen] = useState(false);

  const handleModalData = () => {
    setOpen(true);
  };

  const [modalPasswordData,setModalPasswordData]=useState({
    old:"",
    new:"",
    confirm:"",
  })

  const handleModalSubmit=async(e)=>{
    e.preventDefault();
    if(modalPasswordData.new !== modalPasswordData.confirm){
      alert("Enter Correct Confirm Password")
    }
    else{
      // console.log(modalPasswordData);
      try {
        await updateUserPassword();
        alert("Password updated");
      } catch (error) {
        if (
          error.response &&
          error.response.status >= 400 &&
          error.response.status <= 500
        ) {
          setError(error.response.data.message);
        }
      }
    }
  }

  const handleModalPasswordData=(e)=>{
    setModalPasswordData({...modalPasswordData,[e.target.name]:e.target.value});
  }


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
      <h1 onClick={handleModalData}>Update Password</h1>
      <Modal
        open={opens}
        closeModal={() => {
          setOpen(false);
        }}
      >
        <div className="w-[400px] p-10">
          <form className="flex flex-col" onSubmit={handleModalSubmit}>
            <input
              type="password"
              placeholder="Old Password"
              className="h-[5vh] border-2 border-gray-900 mb-4 placeholder-gray-500 pl-2 pr-2 p-4"
              name="old"
              value={modalPasswordData.old}
              onChange={handleModalPasswordData}
            />
            <input
              type="password"
              placeholder="New Password"
              className="h-[5vh] border-2 border-gray-900 mb-4 placeholder-gray-500 pl-2 pr-2 p-4"
              name="new"
              value={modalPasswordData.new}
              onChange={handleModalPasswordData}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="h-[5vh] border-2 border-gray-900 mb-4 placeholder-gray-500 pl-2 pr-2 p-4"
              name="confirm"
              value={modalPasswordData.confirm}
              onChange={handleModalPasswordData}
            />
            <Button
              extraClasses={"p-2 md:w-[100px] sm:w-[180px]"}
              type={"submit"}
              text={"Submit"}
              btnType={"filled"}
            />
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default Setting;
