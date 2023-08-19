export default function Card({ title, date, id, setSelectedId }) {
  return (
    <div
      className="h-20 w-full mb-3 flex justify-around items-center"
      onClick={() => {
        setSelectedId(id);
      }}
    >
      <div className="h-full w-3/4 rounded-2xl border-0 flex justify-start items-center">
        <div className="h-5/6 w-1/4 flex justify-center items-center mx-3 border-0 rounded-full">사진</div>
        <div className="h-1/6 flex flex-col justify-center items-center">
          <div>{title}</div>
          <div>Date: {date}</div>
        </div>
      </div>
      <div className="text-5xl">&gt;</div>
    </div>
  );
}
