import React, { useEffect, useState } from "react";
import { MainContextProps } from "./types/contextInterfaces";
import { MainContext } from "./MainContext";
import { UseMediaQuery } from "../hooks/useMediaQuery";
import { WidthMediaQueries } from "../constants/constants";

export interface MainProviderProps {
    children: React.ReactNode;
}

export const MainProvider: React.FC<MainProviderProps> = ( { children } ) => {
    const [ isMenuOpen, setMenuOpen ] = useState( false );
    const [ isSubMenuOpen, setSubMenuOpen ] = useState( false );
    const [ isOverlayOpen, setOverlayOpen ] = useState( false )
    const isDesktop = UseMediaQuery( WidthMediaQueries.md );

    const closeMenu = () => {
        setMenuOpen( false );
        setSubMenuOpen( false );
        setOverlayOpen( false );
    }

    const toggleMenu = () => {
        setMenuOpen( prev => !prev );
        setSubMenuOpen( false );
        setOverlayOpen( false );
    }

    const toggleSubmenu = ( e: React.MouseEvent ) => {
        e.stopPropagation();
        setSubMenuOpen( prev => !prev );
    }

    useEffect( () => {
        if ( isMenuOpen ) {
            setOverlayOpen( true );
        }
    }, [ isMenuOpen ] )


    const value: MainContextProps = {
        menu: {
            isMenuOpen,
            setMenuOpen,
            isSubMenuOpen,
            setSubMenuOpen,
            closeMenu,
            toggleMenu,
            toggleSubmenu,
        },
        mediaQuery: {
            isDesktop,
        },
        overlay: {
            isOverlayOpen,
            setOverlayOpen,
        }
    }

    console.log( value );

    return (
        <MainContext.Provider value={ value }>
            { children }
        </MainContext.Provider>
    )
}
