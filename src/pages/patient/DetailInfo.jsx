import { useSelector } from "react-redux";
import { useParams } from "react-router";
import API from "../../api/API";
import Aspirin from "../../assets/aspirin.jpeg";
import Tylenol from "../../assets/tylenol.jpeg";

const DetailInfo = () => {
  const { accessToken } = useSelector((state) => state.userAuth);
  const { detailId } = useParams();

  const { data: detailInfo } = API.getMedicineReport({
    accessToken,
    id: detailId,
  });
  return (
    <div className="h-full w-11/12 mb-6 border-0 bg-extrabright rounded-2xl shadow-normal">
      <div className="h-1/2 w-full flex flex-col justify-center items-center">
        <img
          className="h-3/4 w-1/2 border border-black"
          src={
            detailInfo?.data?.medicine?.name === "Aspirin" ? Aspirin : Tylenol
          }
        />
        <div className="h-1/4 w-full text-center text-2xl">
          {detailInfo?.data?.medicine?.name}
        </div>
      </div>
      <div className="h-1/2 w-full">
        <div className="ml-10 mb-3">amount: {detailInfo?.data?.amount}mg</div>
        <div className="p-3">{detailInfo?.data?.medicine?.detail}</div>
      </div>
    </div>
  );
};

export default DetailInfo;
