import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage/HomePage";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";
import LoginPage from "../pages/LoginPage/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path:"/",
        element: <HomePage></HomePage>
      },
      {
        path:"login",
        element:<LoginPage></LoginPage>
      },
      {
        path:"registration",
        element: <RegistrationPage></RegistrationPage>
      }
    ]
  },
]);

export default router;