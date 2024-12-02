import React from "react";

export interface NavItem {
    label: string;
    path: string;
}

export interface SubmenuNav extends Omit<NavItem, 'path'> {
    submenu: NavItem[];
}

export interface RouteMenuItem {
    path: string;
    element: React.ReactNode;
}
