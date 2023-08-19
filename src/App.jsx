import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Patient from "./pages/patient/Patient";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/patient/:patientId",
    element: <Patient />,
  },
  {
    path: "/about",
    element: <div>About</div>,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
