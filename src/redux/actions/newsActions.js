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
