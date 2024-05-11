import { configureStore } from "@reduxjs/toolkit";
import HolidaysSlice from "./HolidaysSlice";
import TextSlice from "./TextSlice";
import ImageSlice from "./ImageSlice";
export const store = configureStore({
  reducer: {
    holiday: HolidaysSlice,
    text: TextSlice,
    image: ImageSlice,
  },
});
