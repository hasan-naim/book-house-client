import DashBoardLayout from "../Layouts/DashBoardLayout";
import MainLayout from "../Layouts/MainLayout";
import CatagoriePage from "../pages/CatagoriePage";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Blog from "../pages/Blog";
import PrivetRote from "../PrivetRoute/PrivetRote";
import MyOrders from "../pages/Dashboard/MyOrders";
import AddBooks from "../pages/Dashboard/AddBooks";
import AdminSellerPrivateRoute from "../PrivetRoute/AdminSellerPrivateRoute";
import AdminOnlyPrivateRoute from "../PrivetRoute/AdminOnlyPrivateRoute";
import MyAddedBooks from "../pages/Dashboard/MyAddedBooks";
import AllBuyers from "../pages/Dashboard/AllBuyers";
import AllSellers from "../pages/Dashboard/AllSellers";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/catagories/:id",
        element: (
          <PrivetRote>
            <CatagoriePage />
          </PrivetRote>
        ),
        loader: ({ params }) =>
          fetch(
            `https://book-house-server-three.vercel.app/catagories/${params.id}`
          ),
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivetRote>
        <DashBoardLayout />
      </PrivetRote>
    ),
    children: [
      {
        path: "/dashboard",
        element: <MyOrders />,
      },
      {
        path: "/dashboard/addbooks",
        element: (
          <AdminSellerPrivateRoute>
            <AddBooks />
          </AdminSellerPrivateRoute>
        ),
      },
      {
        path: "/dashboard/myaddedbooks",
        element: (
          <AdminSellerPrivateRoute>
            <MyAddedBooks />
          </AdminSellerPrivateRoute>
        ),
      },
      {
        path: "/dashboard/allbuyers",
        element: (
          <AdminOnlyPrivateRoute>
            <AllBuyers />
          </AdminOnlyPrivateRoute>
        ),
      },
      {
        path: "/dashboard/allsellers",
        element: (
          <AdminOnlyPrivateRoute>
            <AllSellers />
          </AdminOnlyPrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
