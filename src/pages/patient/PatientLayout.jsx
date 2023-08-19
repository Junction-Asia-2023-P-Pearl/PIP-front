import { Outlet } from "react-router-dom";
import HomeHeader from "../home/HomeHeader";
import PatientNav from "./PatientNav";
import LoginCheck from "../../components/LoginCheck";

function PatientLayout() {
  return (
    <LoginCheck>
      <div className="h-screen w-screen">
        <HomeHeader />
        <div className="h-4/5 w-full border-0">
          <PatientNav />
          <div className="h-5/6 w-full flex flex-col justify-start items-center">
            <Outlet />
          </div>
        </div>
      </div>
    </LoginCheck>
  );
}

export default PatientLayout;
