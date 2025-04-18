import { createBrowserRouter } from "react-router";
import Layout from "../pages/layout/Layout";
import Basket from "../pages/basket/Basket";
import Home from "../pages/home/Home";
import Wishlist from "../pages/wishlist/Wishlist";
import Notfound from "../pages/notfound/Notfound";

export const routers = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            {
                path: "/",
                Component: Home
            },
            {
                path: "/basket",
                Component: Basket
            },
            {
                path: "/wishlist",
                Component: Wishlist
            }
        ]
    },
    {
        path: "*",
        Component: Notfound
    }
])