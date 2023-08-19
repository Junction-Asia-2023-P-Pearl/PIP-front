import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const AdminCheck = ({ children }) => {
  const adminAuth = useSelector((state) => state.adminAuth);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!adminAuth.isLogin) {
      navigate("/admin", {
        replace: true,
        state: { nextLink: location.pathname },
      });
    }
  });

  if (adminAuth.isLogin) {
    return children;
  } else {
    return null;
  }
};

export default AdminCheck;
