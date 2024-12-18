import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/signUp/signUp";
import ProtectRoute from "./ProtectRoute";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";

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
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/order/:category",
        element: <Order />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <ProtectRoute>
        <Dashboard />
      </ProtectRoute>
    ),
    children: [
      // Admin Routes
      {
        path: "/dashboard/adminHome",
        element: (
          <AdminRoute>
            <h3 className="text-center text-orange-500 text-3xl font-medium">
              Welcome to Admin Dashboard Dashboard
            </h3>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/addItems",
        element: (
          <AdminRoute>
            <AddItems />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/users",
        element: <AllUsers />,
      },
      // User Routes
      {
        path: "/dashboard/userHome",
        element: (
          <h3 className="text-center text-orange-500 text-3xl font-medium">
            Welcome to Your Dashboard
          </h3>
        ),
      },
      {
        path: "/dashboard/cart",
        element: <Cart />,
      },
    ],
  },
]);
