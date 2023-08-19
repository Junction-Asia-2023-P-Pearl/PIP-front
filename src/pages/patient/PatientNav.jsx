export default function PatientNav({ setPage }) {
  return (
    <div className="h-1/6 w-full flex justify-start items-center">
      <div
        className="h-1/3 w-1/3 mx-3 rounded-md flex justify-center items-center border border-black"
        onClick={() => {
          setPage("");
        }}>
        Information
      </div>
      <div
        className="h-1/3 w-1/3 mx-3 rounded-md flex justify-center items-center border border-black"
        onClick={() => {
          setPage("detail");
        }}>
        Details
      </div>
      <div
        className="h-1/3 w-1/3 mx-3 rounded-md flex justify-center items-center border border-black"
        onClick={() => {
          setPage("diag");
        }}>
        Diagnosis
      </div>
    </div>
  );
}
