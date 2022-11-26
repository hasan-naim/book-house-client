import React from "react";
import { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
// import toast from "react-hot-toast";
import logo from "../../assets/logo/logo.png";
import { AuthContext } from "../../Contexts/AuthProvider";

const navItems = (
  <>
    <li>
      <Link
        to={"/"}
        className="hover:bg-transparent text-white active:text-white hover:-translate-y-1 duration-500"
      >
        Home
      </Link>
    </li>
    <li>
      <Link
        to={"/books"}
        className="hover:bg-transparent text-white active:text-white hover:-translate-y-1 duration-500"
      >
        Books
      </Link>
    </li>
    <li>
      <Link
        to={"/dashboard"}
        className="hover:bg-transparent text-white active:text-white hover:-translate-y-1 duration-500"
      >
        Dashboard
      </Link>
    </li>

    <li>
      <Link
        to={"/blog"}
        className="hover:bg-transparent text-white active:text-white hover:-translate-y-1 duration-500"
      >
        Blog
      </Link>
    </li>
  </>
);

function Navbar() {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then((res) => {
        toast.success("You are successfully loged out!");
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="gradient-bg sticky top-0 w-full shadow-md backdrop-blur-sm z-50 ">
      <div className="container">
        <div className="navbar p-0">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  fill="#000"
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
              </label>
              <ul
                tabIndex={1}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow gradient-bg rounded-box w-52 space-y-1"
              >
                {navItems}
              </ul>
            </div>
            <Link
              to={"/"}
              className="translate-y-0 flex items-center duration-300 h-full ml-3 lg:ml-0 hover:bg-transparent text-white hover:-translate-y-2 hover:cursor-pointer normal-case text-xl"
            >
              <img className="w-6 sm:w-10 mr-2 md:mr-2" src={logo} alt="" />
              <h1 className="text-sm sm:text-xl cursor-pointer font-bold md:text-3xl lg:text-3xl font-mono">
                Book House
              </h1>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0 space-x-2">{navItems}</ul>
          </div>
          <div className="navbar-end space-x-4">
            {user ? (
              <>
                {user?.photoURL ? (
                  <>
                    <div className="avatar">
                      <div className="w-8 rounded-full ring ring-gray-400 ring-offset-primary ring-offset">
                        <img src={user.photoURL} alt="profile" />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {user?.displayName ? (
                      <>
                        <div className="avatar placeholder">
                          <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                            <span className="text-xs uppercase">
                              {user?.displayName.slice(0, 1)}
                            </span>
                          </div>
                        </div>{" "}
                      </>
                    ) : (
                      <>
                        <div className="avatar placeholder">
                          <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                            <span className="text-xs uppercase">
                              {user?.email?.slice(0, 1)}
                            </span>
                          </div>
                        </div>{" "}
                      </>
                    )}
                  </>
                )}
                <button
                  onClick={handleLogOut}
                  className="btn btn-outline hover:bg-primary p-1 sm:px-4"
                >
                  Log Out
                </button>
              </>
            ) : (
              <Link
                to={"/login"}
                className="btn btn-outline  bg-transparent hover:bg-white hover:text-secondary border-2 hover:border-2 hover:border-transparent text-white"
              >
                Login
              </Link>
            )}
          </div>
          <label
            htmlFor="my-drawer-2"
            tabIndex={2}
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
