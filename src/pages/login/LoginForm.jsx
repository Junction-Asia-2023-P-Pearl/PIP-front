import { useState } from "react";
import API from "../../api/API";
import { useDispatch } from "react-redux";
import { loginUser } from "../../store/userAuthSlice";
import { useLocation, useNavigate } from "react-router";

export default function LoginForm() {
  const [info, setInfo] = useState({
    loginId: "",
    password: "",
  });

  const { mutateAsync: login } = API.login();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const nextLink = location.state?.nextLink;

  const onSubmit = () => {
    if (info.loginId === "" || info.password === "") {
      alert("Please fill out all fields");
      return;
    } else {
      console.log(info);
      login(info).then((res) => {
        console.log(res);
        if (res.success) {
          dispatch(
            loginUser({
              accessToken: res.accessToken,
            })
          );
          navigate(nextLink ? nextLink : "/", { replace: true });
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
          value={info.loginId}
          onChange={(e) =>
            setInfo((prev) => ({ ...prev, loginId: e.target.value }))
          }
          className="bg-lightGray mb-3 h-1/3 w-4/5 border-0 rounded-2xl text-xl pl-6 shadow-xl"
          placeholder="ID"
        />
        <input
          value={info.password}
          onChange={(e) =>
            setInfo((prev) => ({ ...prev, password: e.target.value }))
          }
          type="password"
          className="bg-lightGray h-1/3 w-4/5 border-0 rounded-2xl text-xl pl-6 shadow-xl"
          placeholder="Password"
        />
      </div>
      <div className="h-1/2 w-full flex flex-col justify-start items-center">
        <div className="h-1/5 text-xs">
          Not signed up yet? Click here to register!
        </div>
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
