import React from 'react'
import InputFields from '../Components/Common/InputField'
import SelectField from '../Components/Common/SelectField'
import Typography from '../Components/Common/Typography'
import { UserDetailSchema } from '../Schema/AuthSchema';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from '../Components/Common/Button';



function UserDetails() {
    const  navigate = useNavigate()
    const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(UserDetailSchema),
  });


  const getStarted=(data)=>{
    console.log(data)
  }

  return (
        <>
      <div className=" h-[100vh] w-[454px] sm:w-[100%] block xl:px-[2rem] m-auto ">
        <div
          onClick={() => navigate("/login")}
          className="cursor-pointer mt-[16px] mb-[32px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </div>
        <div className="flex-col flex justify-start  mb-[32px]">
          <span className="flex row sm:flex-col">
            <Typography
              text={"Tell us about "}
              extraClasses={"text-[24px] font-poppins text-gray-500 "}
            />
            <Typography
              text={"yourself"}
              extraClasses={
                "text-[24px] font-poppins text-gray-500 ml-2 sm:ml-0"
              }
            />
          </span>
        </div>
        {/* <label htmlFor="Imgupload">
          {
            selectedFile ? (
              <div className="relative">
                <img
                  alt="icon"
                  src={preview}
                  className="h-24 w-24 object-cover "
                />

                <img
                  src={edit}
                  alt="edit"
                  className="absolute h-12 w-12 top-14 left-16 "
                />
              </div>
            ) : resgoogle?.profileImage ? (
              <div className="relative">
                <img
                  alt="userProfile"
                  src={
                    resgoogle?.profileImage ? resgoogle?.profileImage : frame
                  }
                  className="h-24 w-24 object-cover "
                />

                <img
                  src={edit}
                  alt="edit"
                  className="absolute h-12 w-12 top-14 left-16 "
                />
              </div>
            ) : (
              <div className="relative">
                <img
                  alt="icon"
                  src={
                    userPreData?.profileImage
                      ? userPreData?.profileImage
                      : frame
                  }
                  className="h-24 w-24 object-cover "
                />

                <img
                  src={edit}
                  alt="edit"
                  className={`absolute h-12 w-12 top-14 left-16 `}
                />
              </div>
            )

            // <img
            //   src={resgoogle?.photoUrl ? resgoogle?.photoUrl : frame}
            //   alt="userprofile"
            // />
          }
        </label>
        <input
          type={"file"}
          id="Imgupload"
          className="hidden"
          {...register("profileImage")}
          //defaultValue={userPreData?.profileImageLink}
        /> */}

        {/* <Typography
          text={"Upload your profile picture (optional)"}
          extraClasses={"text-[12px] mt-[12px] font-poppins text-gray-600 "}
        /> */}

        <form className="xl:max-w-[100%]" onSubmit={handleSubmit(getStarted)}>
          <InputFields
            register={register}
            type={"text"}
            placeholder={"First name"}
            name={"firstName"}
            // defaultValue={
            //   userPreData?.firstName
            //     ? userPreData?.firstName
            //     : resgoogle?.firstName
            // }
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
              extraClass={
                "w-[100%] col-span-2 sm:col-span-2  sm:mt-[43px]    "
              }
              defaultVal={"+91"}
              //api={phone}
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

          <Button
            text={"Continue"}
            //Callback={() => navigate("/company")}
            disabled={Object.keys(errors).length}
            btnType={"filled"}
            type={"submit"}
            extraClasses={"mt-[32px] mb-[32px]"}
          />
        </form>
      </div>
    </>
  )
}

export default UserDetails