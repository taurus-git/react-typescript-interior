import React, { useState } from "react";
import { MainContextProps } from "./types/contextInterfaces";
import { MainContext } from "./MainContext";

export interface MainProviderProps {
    children: React.ReactNode
}

export const MainProvider: React.FC<MainProviderProps> = ( { children } ) => {
    const [ isMenuOpen, setMenuOpen ] = useState( false );
    const [ isSubMenuOpen, setSubMenuOpen ] = useState( false );

    const toggleMenu = () => {
        setMenuOpen( prev => !prev );
        setSubMenuOpen( false )
    }

    const toggleSubmenu = ( e: React.MouseEvent ) => {
        e.stopPropagation();
        setSubMenuOpen( prev => !prev );
    }

    const value: MainContextProps = {
        menu: {
            isMenuOpen,
            setMenuOpen,
            isSubMenuOpen,
            setSubMenuOpen,
            toggleMenu,
            toggleSubmenu
        }
    }

    return (
        <MainContext.Provider value={ value }>
            { children }
        </MainContext.Provider>
    )
}
