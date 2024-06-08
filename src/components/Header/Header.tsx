import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./header.css";
import { Navigation } from "../Navigation/Navigation";
import { headerMenuItems } from "./headerMenuItems";
import { Icon } from "../Icon/Icon";
import { useOutsideClick } from "../../hooks/useOutsideClick";

export const Header: React.FC = () => {
    const [ showMenu, setShowMenu ] = useState<boolean>( false );
    const location = useLocation();

    const toggleMenu = () => setShowMenu( !showMenu );

    const ref = useOutsideClick( () => {
        if ( showMenu ) {
            setShowMenu( false );
        }
    } );

    useEffect( () => {
        return setShowMenu( false );
    }, [ location ] );

    return (
        <header className="header">
            <div className="header-wrapper">
                <div className="header__mobile-menu-icon" onClick={ toggleMenu }>
                    <Icon id="menu"/>
                </div>
                <div className="header__logo"></div>

                <div ref={ ref } className={ `header__menu ${ showMenu ? 'show' : '' }` }>
                    <div className="header__mobile-menu-close-icon" onClick={ toggleMenu }>
                        <Icon id="menu-close"/>
                    </div>
                    <Navigation menuItems={ headerMenuItems } toggleMenu={ toggleMenu }/>
                    <div className="theme-switcher" data-no-close>Switch Theme</div>
                    <div className="language-switcher" data-no-close>Switch Language</div>
                </div>

                <div className="header__actions"></div>
                <div className="header__auth-buttons"></div>
            </div>
        </header>
    );
};
