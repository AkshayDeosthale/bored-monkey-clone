import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const uriSlice = createSlice({
  name: "uri",
  initialState,
  reducers: {
    setUri: (state, action) => {
      state.uri = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUri } = uriSlice.actions;

export default uriSlice.reducer;
