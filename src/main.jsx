import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Collection from "./pages/Collection";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import PlaceOrder from "./pages/PlaceOrder";
import Product from "./pages/Product";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        // { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "cart", element: <Cart /> },
        { path: "collection", element: <Collection /> },
        { path: "contact", element: <Contact /> },
        { path: "login", element: <Login /> },
        { path: "order", element: <Orders /> },
        { path: "placeorder", element: <PlaceOrder /> },
        { path: "product", element: <Product /> },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    },
  }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
