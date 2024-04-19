import { Navigate } from "react-router-dom";
import TopBar from "./Topbar";
import CreateUser from "./CreateUSer";
import ShowMore from "./Showmore";
import Dashboard from "./Dashboard";
import Edit from "./Edit";
import Home from "./Home";

const AppRoutes = [
  {
    path: "/",
    exact: true,
    element: (
      <>
        <TopBar /> <Home />
      </>
    ),
  },

  {
    path: "/dashboard",
    exact: true,
    element: (
      <>
        <TopBar />
        <Dashboard />
      </>
    ),
  },
  {
    path: "/create-user",
    exact: true,
    element: (
      <>
        <TopBar />
        <CreateUser />
      </>
    ),
  },
  {
    path: "/edit/:id",
    exact: true,
    element: (
      <>
        <TopBar />
        <Edit />
      </>
    ),
  },
  {
    path: "/show-more/:id",
    exact: true,
    element: (
      <>
        <TopBar />
        <ShowMore />
      </>
    ),
  },
  {
    path: "/*",
    exact: false,
    element: <Navigate to="/" />,
  },
];

export default AppRoutes;
