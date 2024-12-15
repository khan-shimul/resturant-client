import {
  FaAd,
  FaCalendar,
  FaHome,
  FaOldRepublic,
  FaStar,
} from "react-icons/fa";
import { FaMarsAndVenus } from "react-icons/fa6";
import { PiShoppingCartDuotone } from "react-icons/pi";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart();
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="p-10">
          <li className="mb-5">
            <NavLink to="/dashboard">
              <span className="flex items-center gap-3">
                <FaHome />
                User Home
              </span>
            </NavLink>
          </li>
          <li className="mb-5">
            <NavLink to="/dashboard/reservation">
              <span className="flex items-center gap-3">
                <FaCalendar />
                Reservation
              </span>
            </NavLink>
          </li>
          <li className="mb-5">
            <NavLink to="/dashboard/cart">
              <span className="flex items-center gap-3">
                <PiShoppingCartDuotone />
                My Cart ({cart.length})
              </span>
            </NavLink>
          </li>
          <li className="mb-5">
            <NavLink to="/dashboard/cart">
              <span className="flex items-center gap-3">
                <FaAd />
                My Bookings
              </span>
            </NavLink>
          </li>
          <li className="mb-5">
            <NavLink to="/dashboard/cart">
              <span className="flex items-center gap-3">
                <FaStar />
                Add Reviews
              </span>
            </NavLink>
          </li>
          <div className="divider"></div>
          <li className="mb-5">
            <NavLink to="/">
              <span className="flex items-center gap-3">
                <FaHome />
                Home
              </span>
            </NavLink>
          </li>
          <li className="mb-5">
            <NavLink to="/menu">
              <span className="flex items-center gap-3">
                <FaMarsAndVenus />
                Menu
              </span>
            </NavLink>
          </li>
          <li className="mb-5">
            <NavLink to="/order/salad">
              <span className="flex items-center gap-3">
                <FaOldRepublic />
                Order
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-grow p-10">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
