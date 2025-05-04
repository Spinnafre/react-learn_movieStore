import { createBrowserRouter } from "react-router";

import { Favorites, Home } from "./pages";
import App from "./App";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Home },
      {
        path: "/favorites",
        Component: Favorites,
      },
    ],
  },
]);
