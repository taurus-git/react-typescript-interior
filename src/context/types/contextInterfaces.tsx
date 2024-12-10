import React from "react";
//Todo: refactor this
export interface MenuState {
    isMenuOpen: boolean;
    setMenuOpen: ( open: boolean ) => void;
    isSubMenuOpen: boolean;
    setSubMenuOpen: ( open: boolean ) => void;
    toggleMenu: () => void;
    toggleSubmenu: ( e: React.MouseEvent ) => void;
}

export interface MediaQueryState {
    isDesktop: boolean;
}

export interface OverlayState {
    isOverlayOpen: boolean;
    openOverlay: () => void;
    handleOverlayClick: () => void;
}

export interface PopupState {
    isPopupOpen: boolean;
    openPopup: () => void;
    closePopup: () => void;
}

export interface MainContextProps {
    menu: MenuState;
    mediaQuery: MediaQueryState;
    overlay: OverlayState;
    popup: PopupState;
}
