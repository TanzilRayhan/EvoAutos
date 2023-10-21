/* eslint-disable no-unused-vars */

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
import UpdateProducts from "./pages/products/UpdateProducts";
import About from "./pages/additional/About";

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
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/allProducts",
        element: <AllProducts></AllProducts>,
        loader: () => fetch("https://evo-autos-server-pu39k5ogs-tanzilrayhans-projects.vercel.app/products")
      },
      {
        path: "/addProducts",
        element:  <PrivateRoute><AddProducts></AddProducts></PrivateRoute>,
      },
      {
        path: "/updateProducts/:id",
        element:  <PrivateRoute><UpdateProducts></UpdateProducts></PrivateRoute>,
        loader: ({params}) => fetch(`https://evo-autos-server-pu39k5ogs-tanzilrayhans-projects.vercel.app/products/${params.id}`)
      }
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
