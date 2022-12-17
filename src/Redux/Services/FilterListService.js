import axios from "axios";
import { BASE_URL } from "../../Constant";
import authHeader from "../../Routes/authHeader";

export const FilterListService = async () => {
  const data = await axios.get(
    BASE_URL + `business/news/filters`,
    authHeader()
  );

  return data;
};

export const getService = async (payload) => {
  console.log('fikk',payload)
  const data = await axios.get(
    BASE_URL +
      `business/news?languages=${payload?.Language.join(
        ","
      )}&sources=${payload?.Source.join(
        ","
      )}&categories=${payload?.category.join(",")}&page=1`,
    {
      headers: {
        authorization: localStorage.getItem("token"),
        "x-api-key":
          "C5eIzVBEMhhaJLHhRCwIZF40sYUdwKiyNLCgLmRfxfz7h3CydjXfYKrqJZYFvJFgBFADmarLuV8rKJAJ3VXUN5zl7yLtMg4VNGSw48RTk43JmKcWtWakqs0RvphDiGtT",
        // "api-key": "LOK_3l1ps23g3felrg21icf81cb334b112k2",
        "api-key":"LOK_6g1p11ndc1p34215cx522c5eg31dbejd",
        //authtype:"manual",
      },
    }
  );

  return data;
};


export const profileGetData=async()=>{
    const res = await axios.get(  BASE_URL + `business/user/details`,{
        headers: {
          authorization:`Bearer ${localStorage.getItem("token")}`,
          "x-api-key":
            "C5eIzVBEMhhaJLHhRCwIZF40sYUdwKiyNLCgLmRfxfz7h3CydjXfYKrqJZYFvJFgBFADmarLuV8rKJAJ3VXUN5zl7yLtMg4VNGSw48RTk43JmKcWtWakqs0RvphDiGtT",
          "api-key": "LOK_3l1ps23g3felrg21icf81cb334b112k2",
          //authtype:"manual",
        },
    });
    return res;
}
