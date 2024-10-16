import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
import { SubmenuNav } from "../../types/navigationInterfaces";
import { NavLinkItem } from "./NavLinkItem";
import { MainContext } from "../../../../context/MainContext";
import { Icon } from "../../../../components/ui/Icon/Icon";

interface SubmenuProps {
    submenu: SubmenuNav,
}

export const Submenu: React.FC<SubmenuProps> = ( { submenu } ) => {
    const { isSubMenuOpen, toggleSubmenu } = useContext( MainContext ).menu;

    const getSubmenuClass = () => {
        let className = "menu-item has-submenu";

        if ( isSubMenuOpen ) {
            className += ' open';
        }

        return className;
    }

    return (
        <li className={ getSubmenuClass() }
            onClick={ toggleSubmenu }>

            <div className="menu-item__submenu">
                <NavLink to="">
                    { submenu.label }
                </NavLink>
                <span className="menu-item__submenu-nav">
                    <Icon id={ "arrow-next" }/>
                </span>
            </div>

            <ul className="header__menu--submenu">
                { submenu.submenu.map( ( item ) => (
                    <NavLinkItem key={ item.label } item={ item }/>
                ) ) }
            </ul>
        </li>
    );
}
