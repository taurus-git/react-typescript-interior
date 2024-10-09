import React from "react";

export interface MenuState {
    isMenuOpen: boolean,
    setMenuOpen: ( open: boolean ) => void,
    isSubMenuOpen: boolean,
    setSubMenuOpen: ( open: boolean ) => void,
    toggleMenu: () => void,
    toggleSubmenu: (e: React.MouseEvent) => void,
}

export interface MainContextProps {
    menu: MenuState,
}
