import { useMutation, useQuery } from "react-query";
import { ajax } from "./API";

const getPatients = ({ accessToken }) => {
  const options = {
    method: "GET",
    url: "/patient",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
  return useQuery("patients", () => ajax(options));
};

const getPatient = ({ id, accessToken }) => {
  const options = {
    method: "GET",
    url: `/patient/${id}`,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
  return useQuery(["patient", id], () => ajax(options));
};

const createPatient = ({ accessToken }) => {
  return useMutation(
    ({ name, birthDate, gender, height, weight, caution, guradianId }) =>
      ajax({
        method: "POST",
        url: "/patient",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        data: {
          name,
          birthDate,
          gender,
          height,
          weight,
          caution,
          guradianId,
        },
      })
  );
};

const updatePatient = ({ accessToken }) => {
  return useMutation(
    ({ id, name, birthDate, gender, height, weight, caution, guradianId }) =>
      ajax({
        method: "PUT",
        url: `/patient/${id}`,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        data: {
          name,
          birthDate,
          gender,
          height,
          weight,
          caution,
          guradianId,
        },
      })
  );
};

const patientAPI = {
  getPatients,
  getPatient,
  createPatient,
  updatePatient,
};

export default patientAPI;
