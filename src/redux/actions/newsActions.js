import { createAsyncThunk } from "@reduxjs/toolkit";
import authApi from "../../Api/authApi";

export const saveNews = createAsyncThunk(
  "saveNews",
  async ({ news, email, token }) => {
    const response = await authApi.post(
      `/news/save_article?user=${email}`,
      news,
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  }
);

export const getSavedArticles = createAsyncThunk(
  "getSavedArticles",
  async ({ email, token }) => {
    const response = await authApi.get(
      `/news/get_saved_articles?user=${email}`,
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  }
);

export const removeArticle = createAsyncThunk(
  "removeArticle",
  async ({ news, email, token }) => {
    const response = await authApi.post(
      `/news/remove_article?user=${email}`,
      news,
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  }
);
