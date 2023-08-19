import { API } from "../../api/API";

export default function Info({ id }) {
  const { data: diagInfo } = API.getMedicine(id);

  return (
    <div className="h-full w-11/12 mb-6 border-0 bg-extrabright rounded-2xl shadow-xl">
      <div className="h-1/2 w-full flex flex-col justify-center items-center">
        <div className="h-3/4 w-1/2 border border-black">사진</div>
        <div className="h-1/4 w-full text-center text-2xl">{id}</div>
      </div>
      <div className="h-1/2 w-full">
        <div className="ml-10 mb-3">amount: 500mg</div>
        <div className="p-3">
          efficacy It is used for degenerative joint diseases such as arthritis
          or ankylosing spondylitis because it has anti-inflammatory effects.
        </div>
      </div>
    </div>
  );
}
