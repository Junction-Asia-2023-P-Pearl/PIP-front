import { useSelector } from "react-redux";
import { useParams } from "react-router";
import API from "../../api/API";

const DiagInfo = () => {
  const { accessToken } = useSelector((state) => state.userAuth);
  const { diagId } = useParams();

  const { data: diagInfo } = API.getDiagnosis({
    accessToken,
    id: diagId,
  });
  return (
    <div className="h-full w-11/12 mb-6 border-0 bg-extrabright rounded-2xl shadow-normal">
      <div className="h-1/4 w-full flex flex-col justify-center items-center">
        <div className="w-full text-center ">
          <p className="text-2xl">{diagInfo?.data?.title}</p>
          <p>Dr. {diagInfo?.data?.doctorName}</p>
        </div>
      </div>
      <div className="h-3/4 w-full">
        <div className="p-3">{diagInfo?.data?.contents}</div>
      </div>
    </div>
  );
};

export default DiagInfo;
