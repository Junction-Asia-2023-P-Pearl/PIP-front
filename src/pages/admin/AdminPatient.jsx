import Select from "react-select";
import AdminCheck from "../../components/AdminCheck";
import API from "../../api/API";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useState } from "react";

const formatDate = (date) => {
  const dateObj = new Date(date);
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();
  return `${year}-${month}-${day}`;
};

export default function AdminPatient() {
  const { patientId } = useParams();
  const { accessToken } = useSelector((state) => state.adminAuth);
  const { data: patientInfo } = API.getPatient({ accessToken, id: patientId });
  const { data: medicineList } = API.getMedicines({ accessToken });
  const { mutateAsync: createReport } = API.createMedicineReport({
    accessToken,
  });
  const [info, setInfo] = useState({
    medicine: null,
    amount: 0,
  });

  const options = medicineList?.data?.map((medicine) => {
    return { value: medicine._id, label: medicine.name };
  });

  const onSubmit = () => {
    if (info.medicine === null || info.amount <= 0) {
      alert("Please fill in all fields");
      return;
    } else {
      createReport({
        patientId,
        medicineId: info.medicine.value,
        amount: info.amount,
      }).then((res) => {
        if (res.success) {
          alert("Report created");
          window.location.reload();
        } else {
          alert("Failed to create report");
        }
      });
    }
  };

  return (
    <AdminCheck>
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="h-5/6 w-full grid grid-rows-6">
          <div className="flex justify-center items-center">
            <div className="h-2/3 w-3/4 flex justify-center items-center text-2xl font-semibold bg-grey rounded-3xl">
              Patient Information
            </div>
          </div>
          <div className="h-2/3 w-full flex justify-between items-center">
            <div className="h-full w-1/2 px-3 flex flex-col justify-center items-start">
              <label
                htmlFor="name"
                className="h-1/4 w-3/5 font-semibold flex justify-center items-center text-sm bg-grey rounded-2xl"
              >
                Name
              </label>
              <input
                name="name"
                className="h-3/4 w-full pl-3 border-4 border-grey rounded-xl"
                type="text"
                value={patientInfo?.data?.name}
                disabled
              />
            </div>
            <div className="h-full w-1/2 px-3 flex flex-col justify-center items-start">
              <label
                htmlFor="birth"
                className="h-1/4 w-3/5 font-semibold flex justify-center items-center text-sm bg-grey rounded-2xl"
              >
                Birth
              </label>
              <input
                name="birth"
                className="h-3/4 w-full pl-3 border-4 border-grey rounded-xl"
                type="text"
                value={
                  patientInfo?.data?.birthDate &&
                  formatDate(patientInfo.data.birthDate)
                }
                disabled
              />
            </div>
          </div>
          <div className="h-2/3 w-full flex justify-center items-center">
            <div className="h-full w-11/12">
              <label
                htmlFor="disease"
                className="h-1/4 w-2/5 font-semibold flex justify-center items-center text-sm bg-grey rounded-2xl"
              >
                Disease
              </label>
              <input
                name="disease"
                className="h-3/4 w-full pl-3 border-4 border-grey rounded-xl"
                type="text"
                value={"Diabetes"}
                disabled
              />
            </div>
          </div>
          <div className="h-2/3 w-full flex justify-center items-center">
            <div className="h-full w-11/12">
              <label
                htmlFor="Pill"
                className="h-1/4 w-2/5 font-semibold flex justify-center items-center text-sm bg-grey rounded-2xl"
              >
                Pill
              </label>
              <Select
                value={info.medicine}
                onChange={(e) => setInfo((prev) => ({ ...prev, medicine: e }))}
                options={options}
                styles={{
                  control: (provided) => ({
                    ...provided,
                    height: "75%",
                    width: "100%",
                    paddingLeft: "0.75rem",
                    borderWidth: "4px",
                    borderColor: "rgba(217, 217, 217, 1)",
                    borderRadius: "0.75rem",
                  }),
                }}
              />
            </div>
          </div>
          <div className="h-2/3 w-full flex justify-center items-center">
            <div className="h-full w-11/12">
              <label
                htmlFor="amount"
                className="h-1/4 w-2/5 font-semibold flex justify-center items-center text-sm bg-grey rounded-2xl"
              >
                Amount (mg)
              </label>
              <input
                value={info.amount}
                onChange={(e) =>
                  setInfo((prev) => ({ ...prev, amount: e.target.value }))
                }
                name="amount"
                className="h-3/4 w-full pl-3 border-4 border-grey rounded-xl"
                type="number"
              />
            </div>
          </div>
          <div className="h-2/3 w-full flex justify-center items-center">
            <button
              onClick={onSubmit}
              className="h-1/2 w-1/4 flex justify-center items-center bg-grey rounded-xl font-semibold"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </AdminCheck>
  );
}
