import { configureStore } from "@reduxjs/toolkit";
import uriReducer from "../store/uriSlice";

export const store = configureStore({
  reducer: {
    uri: uriReducer,
  },
});
