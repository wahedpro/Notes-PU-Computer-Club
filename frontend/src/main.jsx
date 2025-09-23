import * as React from "react";
import * as ReactDOM from "react-dom/client";
import './index.css'
import router from './routes/routes.jsx';
import { RouterProvider } from 'react-router-dom';
import AuthProvider from "./context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
