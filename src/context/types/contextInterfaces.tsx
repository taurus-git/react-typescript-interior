import React from "react";

export interface MenuState {
    isMenuOpen: boolean;
    setMenuOpen: ( open: boolean ) => void;
    isSubMenuOpen: boolean;
    setSubMenuOpen: ( open: boolean ) => void;
    closeMenu: () => void;
    toggleMenu: () => void;
    toggleSubmenu: ( e: React.MouseEvent ) => void;
}

export interface MediaQueryState {
    isDesktop: boolean;
}

export interface OverlayState {
    isOverlayOpen: boolean;
    setOverlayOpen: ( open: boolean ) => void;
    overlayChildren?: React.ReactNode;
}

export interface MainContextProps {
    menu: MenuState;
    mediaQuery: MediaQueryState;
    overlay: OverlayState;
}
