import React, { useState, useRef, useEffect, useCallback } from "react";
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
    const subscribers = useRef( new Set<() => void>() )

    const openOverlay = useCallback( () => {
        setOverlayOpen( true );
        subscribers.current.forEach( ( callback ) => callback() );
    }, [ isOverlayOpen ] );

    const closeOverlay = useCallback( () => {
        setOverlayOpen( false );
        subscribers.current.forEach( ( callback ) => callback() );
    }, [ isOverlayOpen ] );

    const subscribe = ( callback: () => void ) => {
        subscribers.current.add( callback );
    }

    const unsubscribe = ( callback: () => void ) => {
        subscribers.current.delete( callback );
    }

    console.log( subscribers );

    const openMenu = () => {
        setMenuOpen( true );
        setOverlayOpen( true );
    }

    const closeMenu = () => {
        setMenuOpen( false );
        setSubMenuOpen( false );
        setOverlayOpen( false );
    }

    const toggleMenu = () => {
        if ( isMenuOpen ) {
            closeMenu();
        } else {
            openMenu();
        }
    }

    const toggleSubmenu = ( e: React.MouseEvent ) => {
        e.stopPropagation();
        setSubMenuOpen( prev => !prev );
    }

    const openPopup = () => {
        setPopupOpen( true );
        openOverlay();
    };

    const closePopup = () => {
        setPopupOpen( false );
        closeOverlay();
    };

    useEffect( () => {
        const closeMenuOnOverlayClick = () => {
            if ( isMenuOpen ) {
                toggleMenu();
            }
        }

        subscribe( closeMenuOnOverlayClick );

        return () => {
            unsubscribe( closeMenuOnOverlayClick );
        }
    }, [ isMenuOpen, subscribe, unsubscribe ] );

    useEffect( () => {
        const closePopupOnOverlayClick = () => {
            if ( isPopupOpen ) {
                setPopupOpen( false );

                if ( isOverlayOpen ) {
                    setOverlayOpen( false );
                }
            }
        }

        subscribe( closePopupOnOverlayClick );

        return () => {
            unsubscribe( closePopupOnOverlayClick );
        }

    }, [ isPopupOpen, isOverlayOpen, closePopup, closeOverlay ] );

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
            closeOverlay,
            subscribe,
            unsubscribe
        },
        popup: {
            isPopupOpen,
            openPopup,
            closePopup,
        }
    }

    console.log( value );

    return (
        <MainContext.Provider value={ value }>
            { children }
        </MainContext.Provider>
    )
}
