import React, { useContext, useEffect } from 'react';
import "./styles/navigation.css";
import { MainContext } from "../../context/MainContext";
import { headerMenu } from "./components/Menu/menu";
import { NavItem, SubmenuNav } from "./types/navigationInterfaces";
import { MenuButton } from "./components/MenuButton/MenuButton";
import { RenderNavLink } from "./components/RenderNavLink/RenderNavLink";
import { Switcher } from "./components/Switcher/Switcher";
import { Logo } from "../../components/ui/Logo/Logo";
import { Styles } from "../../constants/constants";

export const Navigation = () => {
    const { isMenuOpen, toggleMenu } = useContext( MainContext ).menu;

    return (
        <div className="header__navigation">
            <MenuButton isOpen={ isMenuOpen } onClick={ toggleMenu }/>
            <span className="header__logo">
                <Logo/>
            </span>
            <div className={ `header__menu ${ isMenuOpen ? 'open' : '' }` }>
                { Object.keys( headerMenu ).length > 0 &&
                    <nav className="header__nav">
                        <ul className="header__menu-items">
                            { headerMenu.map( ( item: NavItem | SubmenuNav ) => (
                                    <RenderNavLink
                                        key={ item.label }
                                        item={ item }
                                        className={ Styles.headerMenuItem }>
                                        { item.label }
                                    </RenderNavLink>
                                )
                            ) }
                        </ul>
                    </nav>
                }

                {/*<Switcher switcher="theme" label="Switch Theme"/>
                <Switcher switcher="language" label="Switch Language"/>*/ }
            </div>
        </div>
    );
}
