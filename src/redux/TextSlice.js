import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URI_API } from "../const/const";

export const fetchText = createAsyncThunk("text/fetchText", async (holiday) => {
  const res = await fetch(URI_API + "text/" + holiday);
  const data = await res.json();
  return data;
});

const TextSlice = createSlice({
  name: "text",
  initialState: {
    text: "",
    idText: "",
    loading: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchText.pending, (state, action) => {
      state.loading = "loading";
      state.text = "";
      state.idText = "";
    });
    builder.addCase(fetchText.fulfilled, (state, action) => {
      state.loading = "success";
      state.text = action.payload.text;
      state.idText = action.payload.idText;
    });
    builder.addCase(fetchText.rejected, (state, action) => {
      state.loading = "failed";
      state.text = "";
      state.idText = "";
    });
  },
});

export default TextSlice.reducer;
