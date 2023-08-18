import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>main page</h1>
        <Link to={"/about"}>About</Link>
      </div>
    ),
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
