import { useParams } from "react-router";
import Card from "./Card";
import { useSelector } from "react-redux";
import API from "../../api/API";
import Avator from "../../assets/avator.png";

function Diag() {
  const { patientId } = useParams();
  const { accessToken } = useSelector((state) => state.userAuth);

  const { data: diagList } = API.getDiagnosiesByPatientId({
    accessToken,
    patientId,
  });

  return (
    <div className="bg-white h-full w-11/12 mb-3 overflow-scroll grid place-items-center scrollbar-hide rounded-2xl shadow-normal">
      {diagList?.data?.map((diag) => {
        return (
          <Card
            key={diag._id}
            image={Avator}
            link={`/patient/${patientId}/diag/${diag._id}`}
            title={diag.title}
            date={diag.createdAt}
          />
        );
      })}
    </div>
  );
}

export default Diag;
