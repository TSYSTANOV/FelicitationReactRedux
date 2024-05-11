import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URI_API } from "../const/const";

export const fetchHolidays = createAsyncThunk(
  "holidays/fetchHolidays",
  async () => {
    const res = await fetch(URI_API);
    const data = await res.json();
    return data;
  }
);

const HolidaysSlice = createSlice({
  name: "holidays",
  initialState: {
    holidays: {},
    holiday: "",
    loading: "",
    error: "",
  },
  reducers: {
    setHoliday(state, action) {
      state.holiday = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHolidays.pending, (state) => {
      state.loading = "loading";
    });
    builder.addCase(fetchHolidays.fulfilled, (state, action) => {
      state.loading = "success";
      state.holidays = action.payload;
    });
    builder.addCase(fetchHolidays.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload;
    });
  },
});
export const { setHoliday } = HolidaysSlice.actions;
export default HolidaysSlice.reducer;
