import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import BlogPost from "./pages/BlogPost";
import Root, {
  loader as rootLoader,
  action as rootAction,
} from "./routes/root";
import Home from "./pages/Home";
import ErrorPage from "./error-page";
import Contact, { loader as contactLoader } from "./routes/contact";
import EditContact, { action as editAction } from "./routes/edit";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contacts",
    element: <Root />,
    action: rootAction,
    loader: rootLoader,
    children: [
      {
        path: "/contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
      },
      {
        path: "/contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: editAction,
      },
    ],
  },
  {
    path: "/blog",
    element: <BlogPost />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
