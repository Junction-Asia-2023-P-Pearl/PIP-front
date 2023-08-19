import Card from "./Card";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import Aspirin from "../../assets/aspirin.jpeg";
import Tylenol from "../../assets/tylenol.jpeg";
import API from "../../api/API";

function Detail() {
  const { accessToken } = useSelector((state) => state.userAuth);
  const { patientId } = useParams();

  const { data: detailList } = API.getMedicineReportsByPatientId({
    accessToken,
    patientId,
  });

  return (
    <div className="h-full w-11/12 round-2xl py-2 mb-3 bg-white rounded-2xl shadow-normal">
      <div className="max-h-full w-full overflow-scroll grid place-items-center scrollbar-hide">
        {detailList?.data?.map((detail) => {
          return (
            <Card
              key={detail._id}
              link={`/patient/${patientId}/detail/${detail._id}`}
              image={detail?.medicine?.name === "Aspirin" ? Aspirin : Tylenol}
              title={detail?.medicine?.name}
              date={detail?.createdAt}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Detail;
