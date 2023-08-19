import { useMutation, useQuery } from "react-query";
import { ajax } from "./API";

const getDiagnosis = ({ accessToken, id }) => {
  const options = {
    method: "GET",
    url: `/diagnosis/${id}`,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
  return useQuery(["diagnosis", id], () => ajax(options));
};

const getDiagnosiesByPatientId = ({ accessToken, patientId }) => {
  const options = {
    method: "GET",
    url: `/diagnosis/patient/${patientId}`,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
  return useQuery(["diagnosies", patientId], () => ajax(options));
};

const createDiagnosis = ({ accessToken }) => {
  return useMutation(({ patientId, doctorName, title, contents }) =>
    ajax({
      method: "POST",
      url: "/diagnosis",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: {
        patientId,
        doctorName,
        title,
        contents,
      },
    })
  );
};

const diagnosisAPI = {
  getDiagnosis,
  getDiagnosiesByPatientId,
  createDiagnosis,
};

export default diagnosisAPI;
