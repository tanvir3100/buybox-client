import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Register from '../Pages/Register/Register'
import Products from '../Pages/Products/Products'
import Login from '../Pages/Login/Login'
import Home from "../Pages/Home/Home";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/products',
                element: <Products />
            },
        ]
    },
]);

export default Router