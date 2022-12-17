import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getService } from "../Services/FilterListService";

const initialState = {
  data: null,
  loading: false,
  error: "",
  status: false,
  
};

export const getFilterData = createAsyncThunk(
  "getFilter/user",
  async (payload, thunkAPI) => {
    try {
      const data = await getService(payload);
    //   console.log("datain otp", data);
    //   localStorage.setItem("token", data?.data?.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.error.response);
    }
  }
);

const getFilterSlice = createSlice({
  name: "getFilter",
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
    builder.addCase(getFilterData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getFilterData.rejected, (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    });
    builder.addCase(getFilterData.fulfilled, (state, action) => {
      state.loading = false;
    //   state.data = action.payload;
      state.data = action.payload?.data?.data?.result;
    });
  },
});

export const { reset } = getFilterSlice.actions;

export default getFilterSlice.reducer;
