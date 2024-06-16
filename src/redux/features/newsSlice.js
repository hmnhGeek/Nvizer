import { createSlice } from "@reduxjs/toolkit";
import { newsInitialState } from "../initialStates/newsInitialState";
import {
  getSavedArticles,
  removeArticle,
  saveNews,
} from "../actions/newsActions";

export const newsSlice = createSlice({
  name: "newsSlice",
  initialState: newsInitialState,
  extraReducers: (builder) => {
    builder.addCase(saveNews.pending, (state, action) => {});
    builder.addCase(saveNews.fulfilled, (state, action) => {
      //
    });
    builder.addCase(saveNews.rejected, (state, action) => {});

    builder.addCase(getSavedArticles.pending, (state, action) => {});
    builder.addCase(getSavedArticles.fulfilled, (state, action) => {
      state.favs = action.payload.data;
    });
    builder.addCase(getSavedArticles.rejected, (state, action) => {});

    builder.addCase(removeArticle.pending, (state, action) => {});
    builder.addCase(removeArticle.fulfilled, (state, action) => {
      state.favs = action.payload.data;
    });
    builder.addCase(removeArticle.rejected, (state, action) => {});
  },
});

export default newsSlice.reducer;
