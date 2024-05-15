import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Register from '../Pages/Register/Register'
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
                element: <Home />
            },
            {
                path: '/register',
                element: <Register />
            },
        ]
    },
]);

export default Router