import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../layout/navbar";
import Footer from "../layout/footer";
import { Activity, Shapes, Unplug } from "lucide-react";

export default function Root() {
  return (
    <>
      <Navbar />
      <main className="container">
        <div className="flex flex-wrap">
          <nav
            role="navigation links"
            className="w-[20%] h-fit p-2 flex flex-col divide-y-2"
          >
            <NavLink
              to={"/idp"}
              className={({ isActive }) =>
                `py-2 space-x-2 flex items-center ${
                  isActive ? "text-blue-500" : ""
                }`
              }
            >
              <Unplug className="h-4 w-4" /> <span>IDP</span>
            </NavLink>

            <NavLink
              to={"/classify"}
              className={({ isActive }) =>
                `py-2 space-x-2 flex items-center ${
                  isActive ? "text-blue-500" : ""
                }`
              }
            >
              <Shapes className="h-4 w-4" /> <span>Classify</span>
            </NavLink>

            <NavLink
              to={"/activity"}
              className={({ isActive }) =>
                `py-2 space-x-2 flex items-center ${
                  isActive ? "text-blue-500" : ""
                }`
              }
            >
              <Activity className="h-4 w-4" /> <span>Activity</span>
            </NavLink>
          </nav>

          <div className="py-2 px-4 min-h-[90vh] border-l-2">
            <Outlet />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
