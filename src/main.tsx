import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import Home from "./components/pages/home";
import Root from "./components/pages/root";
import ErrorPage from "./components/pages/error-page";
import IDPPage from "./components/pages/idp";
import ActivityPage from "./components/pages/activity";
import ClassifyPage from "./components/pages/classify";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/idp",
        element: <IDPPage />,
      },
      {
        path: "/activity",
        element: <ActivityPage />,
      },
      {
        path: "/classify",
        element: <ClassifyPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
