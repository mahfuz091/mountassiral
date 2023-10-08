import { createBrowserRouter } from "react-router-dom";
import DashBoardLayout from "../Layout/DashBoardLayout/DashBoardLayout";
import MainMenu from "../pages/Dashboard/MainMenu/MainMenu";
import PreviousOrder from "../pages/Dashboard/PreviousOrder/PreviousOrder";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashBoardLayout />,
    children: [
      {
        path: "mainmenu",
        element: <MainMenu></MainMenu>,
      },
      {
        path: "previousOrder",
        element: <PreviousOrder></PreviousOrder>,
      },
    ],
  },
]);
