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
          fetch(`http://localhost:5000/catagories/${params.id}`),
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
    ],
  },
]);

export default router;
