import { useEffect, useState } from "react";
import Info from "./Info";
import Card from "./Card";

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
      <div className="h-full w-11/12 mb-3 overflow-scroll grid place-items-center scrollbar-hide round-2xl bg-extrabright rounded-2xl shadow-xl">
        {details.map((detail, idx) => {
          return <Card key={idx} id={detail.detailId} title={detail.name} date={detail.date} setSelectedId={setSelectedId} />;
        })}
      </div>
    );
}

export default Detail;
