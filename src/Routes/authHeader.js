export default function authHeader() {
  const token = localStorage.getItem("token");

  if (token) {
    return {
      headers: {
        authorization: token,
        "x-api-key":
          "C5eIzVBEMhhaJLHhRCwIZF40sYUdwKiyNLCgLmRfxfz7h3CydjXfYKrqJZYFvJFgBFADmarLuV8rKJAJ3VXUN5zl7yLtMg4VNGSw48RTk43JmKcWtWakqs0RvphDiGtT",
       
        //authtype:"manual",
      },
    };
  } else {
    return {};
  }
}


//'Bearer ' +