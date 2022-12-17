import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { registerUserService } from "../Services/AuthService";

const initialState = {
  data: null,
  loading: false,
  error: "",
  status: false,
};

export const registerUser = createAsyncThunk(
  "register/user",
  async (payload, thunkAPI) => {
    try {
      const data = await registerUserService(payload);
      console.log("datain otp", data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.error.response);
    }
  }
);

const registerSlice = createSlice({
  name: "register",
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
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.status = action.payload.data?.response.status;
    });
  },
});

export const { reset } = registerSlice.actions;

export default registerSlice.reducer;
