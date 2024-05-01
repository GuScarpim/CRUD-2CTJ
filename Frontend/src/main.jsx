import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Home from './pages';
import CreateProducts from './pages/CreateProducts';

import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home />),
  },
  {
    path: "produtos",
    element: <CreateProducts />,
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);