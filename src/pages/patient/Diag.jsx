import { useEffect, useState } from "react";
import Info from "./Info";
import Card from "./Card";

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
  }, []);

  if (selectedId !== undefined) return <Info id={selectedId} />;
  else
    return (
      <div className="bg-white h-full w-11/12 mb-3 overflow-scroll grid place-items-center scrollbar-hide rounded-2xl shadow-normal">
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

export default Diag;
