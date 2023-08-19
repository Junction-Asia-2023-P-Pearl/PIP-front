export default function PatientNav({ setPage }) {
  return (
    <div className="h-1/6 w-full flex justify-start items-center">
      <div
        className="bg-extrabright h-1/2 w-1/3 mx-3 rounded-2xl flex justify-center items-center border-0"
        onClick={() => {
          setPage("");
        }}
      >
        Information
      </div>
      <div
        className="bg-extrabright h-1/2 w-1/3 mx-3 rounded-2xl flex justify-center items-center border-0"
        onClick={() => {
          setPage("detail");
        }}
      >
        Details
      </div>
      <div
        className="bg-extrabright h-1/2 w-1/3 mx-3 rounded-2xl flex justify-center items-center border-0"
        onClick={() => {
          setPage("diag");
        }}
      >
        Diagnosis
      </div>
    </div>
  );
}
