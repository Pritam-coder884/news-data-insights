import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FilterListService } from "../Services/FilterListService";

const initialState = {
  data: null,
  loading: false,
  error: "",
  status: false,
};

export const FilterData = createAsyncThunk(
  "filter/user",
  async (payload, thunkAPI) => {
    try {
      const data = await FilterListService();
      console.log("datain otp", data);
      
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.error.response);
    }
  }
);


const FilterSlice = createSlice({
  name: "filter",
  initialState,
  //   reducers: {
  //     reset: (state) => {
  //       state.status = false;
  //     },
  //     resetAllregister: (state) => {
  //       state = initialState;
  //     },
  //   },
  extraReducers: (builder) => {
    builder.addCase(FilterData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(FilterData.rejected, (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    });
    builder.addCase(FilterData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.status = action.payload?.success;
    });
  },
});

export default FilterSlice.reducer