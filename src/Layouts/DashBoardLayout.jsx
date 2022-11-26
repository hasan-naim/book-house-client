import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { AuthContext } from "../Contexts/AuthProvider";

function DashBoardLayout() {
  const { userFromData } = useContext(AuthContext);

  return (
    <>
      <div>
        <Navbar />

        <div className="drawer drawer-mobile h-auto">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content p-8">
            <Outlet />
          </div>
          <div className="drawer-side max-h-full h-auto">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 bg-slate-300 text-base-content space-y-1">
              {/* buyer */}
              <li>
                <Link to="/dashboard" className="font-bold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    className="w-5 h-5 font-bold"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                  My Orders
                </Link>
              </li>
              {/* seller and admin */}
              {userFromData && userFromData.role !== "buyer" ? (
                <li>
                  <Link to="/dashboard/addbooks" className="font-bold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={3}
                      stroke="currentColor"
                      className="w-5 h-5 font-bold"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Add Book
                  </Link>
                </li>
              ) : (
                <></>
              )}
            </ul>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default DashBoardLayout;
