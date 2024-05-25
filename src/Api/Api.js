import axios from "axios";
import { conf } from "../conf/conf";

const Api = (url, method = "get", data = null, forceUrl = false) => {
  return axios({
    method,
    url: forceUrl ? url : conf.apiBaseUrl + url,
    data,
  });
};

export default Api;
