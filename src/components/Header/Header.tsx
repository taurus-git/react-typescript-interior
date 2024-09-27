import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { Navigation } from "../Navigation/Navigation";
import { Icon } from "../Icon/Icon";
import { headerMenuItems } from "./headerMenuItems";
import "./header.css";

export const Header: React.FC = () => {
    const [ isMenuOpen, setMenuOpen ] = useState<boolean>( false );
    const location = useLocation();

    const toggleMenu = () => {
        setMenuOpen( ( prevState ) => !prevState );
    };


    /* const ref = useOutsideClick( () => {
         if ( isMenuOpen ) {
             setMenuOpen( false );
         }
     } );*/

    useEffect( () => {
        return setMenuOpen( false );
    }, [ location ] );

    return (
        <header className="header">
            <div className="header-wrapper">
                <div className="header__logo"></div>

                <button className="header__mobile-menu-icon" onClick={ toggleMenu }>
                    <Icon id={ `menu${ isMenuOpen ? '-close' : '' }` }/>
                </button>

                <div className={ `header__menu ${ isMenuOpen ? 'open' : '' }` }>
                    {/*Todo: кнопку поставить на absolute. Таким образом она будет видна и при открытом и закрытом меню
                    в зависимсоти от класса на родителе, менять иконку.
                    возможно, отдельную функцию для получения id кнопки.*/ }
                    <Navigation menuItems={ headerMenuItems }/>
                    <div className="theme-switcher" data-no-close>Switch Theme</div>
                    <div className="language-switcher" data-no-close>Switch Language</div>
                </div>

                <div className="header__actions"></div>
                <div className="header__auth-buttons"></div>
            </div>
        </header>
    );
};
