import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home/Home";
import OurServices from "../OurServices/OurServices";
import ContactUs from "../ContactUs/ContactUs";
import AddToCard from "../AddToCard/AddToCard";
import Login from "../Login/Login";
import Register from "../Register/Register";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <OurServices></OurServices>
            },
            {
                path: '/contactus',
                element: <ContactUs></ContactUs>
            },
            {
                path: '/card',
                element: <PrivateRoutes><AddToCard></AddToCard></PrivateRoutes>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])