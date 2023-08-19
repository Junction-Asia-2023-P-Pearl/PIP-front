import { Link, useParams } from "react-router-dom";

export default function PatientNav({ setPage }) {
  const { patientId } = useParams();

  return (
    <div className="h-1/6 w-full flex justify-start items-center">
      <Link
        to={`/patient/${patientId}`}
        className="bg-extrabright h-1/2 w-1/3 mx-3 rounded-2xl flex justify-center items-center border-0"
        onClick={() => {
          setPage("");
        }}
      >
        Information
      </Link>
      <Link
        to={`/patient/${patientId}/detail`}
        className="bg-extrabright h-1/2 w-1/3 mx-3 rounded-2xl flex justify-center items-center border-0"
        onClick={() => {
          setPage("detail");
        }}
      >
        Details
      </Link>
      <Link
        to={`/patient/${patientId}/diag`}
        className="bg-extrabright h-1/2 w-1/3 mx-3 rounded-2xl flex justify-center items-center border-0"
        onClick={() => {
          setPage("diag");
        }}
      >
        Diagnosis
      </Link>
    </div>
  );
}
