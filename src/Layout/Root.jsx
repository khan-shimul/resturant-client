import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Root = () => {
  const location = useLocation();
  const shouldHidePath = ["/login", "/signup"];
  const shouldHide = shouldHidePath.includes(location.pathname);
  return (
    <div>
      {!shouldHide && <Navbar />}
      <Outlet />
      {shouldHide || <Footer />}
    </div>
  );
};

export default Root;
