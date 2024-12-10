import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <h2>404!! Error Page</h2>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
