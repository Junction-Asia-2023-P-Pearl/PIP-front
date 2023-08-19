import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Patient() {
  const { patientId } = useParams();
  const [patientInfo, setPatientInfo] = useState({});
  const [records, setRecords] = useState([]);

  useEffect(() => {
    setPatientInfo({
      profileImgSrc: "src/assets/react.svg",
      patientId: "1",
      name: "TaeYoon Kim",
      birth: "2001-06-26",
    });

    setRecords([
      {
        date: "2023-08-16",
        content: "cyst removal surgery",
      },
      {
        date: "2023-08-17",
        content: "hospitalization",
      },
      {
        date: "2023-08-18",
        content: "postoperative care",
      },
      {
        date: "2023-08-18",
        content: "postoperative care",
      },
      {
        date: "2023-08-18",
        content: "postoperative care",
      },
    ]);
  }, [patientId]);

  return (
    <div className="h-full w-11/12 mb-3 flex flex-col justify-between items-center border border-black">
      <div className="h-1/2 w-11/12 flex flex-col justify-around items-start">
        <div>Name: {patientInfo.name}</div>
        <div>Birth: {patientInfo.birth}</div>
        <div>Height: 187.4cm</div>
        <div>Weight: 78kg</div>
      </div>
      <div className="h-1/2 w-11/12 mb-3 flex flex-col space-around items-center border border-black">
        <div className="h-1/3 w-full flex justify-center items-center text-center">
          Treatment History
        </div>
        <div className="h-2/3 w-full grid place-items-center overflow-y-scroll scrollbar-hide">
          {records?.map((record, idx) => {
            return (
              <div
                key={idx}
                className="h-12 w-11/12 flex flex-start items-center pl-3 my-1 rounded-xl border border-black"
              >
                {record.date} | {record.content}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Patient;
