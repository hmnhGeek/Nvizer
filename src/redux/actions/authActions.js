import { createAsyncThunk } from "@reduxjs/toolkit";
import authApi from "../../Api/authApi";

export const oauthSignup = createAsyncThunk(
  "oauthSignup",
  async ({ email, password }) => {
    // Define the data you want to send as an object
    const data = {
      username: email,
      password: password,
    };

    // Define headers
    const headers = {
      accept: "application/json",
      "Content-Type": "application/json",
    };

    const response = await authApi.post("/users/register", data, { headers });
    return response;
  }
);

export const oauthLogin = createAsyncThunk(
  "oauthLogin",
  async ({ email, password }) => {
    // Define the data you want to send as an object
    const data = {
      grant_type: "",
      username: email,
      password: password,
      scope: "",
      client_id: "",
      client_secret: "",
    };

    // Define headers
    const headers = {
      accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    };

    const response = await authApi.post("/users/token", data, { headers });
    return response;
  }
);

export const oauthLogout = createAsyncThunk("oauthLogout", async (token) => {
  const headers = {
    accept: "application/json",
    token: token,
  };

  const response = await authApi.post("/users/logout", {}, { headers });
  return response;
});
