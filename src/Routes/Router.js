import MainLayout from "../Layouts/MainLayout";
import CatagoriePage from "../pages/CatagoriePage";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import PrivetRote from "../PrivetRoute/PrivetRote";

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
]);

export default router;
