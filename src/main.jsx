import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import ErrorPage from './pages/errorpage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
     {
      path: "/login",
      element: <Login></Login>
     },
     {
      path: "/register",
      element: <Register></Register>
     },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
