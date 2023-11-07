import { useRoutes, BrowserRouter, Navigate } from "react-router-dom";
import { ShoppingCartProvider, useUser } from "../../Context";
import Home from "../Home";
import MyAccount from "../MyAccount";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders";
import NotFound from "../NotFound";
import SingIn from "../SignIn";
import SingUp from "../SignIn/sing-up";
import Navbar from "../../Components/Navbar";
import CheckoutSideMenu from "../../Components/CheckoutSideMenu";
import "./App.css";
import { useEffect, useState } from "react";

const AppRoutes = () => {
  const { createUser, findUserByUsername, getUser, setUser, user } = useUser();
    const userIsLogged = getUser() ? true : false;
  let routes = useRoutes([
    { path: "/", element: userIsLogged ? <Home /> : <Navigate replace to='/sing-in'/> },
    { path: "/clothes", element: userIsLogged ? <Home /> : <Navigate replace to='/sing-in'/> },
    { path: "/electronics", element: userIsLogged ? <Home /> : <Navigate replace to='/sing-in'/> },
    { path: "/furnitures", element: userIsLogged ? <Home /> : <Navigate replace to='/sing-in'/> },
    { path: "/toys", element: userIsLogged ? <Home /> : <Navigate replace to='/sing-in'/> },
    { path: "/othes", element: userIsLogged ? <Home /> : <Navigate replace to='/sing-in'/> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/my-orders/last", element: <MyOrder /> },
    { path: "/my-orders/:id", element: <MyOrder /> },
    { path: "/sing-in", element: <SingIn /> },
    { path: "/sing-up", element: <SingUp /> },
    { path: "/*", element: <NotFound /> },
  ]);

  return routes;
};

const App = () => {

  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  );
};

export default App;
