import React from "react";

export interface MenuItem {
    label: string,
    path: string,
    external?: boolean,
    submenu?: MenuItem[]
}

export interface RouteMenuItem {
    path: string,
    element: React.ReactNode;
}


