import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";
import Users from "./components/Users.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import MainLayout from "./components/MainLayout.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <App></App>,
        loader:()=>fetch('http://localhost:5000/user')
       
      },
      {
        path:'/user',
        element:<Users></Users>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element:<Register></Register>,
      },
      {
        path:'/user',
        element:<Users></Users>,
       
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
