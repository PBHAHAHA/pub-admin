import About from "@/views/About";
import Dashbord from "@/views/Dashbord";
import Home from "@/views/Home";
import User from "@/views/User";
import Login from "@/views/Login";
import React,{ lazy } from 'react'
import { Navigate } from "react-router-dom";
import Error404 from "@/views/Error/404";

function suspenseLoading(comp: JSX.Element){
    return <React.Suspense fallback={<div>Loadding...</div>}>
        {comp}
    </React.Suspense> 
}
const routes = [
    {
        path: "/",
        element: <Navigate to={"/dashbord"}/>
    },
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: '/dashbord',
                element: suspenseLoading(<Dashbord />)
            },
            {
                path: '/about',
                element: suspenseLoading(<About />)
            },
            {
                path: '/user/list',
                element: suspenseLoading(<User />)
            },
            {
                path: '/user/auth',
                element: suspenseLoading(<User />)
            }
        ]
    },
    {
        path: "/login",
        element: suspenseLoading(<Login />)
    },
    {
        path: "/404",
        element: suspenseLoading(<Error404 />)
    },
    {
        path: "*",
        element: <Navigate to="/404" />
    }

    // {
    //     path: '/about',
    //     element: suspenseLoading(<User />)
    // }
]

export default routes