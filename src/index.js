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
import DeleteContact, { action as deleteAction } from "./routes/destroy";
import EditContact, { action as editAction } from "./routes/edit";
import IndexPage from "./routes";
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
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <IndexPage />,
      },
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
      {
        path: "/contacts/contactId/destroy",
        element: <DeleteContact />,
        action: deleteAction,
        errorElement: <div> Oops! There's an error</div>,
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
