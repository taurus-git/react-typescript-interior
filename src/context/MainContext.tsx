import { createContext } from 'react';
import { MainContextProps } from "./types/contextInterfaces"

//Todo: refactor this
const context: MainContextProps = {
    menu: {
        isMenuOpen: false,
        setMenuOpen: () => {},
        isSubMenuOpen: false,
        setSubMenuOpen: () => {},
        toggleMenu: () => {},
        toggleSubmenu: () => {},
    },
    mediaQuery: {
        isDesktop: false,
    },
    overlay: {
        isOverlayOpen: false,
        openOverlay: () => {},
        handleOverlayClick: () => {},
    },
    popup: {
        isPopupOpen: false,
        openPopup: () => {},
        closePopup: () => {},
    }
}

export const MainContext = createContext<MainContextProps>( context );
