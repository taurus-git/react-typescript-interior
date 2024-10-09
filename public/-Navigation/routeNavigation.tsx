import React from "react";
import { RouteMenuItem } from "../../types/interface";

const HomePage = React.lazy( () => import("../../pages/HomePage/HomePage") );

export const routeNavigation: RouteMenuItem[] = [
    { path: "/", element: <HomePage/> },
    { path: "/about", element: <HomePage/> },
    { path: "/bed-room", element: <HomePage/> },
    { path: "/living-room", element: <HomePage/> },
    { path: "/testimonial", element: <HomePage/> },
    { path: "/blog", element: <HomePage/> },
    { path: "/contact-us", element: <HomePage/> },
];
