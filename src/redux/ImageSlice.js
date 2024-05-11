import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URI_API } from "../const/const";

export const fetchImage = createAsyncThunk("image/fetch", async (holiday) => {
  const res = await fetch(URI_API + "image/" + holiday);
  const data = await res.json();
  return data;
});

const ImageSlice = createSlice({
  name: "image",
  initialState: {
    image: "",
    idImage: "",
    loading: "",
  },
  extraReducers: (builder) => {
    builder.addCase(fetchImage.pending, (state, action) => {
      state.loading = "loading";
    });
    builder.addCase(fetchImage.fulfilled, (state, action) => {
      state.loading = "success";
      state.idImage = action.payload.idImg;
      state.image = action.payload.urlImg;
    });
    builder.addCase(fetchImage.rejected, (state, action) => {
      state.loading = "failed";
    });
  },
});
export default ImageSlice.reducer;
