import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import Root from "./components/pages/root";
import ErrorPage from "./components/pages/error-page";
import Discovery from "./components/pages/discovery";
import Mount from "./components/pages/mount";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Discovery />,
      },
      {
        path: "/mount",
        element: <Mount />,
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
