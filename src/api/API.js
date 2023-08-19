import axios from "axios";
import { useMutation } from "react-query";
import guardianAPI from "./guardianAPI";
import medicineAPI from "./medicineAPI";
import patientAPI from "./patientAPI";
import medicineReportAPI from "./medicineReportAPI";
import diagnosisAPI from "./diagnosisAPI";

axios.defaults.baseURL = "http://do-home.duckdns.org:3001/api";

export const ajax = async (options) => {
  if (options?.headers?.Authorization === "Bearer ")
    return { success: false, data: "Token is required" };
  let result;
  await axios(options)
    .then((response) => {
      result = { success: true, data: response?.data };
    })
    .catch((error) => {
      result = { success: false, data: error };
    });
  return result;
};

const login = () => {
  return useMutation(({ loginId, password }) =>
    ajax({
      method: "POST",
      url: "/auth/login",
      data: {
        id: loginId,
        password,
      },
    })
  );
};

const adminLogin = () => {
  return useMutation(({ password }) =>
    ajax({
      method: "POST",
      url: "/auth/login",
      data: {
        loginId: "admin",
        password,
      },
    })
  );
};

const API = {
  login,
  adminLogin,
  ...guardianAPI,
  ...medicineAPI,
  ...patientAPI,
  ...medicineReportAPI,
  ...diagnosisAPI,
};

export default API;
