import {
  FaAd,
  FaBook,
  FaCalendar,
  FaHome,
  FaList,
  FaOldRepublic,
  FaStar,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { FaMarsAndVenus } from "react-icons/fa6";
import { PiShoppingCartDuotone } from "react-icons/pi";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();
  const [isAdmin] = useAdmin();

  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="p-10">
          {isAdmin ? (
            <>
              <li className="mb-5">
                <NavLink to="/dashboard/adminHome">
                  <span className="flex items-center gap-3">
                    <FaHome />
                    Admin Home
                  </span>
                </NavLink>
              </li>
              <li className="mb-5">
                <NavLink to="/dashboard/addItems">
                  <span className="flex items-center gap-3">
                    <FaUtensils />
                    Add Items
                  </span>
                </NavLink>
              </li>
              <li className="mb-5">
                <NavLink to="/dashboard/manageItems">
                  <span className="flex items-center gap-3">
                    <FaList />
                    Manage Items
                  </span>
                </NavLink>
              </li>
              <li className="mb-5">
                <NavLink to="/dashboard/manageBooking">
                  <span className="flex items-center gap-3">
                    <FaBook />
                    Manage Bookings
                  </span>
                </NavLink>
              </li>
              <li className="mb-5">
                <NavLink to="/dashboard/users">
                  <span className="flex items-center gap-3">
                    <FaUsers />
                    All Users
                  </span>
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="mb-5">
                <NavLink to="/dashboard/userHome">
                  <span className="flex items-center gap-3">
                    <FaHome />
                    User Home
                  </span>
                </NavLink>
              </li>
              <li className="mb-5">
                <NavLink to="/dashboard/paymentHistory">
                  <span className="flex items-center gap-3">
                    <FaCalendar />
                    Payment History
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
            </>
          )}
          <div className="divider"></div>
          {/* Common nav links */}
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
