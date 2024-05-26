import axios from "axios";
import { conf } from "../conf/conf";

const Api = (
  url,
  method = "get",
  data = null,
  forceUrl = false,
  proxyEnabled = false
) => {
  if (!forceUrl && !proxyEnabled) {
    url = conf.apiBaseUrl + url;
  } else if (!forceUrl && proxyEnabled) {
    url = `${conf.proxyUrl}/${conf.apiBaseUrl}${url}`;
  } else if (forceUrl && !proxyEnabled) {
    // nothing needs to be done here.
  } else {
    url = `${conf.proxyUrl}/${url}`;
  }

  return axios({
    method,
    url,
    data,
  });
};

export default Api;
