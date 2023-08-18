import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/login/Login";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>main page</h1>
        <Link to={"/about"}>About</Link>
        <Link to={"/login"}>Login</Link>
      </div>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/about",
    element: <div>About</div>,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
