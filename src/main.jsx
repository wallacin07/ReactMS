import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Mapas from './Mapas.jsx';
import API from './API.jsx';
import Products from './Products.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/Products",
    element: <Products />,
  },
  {
    path: "/API",
    element: <API />,
  },
  {
    path: "/Mapas",
    element: <Mapas />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
