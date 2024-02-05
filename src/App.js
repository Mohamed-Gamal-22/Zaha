import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home";
import Cart from "./Components/Cart/Cart";
import Sets from "./Components/Sets/Sets";
import Shop from "./Components/Shop/Shop";
import Login from "./Components/Login/Login";
import Coats from "./Components/Coats/Coats";
import Layout from "./Components/Layout/Layout";
import Dresses from "./Components/Dresses/Dresses";
import Account from "./Components/Account/Account";
import Wishlist from "./Components/Wishlist/Wishlist";
import Notfound from "./Components/Notfound/Notfound";
import Register from "./Components/Register/Register";
import Categories from "./Components/Categories/Categories";
import RecentlyViewd from "./Components/RecentlyViewd/RecentlyViewd";
import ProductDetails from "./Components/ProductDetails/ProductDetails";

let routers = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "cart", element: <Cart /> },
      { path: "sets", element: <Sets /> },
      { path: "shop", element: <Shop /> },
      { path: "coats", element: <Coats /> },
      { path: "login", element: <Login /> },
      { path: "account", element: <Account /> },
      { path: "dresses", element: <Dresses /> },
      { path: "wishlist", element: <Wishlist /> },
      { path: "register", element: <Register /> },
      { path: "categories", element: <Categories /> },
      { path: "recentlyviewd", element: <RecentlyViewd /> },
      { path: "productdetails", element: <ProductDetails /> },
      { path: "*", element: <Notfound /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={routers}></RouterProvider>;
}
