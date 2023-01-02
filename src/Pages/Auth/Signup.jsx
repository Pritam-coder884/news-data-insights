import React from "react";
import Button from "../../Components/Common/Button";
import InputFields from "../../Components/Common/InputField";
import Typography from "../../Components/Common/Typography";
import { signupSchema } from "../../Schema/AuthSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import SelectField from "../../Components/Common/SelectField";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../Redux/Slices/RegisterSlice";
import { useEffect,useState } from "react";
import Logo from "../../Assets/News_Data_Insights.svg";

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const registerUserData = useSelector((state) => state.registerUser?.data);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(signupSchema),
  });

  useEffect(() => {
    if (registerUserData?.success) {
      navigate("/login");
    }
  }, [registerUserData]);

  const getStarted = (data) => {
    console.log(data);
    const request = {
      phoneNumber: data.mobileNo,
      shortCode: data.countrycode ?? "+91",
      password: data.password,
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      gender: data.gender,
    };

    dispatch(registerUser(request));
  };
  const [isChecked, setIsChecked] = useState(false);
  const handleRadioSubmit=(e)=>{
    if(e.target.value === "yes"){
     setIsChecked(true);
    }
    else{
     setIsChecked(false);
    }
   }

  return (
    <>
      <div className="sm:h-[100vh] sm:mt-12 h-[50vh] max-w-[554px] block xl:px-[2rem] sm:w-full  m-auto ">
        {/* <div className="flex flex-col leading-[0.8] justify-center max-w-[100%] items-center text-gray-800 sm:mt-[80px] ">
          <Typography
            text={"Lok APP"}
            extraClasses={"cursor-pointer font-sergio text-[48px] font-bold"}
          />
          <Typography
            text={"B2B"}
            extraClasses={"cursor-pointer font-sergio text-[24px] font-medium "}
          />
        </div> */}
        <div className="mt-3">
          <img
            src={Logo}
            alt="logo"
            className="ml-20 sm:h-[4rem] h-[5rem] w-[20rem] object-cover"
          />
        </div>
        <Typography
          text={"Sign up"}
          extraClasses={
            " text-center font-poppins text-[28px] mt-[20px] text-center  mb-[20px]  font-semibold sm:hidden "
          }
        />

        <form className="xl:max-w-[100%] " onSubmit={handleSubmit(getStarted)}>
          <InputFields
            type={"email"}
            register={register}
            placeholder={"company email"}
            name={"email"}
          />

          <Typography
            text={errors?.email?.message}
            extraClasses={"text-sm text-error text-left"}
          />
          <InputFields
            type={"password"}
            placeholder={"password"}
            register={register}
            name={"password"}
          />

          {/* {!errors?.password && ( */}
          <Typography
            text={
              "Password must contain 8 characters consisting atleast one number, one special character & one capital letter."
            }
            extraClasses={`mt-[8px] text-[12px] leading-[14px] font-poppins font-normal text-gray-500 flex justify-start ${
              errors?.password && "text-error"
            }`}
          />

          <InputFields
            register={register}
            type={"text"}
            placeholder={"First name"}
            name={"firstName"}
          />

          <Typography
            text={errors?.firstName?.message}
            extraClasses={"text-sm text-error"}
          />

          <InputFields
            type={"text"}
            placeholder={"Last name"}
            register={register}
            name={"lastName"}
            // defaultValue={
            //   userPreData?.lastName
            //     ? userPreData?.lastName
            //     : resgoogle?.lastName
            // }
          />

          <Typography
            text={errors?.lastName?.message}
            extraClasses={"text-sm text-error"}
          />
          <div className="grid grid-cols-12 sm:grid-cols-12 ">
            <SelectField
              extraClass={"w-[100%] col-span-2 sm:col-span-2  sm:mt-[43px]    "}
              defaultVal={"+91"}
              api={["+91"]}
              name="countrycode"
              register={register}
            />

            <InputFields
              maxlength={"10"}
              type={"tel"}
              placeholder={"Mobile number"}
              extraClasses={"col-span-10 sm:col-span-10 w-full  text-sm"}
              register={register}
              name={"mobileNo"}
              //defaultValue={userPreData?.phoneNumber.phone ? userPreData?.phoneNumber.phone : mobile}
            />
            <Typography
              text={errors?.mobileNo?.message}
              extraClasses={
                "text-sm text-error col-span-10 sm:col-span-10 w-full"
              }
            />
          </div>

          <SelectField
            extraClass={"w-[100%] col-span-2 sm:col-span-2  sm:mt-[43px]    "}
            defaultVal={"Gender"}
            api={["Male", "Female", "Others"]}
            name="gender"
            register={register}
          />
          <div className="mt-10">
            <Typography
              text={"Is organisation ?"}
              extraClasses={
                "text-xl text-black col-span-10 sm:col-span-10 w-full"
              }
            />
            <label>
              <input
                type="radio"
                name="org"
                value="yes"
                onClick={handleRadioSubmit}
              />{" "}
              Yes
            </label>
            <label className="ml-6">
              <input
                type="radio"
                name="org"
                value="no"
                onClick={handleRadioSubmit}
              />{" "}
               No
            </label>
            
            {isChecked ? ( <InputFields
            register={register}
            type={"text"}
            placeholder={"Organisation name"}
            name={"organisationName"}
          />):(<></>)}
          </div>

          <Button
            text={"Sign Up"}
            //loading={loading}
            type={"submit"}
            btnType={"filled"}
            extraClasses={"mt-[43px] w-full"}
            disabled={Object.keys(errors).length}
          />
        </form>

        <p className="w-full  mt-1  text-xs">
          By signing up I agree to
          <span className="text-xs ml-1 mr-1 font-medium text-primary">
            T&C
          </span>
          and
          <span className="text-xs  ml-1 font-medium text-primary">
            Privacy Policies
          </span>
        </p>

        <h2 className="w-[100%] sm:w-[100%] text-center border-b-[2px] leading-[0.1em] mt-[20px] mb-[20px] border-gray-400">
          <span className=" w-[10px] h-[10px] bg-gray-100 text-gray-500 px-[10px]">
            {" "}
            OR
          </span>
        </h2>

        {/* <div className="hidden sm:block">
          <Typography
            text={"Login with"}
            extraClasses={
              "text-gray-500 text-[14px] text-center hidden sm:block"
            }
          />
          <span
            onClick={() => loginGoogle()}
            className={
              "  flex sm:w-[32px] h-[32px] mt-[24px]  mx-[auto] mb-4 cursor-pointer sm:block xxl:hidden "
            }
          >
            <img className="" src={google} alt={"Google"} />
          </span>
        </div> */}
        {/* <div className="sm:hidden">
          <Button
            Callback={() => loginGoogle()}
            text={"Login with google"}
            extraClasses={
              "w-full mt-[32px]  bg-inherit border-solid border-2 border-gray-400 text-gray-600 font-medium mb-[10px] sm:hidden"
            }
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="35"
                height="35"
                className="inline"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                ></path>
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                ></path>
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
              </svg>
            }
          />
        </div> */}
        <div className=" flex flex-row justify-center text-center  sm:flex-col">
          <Typography text={"Already have an account?"} extraClasses={""} />
          <Typography
            action={() => navigate("/login")}
            text={"Sign in"}
            extraClasses={"underline ml-1 cursor-pointer text-primary"}
          />
        </div>
        <br/>
        <div className=" flex flex-row justify-center text-center  sm:flex-col">
          <Typography text={"Want to see Home Page ?"} extraClasses={""} />
          <Typography
            action={() => navigate("/home")}
            text={"Home"}
            extraClasses={"underline ml-1 cursor-pointer text-primary"}
          />
        </div>
        <br/>
      </div>
    </>
  );
}

export default Signup;
