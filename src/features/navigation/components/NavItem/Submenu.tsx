import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
import { SubmenuNav } from "../../types/navigationInterfaces";
import { NavLinkItem } from "./NavLinkItem";
import { MainContext } from "../../../../context/MainContext";
import { Icon } from "../../../../components/ui/Icon/Icon";

interface SubmenuProps {
    submenu: SubmenuNav,
    className: string,
}

export const Submenu: React.FC<SubmenuProps> = ( { submenu, className } ) => {
    const { isSubMenuOpen, toggleSubmenu } = useContext( MainContext ).menu;
    const { isDesktop } = useContext( MainContext ).mediaQuery;

    const getSubmenuClass = () => {
        let className = "header__menu-item has-submenu";

        if ( isSubMenuOpen ) {
            className += ' open';
        }

        return className;
    }

    return (
        <li className={ getSubmenuClass() }
            onClick={ isDesktop ? undefined : toggleSubmenu }>

            <div className="header__submenu-link">
                <a>
                    { submenu.label }
                </a>
                <span className="header__submenu-icon">
                    <Icon id={ "arrow-next" }/>
                </span>
            </div>

            <ul className="header__submenu">
                { submenu.submenu.map( ( item ) => (
                    <NavLinkItem key={ item.label } item={ item } className={ className }/>
                ) ) }
            </ul>
        </li>
    );
}
