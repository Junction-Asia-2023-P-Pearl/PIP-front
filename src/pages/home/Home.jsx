import { Link } from "react-router-dom";
import HomeHeader from "./HomeHeader";
import LoginCheck from "../../components/LoginCheck";
import { useSelector } from "react-redux";
import API from "../../api/API";

const formatDate = (date) => {
  const dateObj = new Date(date);
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();
  return `${year}-${month}-${day}`;
};

export default function Home() {
  const { accessToken } = useSelector((state) => state.userAuth);

  const { data: patientList } = API.getPatients({ accessToken });

  return (
    <LoginCheck>
      <div className="h-screen w-screen">
        <HomeHeader />
        <div className="h-4/5 w-full ">
          <div className="h-1/6 w-full flex justify-start items-center">
            <div className="bg-dark h-1/3 w-1/3 ml-5 rounded-2xl flex justify-center items-center text-white shadow-xl">
              Patient List
            </div>
          </div>
          <div className="h-5/6 w-full flex flex-col justify-start items-center">
            {patientList?.data?.map((patient, idx) => {
              return (
                <Link
                  to={`/patient/${patient._id}/info`}
                  key={idx}
                  className="h-1/5 w-11/12 flex justify-start items-center mb-3 rounded-xl border-0"
                >
                  <img src={null} className="h-full w-1/5 mx-3" />
                  <div className="bg-lightGray h-full w-4/5 flex flex-col justify-center items-start rounded-2xl shadow-xl">
                    <div>Name: {patient.name}</div>
                    <div>
                      Birth:{" "}
                      {patient.birthDate && formatDate(patient.birthDate)}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </LoginCheck>
  );
}
