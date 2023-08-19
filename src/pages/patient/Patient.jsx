import { useParams } from "react-router-dom";
import HomeHeader from "../home/HomeHeader";
import { useEffect, useState } from "react";
import PatientNav from "./PatientNav";
import Card from "./Card";
import Info from "./Info";

export default function Patient() {
  const [page, setPage] = useState("");

  if (page === "detail")
    return (
      <PatientLayout setPage={setPage}>
        <Detail />
      </PatientLayout>
    );
  if (page === "diag")
    return (
      <PatientLayout setPage={setPage}>
        <Diag />
      </PatientLayout>
    );
  return (
    <PatientLayout setPage={setPage}>
      <Information />
    </PatientLayout>
  );
}

function PatientLayout({ children, setPage }) {
  return (
    <div className="h-screen w-screen">
      <HomeHeader />
      <div className="h-4/5 w-full border border-black">
        <PatientNav setPage={setPage} />
        <div className="h-5/6 w-full flex flex-col justify-start items-center">
          {children}
        </div>
      </div>
    </div>
  );
}

function Information() {
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
                className="h-12 w-11/12 flex flex-start items-center pl-3 my-1 rounded-xl border border-black">
                {record.date} | {record.content}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function Detail() {
  const [details, setDetails] = useState([]);
  const [selectedId, setSelectedId] = useState();
  useEffect(() => {
    setDetails([
      {
        detailId: 1,
        name: "Pill 1",
        date: "2023-08-17",
      },
      {
        detailId: 2,
        name: "Injection 1",
        date: "2023-08-17",
      },
      {
        detailId: 3,
        name: "Pill 2",
        date: "2023-08-17",
      },
      {
        detailId: 3,
        name: "Pill 2",
        date: "2023-08-17",
      },
      {
        detailId: 3,
        name: "Pill 2",
        date: "2023-08-17",
      },
      {
        detailId: 3,
        name: "Pill 2",
        date: "2023-08-17",
      },
      {
        detailId: 3,
        name: "Pill 2",
        date: "2023-08-17",
      },
    ]);
  }, [details]);

  if (selectedId !== undefined) return <Info id={selectedId} />;
  else
    return (
      <div className="h-full w-11/12 mb-3 overflow-scroll grid place-items-center scrollbar-hide">
        {details.map((detail, idx) => {
          return (
            <Card
              key={idx}
              id={detail.detailId}
              title={detail.name}
              date={detail.date}
              setSelectedId={setSelectedId}
            />
          );
        })}
      </div>
    );
}

function Diag() {
  const [diags, setDiags] = useState([]);
  const [selectedId, setSelectedId] = useState();

  useEffect(() => {
    setDiags([
      {
        diagsId: 1,
        name: "Diagnosis 1",
        date: "2023-08-17",
      },
      {
        diagsId: 2,
        name: "Diagnosis 2",
        date: "2023-08-17",
      },
      {
        diagsId: 3,
        name: "Diagnosis 3",
        date: "2023-08-17",
      },
      {
        diagsId: 3,
        name: "Diagnosis 3",
        date: "2023-08-17",
      },
      {
        diagsId: 3,
        name: "Diagnosis 3",
        date: "2023-08-17",
      },
      {
        diagsId: 3,
        name: "Diagnosis 3",
        date: "2023-08-17",
      },
      {
        diagsId: 3,
        name: "Diagnosis 3",
        date: "2023-08-17",
      },
    ]);
  }, [diags]);

  if (selectedId !== undefined) return <Info id={selectedId} />;
  else
    return (
      <div className="h-full w-11/12 mb-3 overflow-scroll grid place-items-center scrollbar-hide">
        {diags.map((detail, idx) => {
          return (
            <Card
              key={idx}
              id={detail.diagsId}
              title={detail.name}
              date={detail.date}
              setSelectedId={setSelectedId}
            />
          );
        })}
      </div>
    );
}
