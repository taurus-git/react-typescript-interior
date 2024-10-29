import React from "react";
import { RouteMenuItem } from "../../types/navigationInterfaces";

const HomePage = React.lazy( () => import("../../../../pages/HomePage/HomePage") );

export const routeNavigation: RouteMenuItem[] = [
    { path: "/", element: <HomePage/> },
    { path: "/about", element: <HomePage/> },
    { path: "/bed-room", element: <HomePage/> },
    { path: "/living-room", element: <HomePage/> },
    { path: "/testimonial", element: <HomePage/> },
    { path: "/blog", element: <HomePage/> },
    { path: "/contact-us", element: <HomePage/> },
    { path: "/careers", element: <HomePage/> },
    { path: "/our-team", element: <HomePage/> },
    { path: "/help-center", element: <HomePage/> },
    { path: "/gift-cards", element: <HomePage/> },
    { path: "/products", element: <HomePage/> },
    { path: "/my-account", element: <HomePage/> },
    { path: "/shipping", element: <HomePage/> },
    { path: "/returns", element: <HomePage/> },
    { path: "/payment-options", element: <HomePage/> },
    { path: "/store-locator", element: <HomePage/> },
    { path: "/accessibility", element: <HomePage/> },
    { path: "/affiliates", element: <HomePage/> },
    { path: "/rewards-faq", element: <HomePage/> },
    { path: "/product-care", element: <HomePage/> },
    { path: "/size-guide", element: <HomePage/> },
];
