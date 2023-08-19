import { Link, useParams } from "react-router-dom";

export default function PatientNav({ setPage }) {
  const { patientId } = useParams();

  return (
    <div className="h-1/6 w-full flex justify-start items-center">
      <Link
        to={`/patient/${patientId}`}
        className="h-1/3 w-1/3 mx-3 rounded-md flex justify-center items-center border border-black"
        onClick={() => {
          setPage("");
        }}
      >
        Information
      </Link>
      <Link
        to={`/patient/${patientId}/detail`}
        className="h-1/3 w-1/3 mx-3 rounded-md flex justify-center items-center border border-black"
        onClick={() => {
          setPage("detail");
        }}
      >
        Details
      </Link>
      <Link
        to={`/patient/${patientId}/diag`}
        className="h-1/3 w-1/3 mx-3 rounded-md flex justify-center items-center border border-black"
        onClick={() => {
          setPage("diag");
        }}
      >
        Diagnosis
      </Link>
    </div>
  );
}
