import { LoginUser } from "../Services/AuthService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  loading: false,
  error: "",
  status: false,
  isLogin: false
};

export const loginUser = createAsyncThunk(
  "login/user",
  async (payload, thunkAPI) => {
    try {
      const data = await LoginUser(payload);
      console.log("datain otp", data);
      localStorage.setItem("token", data?.data?.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.error.response);
    }
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    reset: (state) => {
      state.status = false;
    
    },
    resetAllregister: (state) => {
      state = initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.status = action.payload?.success;
      state.isLogin= true
    });
  },
});

export const { reset } = loginSlice.actions;

export default loginSlice.reducer;
