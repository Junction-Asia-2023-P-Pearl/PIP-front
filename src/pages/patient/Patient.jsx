import { useParams } from "react-router-dom";
import HomeHeader from "../home/HomeHeader";
import { useEffect, useState } from "react";
import PatientNav from "./PatientNav";

export default function Patient() {
  const [page, setPage] = useState("");

  if (page === "detail") return <div></div>;
  if (page === "diag") return <div></div>;
  return (
    <PatientLayout>
      <Information setPage={setPage} />
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
  useEffect(() => {
    setPatientInfo({
      profileImgSrc: "src/assets/react.svg",
      patientId: "1",
      name: "TaeYoon Kim",
      birth: "2001-06-26",
    });
  }, [patientId]);

  return (
    <div className="h-full w-11/12 mb-3 flex flex-col justify-between items-center border border-black">
      <div className="h-1/2 w-11/12 flex flex-col justify-around items-start">
        <div>Name: {patientInfo.name}</div>
        <div>Birth: {patientInfo.birth}</div>
        <div>Height: 187.4cm</div>
        <div>Weight: 78kg</div>
      </div>
      <div className="h-1/2 w-11/12 mb-3 border border-black">
        <div>Treatment History</div>
        <div>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
      </div>
    </div>
  );
}
