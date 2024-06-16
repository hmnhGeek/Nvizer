import store from "./store";
import { Provider } from "react-redux";
import React from "react";

export const ReduxProvider = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);
