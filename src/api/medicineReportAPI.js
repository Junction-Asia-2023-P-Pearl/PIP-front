import { ajax } from "./API";
import { useMutation, useQuery } from "react-query";

const createMedicineReport = ({ accessToken }) => {
  return useMutation(({ patientId, medicineId, amount }) =>
    ajax({
      method: "POST",
      url: "/medicine-report",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: {
        patientId,
        medicineId,
        amount,
      },
    })
  );
};

const getMedicineReport = ({ accessToken, id }) => {
  const options = {
    method: "GET",
    url: `/medicine-report/${id}`,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
  return useQuery(["medicine-report", id], () => ajax(options));
};

const getMedicineReportsByPatientId = ({ accessToken, patientId }) => {
  const options = {
    method: "GET",
    url: `/medicine-report/patient/${patientId}`,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
  return useQuery(["medicine-reports", patientId], () => ajax(options));
};

const medicineReportAPI = {
  createMedicineReport,
  getMedicineReport,
  getMedicineReportsByPatientId,
};

export default medicineReportAPI;
