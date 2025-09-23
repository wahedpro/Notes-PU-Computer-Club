import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage/HomePage";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import NotesPage from "../pages/NotesPage/NotesPage";

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
      },
      {
        path:"notes",
        element: <NotesPage></NotesPage>
      }
    ]
  },
]);

export default router;