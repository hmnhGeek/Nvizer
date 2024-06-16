import axios from "axios";
import { conf } from "../conf/conf";

const authApi = axios.create({
  baseURL: conf.authApiBase,
});

export default authApi;
