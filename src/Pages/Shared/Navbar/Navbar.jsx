import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { PiShoppingCartDuotone } from "react-icons/pi";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [cart] = useCart();
  const handleLogout = () => {
    logoutUser().then(() => {
      console.log("Logged Out");
    });
  };
  const navMenu = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/order/salad">Order</Link>
      </li>
      {/* nested Ternary operator */}
      {/* firstCondition ? secondCondition ? 'double true' : 'one condition is true' : 'both condition are false */}
      {/* {user ? (
        isAdmin ? (
          <li>
            <Link to="/dashboard/adminHome">Admin Home</Link>
          </li>
        ) : (
          <li>
            <Link to="/dashboard/userHome">User Home</Link>
          </li>
        )
      ) : (
        "false"
      )} */}
      {user && isAdmin && (
        <li>
          <Link to="/dashboard/adminHome">Admin Home</Link>
        </li>
      )}
      {user && !isAdmin && (
        <li>
          <Link to="/dashboard/userHome">User Home</Link>
        </li>
      )}
      <li>
        <Link to="/dashboard">
          <button className="btn">
            <PiShoppingCartDuotone />
            <div className="badge badge-secondary">+{cart.length}</div>
          </button>
        </Link>
      </li>
      {/* {user && <p>User: {user.displayName}</p>} */}
      {/* {user && (
        <img style={{ height: "50px", width: "50px" }} src={user.photoURL} />
      )} */}
    </>
  );
  return (
    <>
      <div className="navbar fixed z-10 bg-black/30 text-white max-w-screen-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navMenu}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Bistro Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navMenu}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <button onClick={handleLogout} className="btn">
              Logout
            </button>
          ) : (
            <Link to="/login" className="btn">
              Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
