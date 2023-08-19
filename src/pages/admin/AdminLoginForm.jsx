import { useState } from "react";
import API from "../../api/API";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { loginAdmin } from "../../store/adminAuthSlice";

export default function AdminLoginForm() {
  const [pwd, setPwd] = useState("");

  const { mutateAsync: login } = API.adminLogin();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const nextLink = location.state?.nextLink;

  const onSubmit = () => {
    if (pwd === "") {
      alert("Please fill out all fields");
      return;
    } else {
      login({ password: pwd }).then((res) => {
        if (res.success) {
          dispatch(
            loginAdmin({
              accessToken: res.accessToken,
            })
          );
          navigate(nextLink ? nextLink : "/error", { replace: true });
        } else {
          alert("Login failed");
        }
      });
    }
  };

  return (
    <div className="h-full w-full flex flex-col justify-start items-center">
      <div className="h-1/2 w-full flex flex-col justify-center items-center">
        <input
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
          type="password"
          className="bg-lightGray h-1/3 w-4/5 border-0 rounded-2xl text-xl pl-6 shadow-xl"
          placeholder="Password"
        />
      </div>
      <div className="h-1/2 w-full flex flex-col justify-start items-center">
        <button
          className="bg-dark h-1/4 w-1/4 border-0 rounded-3xl shadow-xl text-white"
          onClick={onSubmit}
        >
          Login
        </button>
      </div>
    </div>
  );
}
