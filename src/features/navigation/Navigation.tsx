import React, { useContext, useRef, useEffect } from 'react';
import "./styles/navigation.css";
import { MainContext } from "../../context/MainContext";
import { headerMenu } from "./components/Menu/headerMenu";
import { NavItem, SubmenuNav } from "./types/navigationInterfaces";
import { MenuButton } from "./components/MenuButton/MenuButton";
import { RenderNavLink } from "./components/RenderNavLink/RenderNavLink";
import { Switcher } from "./components/Switcher/Switcher";
import { useOutsideClick } from "../../hooks/useOutsideClick";

export const Navigation = () => {
    const { isMenuOpen, closeMenu, toggleMenu } = useContext( MainContext ).menu;
    const ref = useOutsideClick<HTMLDivElement>( closeMenu );

    return (
        <div ref={ ref } className="header__navigation">
            <MenuButton isOpen={ isMenuOpen } onClick={ toggleMenu }/>

            <div className={ `header__menu ${ isMenuOpen ? 'open' : '' }` }>
                { Object.keys( headerMenu ).length > 0 &&
                    <nav>
                        <ul className="menu">
                            { headerMenu.map( ( item: NavItem | SubmenuNav ) => (
                                    <RenderNavLink key={ item.label } item={ item }/>
                                )
                            ) }
                        </ul>
                    </nav>
                }

                <Switcher switcher="theme" label="Switch Theme"/>
                <Switcher switcher="language" label="Switch Language"/>
            </div>
        </div>
    );
}
