import { createSlice } from "@reduxjs/toolkit";
import { newsInitialState } from "../initialStates/newsInitialState";
import { saveNews } from "../actions/newsActions";

export const newsSlice = createSlice({
  name: "newsSlice",
  initialState: newsInitialState,
  extraReducers: (builder) => {
    builder.addCase(saveNews.pending, (state, action) => {});
    builder.addCase(saveNews.fulfilled, (state, action) => {
      //
    });
    builder.addCase(saveNews.rejected, (state, action) => {});
  },
});

export default newsSlice.reducer;
