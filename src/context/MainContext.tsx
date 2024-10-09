import { createContext } from 'react';
import { MainContextProps } from "./types/contextInterfaces"

const context: MainContextProps = {
    menu: {
        isMenuOpen: false,
        setMenuOpen: () => {},
        isSubMenuOpen: false,
        setSubMenuOpen: () => {},
        toggleMenu: () => {},
        toggleSubmenu: () => {},
    },
}

export const MainContext = createContext<MainContextProps>( context );
