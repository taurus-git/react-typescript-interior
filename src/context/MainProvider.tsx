import React, { useState, useCallback } from "react";
import { MainContextProps } from "./types/contextInterfaces";
import { MainContext } from "./MainContext";
import { UseMediaQuery } from "../hooks/useMediaQuery";
import { WidthMediaQueries } from "../constants/constants";

export interface MainProviderProps {
    children: React.ReactNode;
}

export const MainProvider: React.FC<MainProviderProps> = ( { children } ) => {
    //Todo: refactor this
    const [ isMenuOpen, setMenuOpen ] = useState( false );
    const [ isSubMenuOpen, setSubMenuOpen ] = useState( false );
    const [ isOverlayOpen, setOverlayOpen ] = useState( false );
    const [ isPopupOpen, setPopupOpen ] = useState( false );

    const isDesktop = UseMediaQuery( WidthMediaQueries.md );

    const closeMenuAndSubmenu = useCallback( () => {
        setMenuOpen( false );
        setSubMenuOpen( false );
    }, [] );

    const openOverlay = useCallback( () => setOverlayOpen( true ), [] );
    const closeOverlay = useCallback( () => setOverlayOpen( false ), [] );

    const toggleMenu = useCallback( () => {
        if ( isMenuOpen ) {
            closeMenuAndSubmenu();
            closeOverlay();
        } else {
            setMenuOpen( true );
            openOverlay();
        }
    }, [ isMenuOpen, closeMenuAndSubmenu, closeOverlay, openOverlay ] );

    const toggleSubmenu = useCallback( ( e: React.MouseEvent ) => {
        e.stopPropagation();
        setSubMenuOpen( ( prev ) => !prev );
    }, [] );

    const openPopup = useCallback( () => {
        setPopupOpen( true );
        openOverlay();
    }, [ openOverlay ] );

    const closePopup = useCallback( () => {
        setPopupOpen( false );
        closeOverlay();
    }, [ closeOverlay ] );

    const handleOverlayClick = useCallback( () => {
        if ( isMenuOpen ) {
            closeMenuAndSubmenu();
        }
        if ( isPopupOpen ) {
            setPopupOpen( false );
        }
        closeOverlay();
    }, [ isMenuOpen, isPopupOpen, closeMenuAndSubmenu, closeOverlay ] );

    const value: MainContextProps = {
        menu: {
            isMenuOpen,
            setMenuOpen,
            isSubMenuOpen,
            setSubMenuOpen,
            toggleMenu,
            toggleSubmenu,
        },
        mediaQuery: {
            isDesktop,
        },
        overlay: {
            isOverlayOpen,
            openOverlay,
            handleOverlayClick,
        },
        popup: {
            isPopupOpen,
            openPopup,
            closePopup,
        },
    };

    return (
        <MainContext.Provider value={ value }>
            { children }
        </MainContext.Provider>
    )
}
