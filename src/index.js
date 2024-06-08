import React from "react";
import "./input.css";

import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import WatchPage from "./components/WatchPage";
import SearchByName from "./components/SearchByName";
import VideosContainer from "./components/VideosContainer";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <VideosContainer />,
      },
      {
        path: "search/:name",
        element: <SearchByName />,
      },
      {
        path: ":id",
        element: <WatchPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
