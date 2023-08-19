import { ajax } from "./api";
import { useMutation } from "react-query";

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

const medicineReportAPI = {
  createMedicineReport,
};

export default medicineReportAPI;
