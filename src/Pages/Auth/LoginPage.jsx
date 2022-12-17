import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Common/Button";
import InputFields from "../../Components/Common/InputField";
import Typography from "../../Components/Common/Typography";
import { loginSchema } from "../../Schema/AuthSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../Redux/Slices/LoginSlice";
import { useEffect } from "react";
import Logo from "../../Assets/News_Data_Insights.svg";

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state)=>state?.loginUser)
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(loginSchema),
  });

  useEffect(()=>{
    localStorage.removeItem('token')
  },[])

  useEffect(()=>{
      if(data?.status){
        navigate('/homepage')
      }
  },[data?.status])

  const getStarted = (data) => {
    console.log(data);
    const request = {
      password: data.password,
      email: data.email,
    };
    dispatch(loginUser(request));
  };

  return (
    <>
      <div className=" sm:mt-12 sm:h-[100vh] h-[50vh]  sm:w-[100%] max-w-[454px] block xl:px-[2rem]  m-auto   ">
        {/* <div className="flex flex-col leading-[0.8] justify-center max-w-[100%] items-center text-gray-800 xxl:h-[100px] ">
          <Typography
            text={"LOK APP"}
            extraClasses={"cursor-pointer font-sergio text-[48px] font-bold"}
          />
          <Typography
            text={"B2B"}
            extraClasses={
              "cursor-pointer font-sergio text-[24px] font-medium pt-4 "
            }
          />
        </div> */}
        <div className="mt-3">
          <img src={Logo} alt="logo" className="ml-12 sm:h-[4rem] h-[5rem] w-[20rem] object-cover" />
        </div>

        <Typography
          text={"Sign in"}
          extraClasses={
            "font-poppins text-[28px] mt-[20px] text-center mr-12 mb-[20px] font-semibold sm:hidden"
          }
        />

        <form className="xl:max-w-[100%]" onSubmit={handleSubmit(getStarted)}>
          <InputFields
            type={"email"}
            register={register}
            placeholder={"Company Email"}
            name={"email"}
          />
          <Typography
            text={errors?.email?.message}
            extraClasses={"text-sm text-error"}
          />
          <InputFields
            type={"password"}
            register={register}
            placeholder={"Password"}
            name={"password"}
          />

          <Typography
            //action={() => navigate("/forgetpassword")}
            text={"Forget Password?"}
            extraClasses={" cursor-pointer text-primary flex justify-end "}
          />
          <Typography
            text={errors?.password?.message}
            extraClasses={"text-sm  text-error"}
          />

          <Button
            text={"Sign In"}
            disabled={Object.keys(errors).length}
            type={"submit"}
            btnType={"filled"}
            extraClasses={"mt-[50px] w-full"}
            // loading={loading}
          />
        </form>

        <h2 className="w-[100%] text-center border-b-[2px] leading-[0.1em] mt-[20px] mb-[20px] border-gray-400">
          <span className=" w-[10px] h-[10px] bg-gray-100 text-gray-500 px-[10px]">
            {" "}
            OR
          </span>
        </h2>

        {/* <div className="hidden sm:block">
          <Typography
            text={"Login with"}
            extraClasses={"text-gray-500 text-[14px] text-center "}
          />
          <span
            //onClick={() => loginGoogle()}
            className={
              "  flex sm:w-[32px] h-[32px] mt-[24px]  mx-[auto] mb-4 cursor-pointer  sm:block xxl:hidden"
            }
          >
            <img className="" src={googles} alt={"Google"} />
          </span>
        </div> */}

        {/* <div className="sm:hidden">
          <Button
           // Callback={() => loginGoogle()}
            text={"Login with google"}
            extraClasses={
              "w-full mt-[32px]  bg-inherit border-solid border-2 border-gray-400 text-gray-600 font-medium mb-[10px] "
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
            action={() => navigate("/signup")}
            text={"Sign up"}
            extraClasses={"underline ml-1 cursor-pointer text-primary"}
          />
        </div>
      </div>
    </>
  );
}

export default LoginPage;
