import AdminLoginForm from "./AdminLoginForm";
import Profile from "../../assets/ProfileImage.jpg";

export default function AdminLogin() {
  return (
    <div className="h-screen w-screen">
      <div className="h-full w-full grid grid-rows-2">
        <div className="h-full w-full flex flex-col">
          <div className="h-1/5"></div>
          <div className="font-['pacifico'] h-1/4 flex justify-center items-center text-4xl">
            PIP
          </div>
          <div className="h-3/4 flex flex-col justify-around items-center">
            <div className="text-center">
              <div className="text-l font-['caveat']">Admin</div>
              <div className="text-l font-['caveat']">Enter Password</div>
            </div>
            <div className="h-1/2 w-1/2 flex justify-center items-center">
              <img
                src={Profile}
                className="rounded-full shadow-xl h-full w-full"
              />
            </div>
          </div>
        </div>
        <AdminLoginForm />
      </div>
    </div>
  );
}
