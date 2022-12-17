import axios from "axios";
import { BASE_URL } from "../../Constant";

export const registerUserService = async (payload) => {
  const { data } = await axios.post(
    BASE_URL + `business/auth/signUp`,
    payload,
    {
      headers: {
        "x-api-key":
          'C5eIzVBEMhhaJLHhRCwIZF40sYUdwKiyNLCgLmRfxfz7h3CydjXfYKrqJZYFvJFgBFADmarLuV8rKJAJ3VXUN5zl7yLtMg4VNGSw48RTk43JmKcWtWakqs0RvphDiGtT',
      },
    }
  );
  return data;
};

export const LoginUser = async (payload) => {
  const { data } = await axios.post(
    BASE_URL + `business/auth/signIn`,
    payload,
    {
      headers: {
        "x-api-key":
          "C5eIzVBEMhhaJLHhRCwIZF40sYUdwKiyNLCgLmRfxfz7h3CydjXfYKrqJZYFvJFgBFADmarLuV8rKJAJ3VXUN5zl7yLtMg4VNGSw48RTk43JmKcWtWakqs0RvphDiGtT",
      },
    }
  );
  return data;
};
