import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../layout/navbar";
import Footer from "../layout/footer";
import { Cable, FolderSearch } from "lucide-react";

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
              to={"/"}
              className={({ isActive }) =>
                `py-2 space-x-2 flex items-center ${
                  isActive ? "text-blue-500" : ""
                }`
              }
            >
              <FolderSearch className="h-4 w-4" /> <span>Discovery</span>
            </NavLink>

            <NavLink
              to={"/mount"}
              className={({ isActive }) =>
                `py-2 space-x-2 flex items-center ${
                  isActive ? "text-blue-500" : ""
                }`
              }
            >
              <Cable className="h-4 w-4" /> <span>Mount</span>
            </NavLink>
          </nav>

          <div className="py-2 px-4 min-h-[90vh] border-l-2 flex-1">
            <Outlet />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
