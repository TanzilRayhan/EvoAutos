import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import ErrorPage from "./pages/errorpage/ErrorPage";
import AuthProvider from "./providers/AuthProvider";
import Root from "./layout/Root";
import AddProducts from "./pages/products/AddProducts";
import PrivateRoute from "./privateroute/PrivateRoute";
import AllProducts from "./pages/allproducts/AllProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/brand_data.json')
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/allProducts",
        element: <AllProducts></AllProducts>,
        loader: () => fetch("http://localhost:5000/products")
      },
      {
        path: "/addProducts",
        element:  <PrivateRoute><AddProducts></AddProducts></PrivateRoute>,
      },
    ],
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
