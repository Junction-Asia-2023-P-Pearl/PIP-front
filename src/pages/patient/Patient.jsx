import { useParams } from "react-router-dom";
import HomeHeader from "../home/HomeHeader";
import { useEffect, useState } from "react";
import PatientNav from "./PatientNav";

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
        <div className="h-5/6 w-full flex flex-col justify-start items-center">{children}</div>
      </div>
    </div>
  );
}

function Information() {
  const { patientId } = useParams();
  const [patientInfo, setPatientInfo] = useState({});
  useEffect(() => {
    setPatientInfo({
      profileImgSrc: "src/assets/react.svg",
      patientId: "1",
      name: "TaeYoon Kim",
      birth: "2001-06-26",
    });
  }, [patientId]);

  return (
    <div className="rounded-2xl h-full w-11/12 mb-3 flex flex-col justify-between items-center border border-black">
      <div className="bg-extrabright h-1/2 w-11/12 flex flex-col justify-around items-start">
        <div>Name: {patientInfo.name}</div>
        <div>Birth: {patientInfo.birth}</div>
        <div>Height: 187.4cm</div>
        <div>Weight: 78kg</div>
      </div>
      <div className="rounded-2xl h-1/2 w-11/12 mb-3 border border-black">
        <div className="bg-white">
          Treatment History
          <div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Detail() {
  return <div>Detail</div>;
}

function Diag() {
  return <div>Diag</div>;
}
